import { trackQuizStart } from '../lib/metaPixel.js'

export default function Landing({ onStart }) {
  function handleStartClick() {
    trackQuizStart()
    onStart()
  }

  return (
    <section className="stage landing-stage">
      <div className="hero-copy">
        <p className="eyebrow">Experiência V2 Premium</p>
        <h1>Descubra quais sinais espirituais aparecem com mais frequência na sua vida.</h1>
        <p className="hero-text">
          Responda 10 perguntas rápidas e veja um resultado imediato para entender
          padrões, sonhos, intuições e coincidências que talvez você ainda não tenha percebido.
        </p>
        <div className="quiz-benefits" aria-label="Benefícios do quiz">
          <span>⏱ Leva menos de 2 minutos</span>
          <span>🔮 10 perguntas rápidas</span>
          <span>📊 Resultado imediato</span>
        </div>
        <button className="primary-button" onClick={handleStartClick}>
          FAZER MEU QUIZ AGORA
        </button>
      </div>

      <aside className="mystic-oracle" aria-hidden="true">
        <div className="portal-core" />
        <div className="moon" />
        <div className="ring ring-one" />
        <div className="ring ring-two" />
        <div className="ring ring-three" />
        <div className="portal-line line-one" />
        <div className="portal-line line-two" />
        <div className="star star-one" />
        <div className="star star-two" />
        <div className="star star-three" />
      </aside>
    </section>
  )
}
