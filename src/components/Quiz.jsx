import { useEffect, useState } from 'react'

const letters = ['A', 'B', 'C', 'D', 'E']

export default function Quiz({
  question,
  questionNumber,
  totalQuestions,
  progress,
  onAnswer,
  onBack,
}) {
  const [selectedIndex, setSelectedIndex] = useState(null)

  useEffect(() => {
    setSelectedIndex(null)
  }, [question])

  function selectOption(option, index) {
    if (selectedIndex !== null) return
    setSelectedIndex(index)

    window.setTimeout(() => {
      onAnswer(option.profile)
    }, 320)
  }

  return (
    <section className="stage quiz-stage">
      <div className="quiz-topline">
        <button className="ghost-button" onClick={onBack}>
          Voltar
        </button>
        <span>
          {questionNumber} de {totalQuestions}
        </span>
      </div>

      <div className="progress-track" aria-label={`Progresso: ${progress}%`}>
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="quiz-card">
        <p className="eyebrow">Escolha a alternativa que mais combina com você</p>
        <h2>{question.text}</h2>
        <div className="options-grid">
          {question.options.map((option, index) => (
            <button
              className={`option-button ${selectedIndex === index ? 'is-selected' : ''}`}
              key={option.label}
              onClick={() => selectOption(option, index)}
              disabled={selectedIndex !== null}
            >
              <span>{letters[index]}</span>
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
