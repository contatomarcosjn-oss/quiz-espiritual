export default function Preparation({ onReady }) {
  return (
    <section className="stage preparation-stage">
      <div className="preparation-card reveal-card">
        <p className="eyebrow">Portal de descoberta</p>
        <h2>Antes de começar...</h2>
        <p>
          Respire fundo por alguns segundos.
          <br />
          <br />
          Não tente encontrar respostas perfeitas.
          <br />
          <br />
          Escolha aquilo que mais se aproxima do que você realmente sente.
        </p>
        <button className="primary-button" onClick={onReady}>
          Estou pronto
        </button>
      </div>
    </section>
  )
}
