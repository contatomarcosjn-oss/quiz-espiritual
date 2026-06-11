const META_PIXEL_ID = '872610725891712'

let initialized = false
let lastPageViewUrl = ''

function canUseBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

function loadMetaPixel() {
  if (!canUseBrowser() || initialized) return

  ;(function (f, b, e, v, n, t, s) {
    if (f.fbq) return
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = true
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = true
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')

  window.fbq('init', META_PIXEL_ID)
  initialized = true
  console.log(`[Meta Pixel] Initialized pixel ${META_PIXEL_ID}`)
}

export function trackPageView() {
  if (!canUseBrowser()) return

  loadMetaPixel()

  const currentUrl = window.location.href
  if (currentUrl === lastPageViewUrl) return

  window.fbq('track', 'PageView')
  lastPageViewUrl = currentUrl
  console.log('[Meta Pixel] PageView fired', {
    pixelId: META_PIXEL_ID,
    url: currentUrl,
  })
}

function hasTrackedEvent(eventKey) {
  try {
    return window.sessionStorage.getItem(eventKey) === 'true'
  } catch {
    return false
  }
}

function rememberTrackedEvent(eventKey) {
  try {
    window.sessionStorage.setItem(eventKey, 'true')
  } catch {
    // Tracking must never break the funnel when storage is unavailable.
  }
}

function trackStandardEvent(eventName, params = {}, options = {}) {
  if (!canUseBrowser()) return

  loadMetaPixel()

  if (options.eventKey && hasTrackedEvent(options.eventKey)) {
    console.log(`[Meta Pixel] ${eventName} skipped`, {
      pixelId: META_PIXEL_ID,
      reason: 'already_tracked_in_session',
      eventKey: options.eventKey,
    })
    return
  }

  window.fbq('track', eventName, params)

  if (options.eventKey) {
    rememberTrackedEvent(options.eventKey)
  }

  console.log(`[Meta Pixel] ${eventName} fired`, {
    pixelId: META_PIXEL_ID,
    ...params,
  })
}

export function trackQuizStart() {
  trackStandardEvent(
    'ViewContent',
    {
      content_name: 'Quiz Espiritual',
      content_category: 'quiz_start',
    },
    { eventKey: 'meta_pixel_view_content_quiz_start' },
  )
}

export function trackLead() {
  trackStandardEvent(
    'Lead',
    {
      content_name: 'Captura de Lead - Resultado do Quiz',
      content_category: 'lead_capture',
    },
    { eventKey: 'meta_pixel_lead_capture' },
  )
}

export function trackInitiateCheckout() {
  trackStandardEvent('InitiateCheckout', {
    content_name: 'Guia de Observação e Autoconhecimento',
    content_category: 'checkout',
    value: 7.9,
    currency: 'BRL',
  })
}

export function trackPurchase() {
  trackStandardEvent(
    'Purchase',
    {
      content_name: 'Guia de Observação e Autoconhecimento',
      content_category: 'purchase',
      value: 7.9,
      currency: 'BRL',
    },
    { eventKey: 'meta_pixel_purchase_main_offer' },
  )
}

export function installMetaPixelPageViewTracking() {
  if (!canUseBrowser()) return

  trackPageView()

  const notifyPageChange = () => {
    window.setTimeout(trackPageView, 0)
  }

  const originalPushState = window.history.pushState
  const originalReplaceState = window.history.replaceState

  window.history.pushState = function pushStateWithPixel(...args) {
    const result = originalPushState.apply(this, args)
    notifyPageChange()
    return result
  }

  window.history.replaceState = function replaceStateWithPixel(...args) {
    const result = originalReplaceState.apply(this, args)
    notifyPageChange()
    return result
  }

  window.addEventListener('popstate', notifyPageChange)
  window.addEventListener('hashchange', notifyPageChange)
}
