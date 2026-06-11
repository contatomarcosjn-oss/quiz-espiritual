import { useEffect } from 'react'
import { trackPurchase } from '../lib/metaPixel.js'

const ebookUrl = '/Os-7-Sinais-Espirituais-Que-Muitas-Pessoas-Ignoram.pdf'

export default function ThankYouPage() {
  useEffect(() => {
    trackPurchase()
  }, [])

  return (
    <section className="stage thank-you-stage">
      <div className="thank-you-card">
        <div className="result-identified">
          <span />
          <p>ACESSO LIBERADO</p>
          <span />
        </div>
        <div className="result-icon" aria-hidden="true">
          ✦
        </div>
        <p className="eyebrow">Obrigado pela sua compra</p>
        <h1>Compra realizada com sucesso.</h1>
        <p>
          Seu ebook já está disponível. Clique no botão abaixo para baixar o arquivo
          em PDF e começar sua leitura.
        </p>
        <a className="primary-button download-button" href={ebookUrl} download>
          Baixar ebook
        </a>
      </div>
    </section>
  )
}
