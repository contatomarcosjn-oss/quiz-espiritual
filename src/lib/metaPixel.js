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

export function trackInitiateCheckout() {
  if (!canUseBrowser()) return

  loadMetaPixel()
  window.fbq('track', 'InitiateCheckout')
  console.log('[Meta Pixel] InitiateCheckout fired', {
    pixelId: META_PIXEL_ID,
    source: 'FAZER MEU QUIZ AGORA',
  })
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
