import { trackInitiateCheckout } from '../lib/metaPixel.js'

const CHECKOUT_URL = "https://pay.kiwify.com.br/hBznpO9";
const ctaText = 'QUERO DESCOBRIR MEUS SINAIS'

const seals = [
  'Acesso imediato ao guia digital',
  'Leitura rapida',
  'Bonus Diario dos Sinais',
  'Garantia 7 dias',
]

const situations = [
  ['Sonhos que se repetem', 'Imagens, lugares ou sensacoes que voltam mais de uma vez.'],
  ['Coincidencias estranhas', 'Repeticoes que parecem pequenas, mas chamam sua atencao.'],
  ['Intuicoes repentinas', 'Uma certeza interna que surge antes de qualquer explicacao.'],
  ['Pessoas no momento certo', 'Conversas e encontros que aparecem quando voce precisava ouvir algo.'],
  ['Sensacao de protecao', 'Momentos em que algo parece ter te guiado para longe de um caminho.'],
]

const deliverables = [
  'Ebook completo',
  'Os 7 sinais explicados',
  'Exercicios de observacao',
  'Diario dos sinais',
  'Reflexoes guiadas',
  'Acesso imediato',
]

const faqs = [
  ['E religiao?', 'Nao. O material e educativo, reflexivo e voltado para autoconhecimento.'],
  ['Preciso ter mediunidade?', 'Nao. O guia foi criado para qualquer pessoa interessada em observar melhor a propria experiencia.'],
  ['Serve para Umbanda?', 'Sim. O conteudo nao esta ligado a uma religiao especifica e pode ser usado como ferramenta de reflexao pessoal.'],
  ['Recebo na hora?', 'Sim. O acesso e liberado apos a confirmacao do pagamento.'],
  ['Tem garantia?', 'Sim. Voce tem 7 dias para solicitar reembolso pela plataforma, caso o material nao faca sentido para voce.'],
]

function EbookMockup({ open = false }) {
  return (
    <div className={open ? 'clean-book-stage is-open' : 'clean-book-stage'}>
      <div className="clean-book-aura" />
      <div className="clean-orbit orbit-a" />
      <div className="clean-orbit orbit-b" />
      <div className="clean-book">
        <div className="clean-book-spine">OS 7 SINAIS</div>
        <div className="clean-book-pages" />
        <div className="clean-book-cover">
          <div className="clean-cover-symbol">
            <span />
            <span />
            <span />
          </div>
          <small>EBOOK PREMIUM</small>
          <strong>Os 7 Sinais Espirituais Que Muitas Pessoas Ignoram</strong>
          <em>Leitura guiada + Diario dos Sinais</em>
        </div>
      </div>
      {open && (
        <>
          <article className="clean-preview-page page-one">
            <span>CAPITULO 01</span>
            <strong>Intuicao Repentina</strong>
            <p>Como observar uma percepcao interna sem confundir com impulso ou ansiedade.</p>
          </article>
          <article className="clean-preview-page page-two">
            <span>BONUS</span>
            <strong>Diario dos Sinais</strong>
            <p>Um roteiro simples para registrar sonhos, coincidencias, sensacoes e padroes.</p>
          </article>
        </>
      )}
    </div>
  )
}

export default function SalesPage() {
  const goToCheckout = () => {
    trackInitiateCheckout()
    window.location.href = CHECKOUT_URL;
  };

  return (
    <main className="sales-page clean-page">
      <section className="clean-hero">
        <div className="clean-particles" aria-hidden="true" />
        <div className="clean-hero-copy">
          <p className="clean-eyebrow">GUIA PREMIUM DE OBSERVACAO ESPIRITUAL</p>
          <h1>Os 7 sinais espirituais que podem estar tentando chamar sua atencao.</h1>
          <p>
            Sonhos repetitivos, coincidencias estranhas, intuicoes fortes e sensacoes
            dificeis de explicar. Aprenda a reconhecer esses sinais e registrar tudo
            com mais clareza.
          </p>
          <button className="clean-button" onClick={goToCheckout}>{ctaText}</button>
          <div className="clean-seals">
            {seals.map((seal) => <span key={seal}>{seal}</span>)}
          </div>
        </div>
        <div className="clean-hero-visual">
          <EbookMockup />
          <span className="clean-floating-badge badge-dreams">Sonhos</span>
          <span className="clean-floating-badge badge-intuition">Intuicoes</span>
          <span className="clean-floating-badge badge-signs">Sinais</span>
        </div>
      </section>

      <section className="clean-section clean-identification">
        <div className="clean-section-heading">
          <p className="clean-eyebrow">IDENTIFICACAO</p>
          <h2>Talvez voce ja tenha vivido algo assim...</h2>
        </div>
        <div className="clean-situation-grid">
          {situations.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="clean-reflection">Nem tudo precisa de respostas imediatas. Mas talvez mereca observacao.</p>
      </section>

      <section className="clean-section clean-receive">
        <div className="clean-receive-visual">
          <EbookMockup open />
        </div>
        <div className="clean-section-copy">
          <p className="clean-eyebrow">O QUE VOCE RECEBE</p>
          <h2>Tudo que voce precisa para comecar hoje.</h2>
          <ul className="clean-deliverables">
            {deliverables.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="clean-section clean-offer" id="oferta">
        <div className="clean-offer-copy">
          <p className="clean-eyebrow">Oferta de entrada por tempo limitado</p>
          <h2>Comece sua jornada de observacao hoje.</h2>
          <p>
            Um material de entrada, simples e seguro para ajudar voce a observar sinais
            com mais consciencia, sem medo e sem exageros.
          </p>
        </div>

        <div className="clean-price-box">
          <div className="clean-price-lines">
            <span><strong>Ebook Premium</strong><em>R$ 7,90</em></span>
            <span><strong>Diario dos Sinais</strong><em>Bonus</em></span>
          </div>
          <small>Oferta de entrada</small>
          <strong className="clean-price">R$ 7,90</strong>
          <button className="clean-button" onClick={goToCheckout}>{ctaText}</button>
          <div className="clean-payment-seals">
            <span>Entrega imediata</span>
            <span>Garantia de 7 dias</span>
            <span>Pagamento seguro</span>
          </div>
        </div>

        <div className="clean-faq">
          <p className="clean-eyebrow">FAQ</p>
          <h3>Antes de comecar</h3>
          <div className="clean-faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <button className="clean-floating" onClick={goToCheckout}>{ctaText}</button>
    </main>
  )
}
