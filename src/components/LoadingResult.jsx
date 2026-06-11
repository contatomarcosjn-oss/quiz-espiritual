export default function LoadingResult() {
  return (
    <section className="stage loading-stage">
      <div className="loading-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="loading-copy">
        <p>✦ Observando padrões...</p>
        <p>✦ Identificando sinais...</p>
        <p>✦ Preparando seu perfil...</p>
      </div>
    </section>
  )
}
