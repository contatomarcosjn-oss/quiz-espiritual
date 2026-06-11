import { results } from '../data/quiz.js'

const checkoutUrl = '/vendas'

const resultIcons = {
  protecao: '◆',
  prosperidade: '✦',
  transformacao: '◇',
  equilibrio: '◈',
  intuicao: '✧',
  caminhos_abertos: '✺',
}

export default function Result({ resultKey, leadName, onRestart }) {
  const result = results[resultKey] || results.caminhos_abertos

  function goToCheckout() {
    window.location.href = checkoutUrl
  }

  return (
    <section className="stage result-stage">
      <div className="result-panel">
        <div className="result-identified">
          <span />
          <p>SEU PERFIL FOI IDENTIFICADO</p>
          <span />
        </div>
        <div className="result-icon" aria-hidden="true">
          {resultIcons[resultKey] || resultIcons.caminhos_abertos}
        </div>
        <p className="eyebrow">{leadName ? `${leadName}, este é seu perfil` : 'Seu perfil espiritual'}</p>
        <h2>{result.title}</h2>
        <p>{result.text}</p>

        <div className="signals-box">
          <h3>Sinais que podem estar aparecendo</h3>
          <ul>
            {result.signs.map((sign) => (
              <li key={sign}>{sign}</li>
            ))}
          </ul>
        </div>

        <p className="disclaimer">
          Este quiz é uma ferramenta de reflexão e autoconhecimento. Ele não substitui
          orientação religiosa, terapêutica, médica ou profissional.
        </p>
      </div>

      <aside className="offer-panel">
        <p className="eyebrow">Guia especial</p>
        <h2>Entenda os 7 Sinais Espirituais Que Muitas Pessoas Ignoram</h2>
        <p>
          Comece pelo guia de entrada e aprofunde sua observacao pessoal.
        </p>
        <div className="price">
          <span>De R$27,00</span>
          <strong>por R$7,90</strong>
        </div>
        <button className="primary-button" onClick={goToCheckout}>
          Quero acessar o guia agora
        </button>
        <button className="text-button" onClick={onRestart}>
          Refazer quiz
        </button>
      </aside>
    </section>
  )
}
