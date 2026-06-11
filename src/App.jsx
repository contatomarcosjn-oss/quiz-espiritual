import { useMemo, useState } from 'react'
import Landing from './components/Landing.jsx'
import Quiz from './components/Quiz.jsx'
import LoadingResult from './components/LoadingResult.jsx'
import LeadCapture from './components/LeadCapture.jsx'
import Result from './components/Result.jsx'
import Preparation from './components/Preparation.jsx'
import SalesPage from './components/SalesPage.jsx'
import ThankYouPage from './components/ThankYouPage.jsx'
import { profileKeys, questions } from './data/quiz.js'

const initialScores = profileKeys.reduce((scores, profile) => {
  scores[profile] = 0
  return scores
}, {})

function calculateResult(answers) {
  const scores = { ...initialScores }

  answers.forEach((profile) => {
    scores[profile] += 1
  })

  const highestScore = Math.max(...Object.values(scores))
  const winners = Object.entries(scores)
    .filter(([, score]) => score === highestScore)
    .map(([profile]) => profile)

  return winners.length === 1 ? winners[0] : 'caminhos_abertos'
}

function getSavedLead() {
  const savedLead = localStorage.getItem('quizSinaisLead')
  if (!savedLead) return null

  try {
    return JSON.parse(savedLead)
  } catch {
    localStorage.removeItem('quizSinaisLead')
    return null
  }
}

export default function App() {
  const isSalesPage = window.location.pathname === '/vendas' || window.location.hash === '#vendas'
  const isThankYouPage =
    window.location.pathname === '/obrigado' || window.location.hash === '#obrigado'
  const [step, setStep] = useState('landing')
  const [answers, setAnswers] = useState([])
  const [resultKey, setResultKey] = useState('')
  const [lead, setLead] = useState(getSavedLead)

  const currentQuestionIndex = answers.length
  const progress = useMemo(
    () => Math.round((answers.length / questions.length) * 100),
    [answers.length],
  )

  function startQuiz() {
    setAnswers([])
    setResultKey('')
    setStep('preparation')
  }

  function enterQuiz() {
    setStep('quiz')
  }

  function handleAnswer(profile) {
    const nextAnswers = [...answers, profile]
    setAnswers(nextAnswers)

    if (nextAnswers.length === questions.length) {
      const nextResult = calculateResult(nextAnswers)
      setResultKey(nextResult)
      setStep('loading')

      window.setTimeout(() => {
        setStep('lead')
      }, 3000)
    }
  }

  function goBack() {
    if (answers.length === 0) {
      setStep('landing')
      return
    }

    setAnswers((currentAnswers) => currentAnswers.slice(0, -1))
  }

  function handleLeadSubmit(nextLead) {
    const saved = {
      ...nextLead,
      resultado: resultKey,
      criadoEm: new Date().toISOString(),
    }

    localStorage.setItem('quizSinaisLead', JSON.stringify(saved))
    setLead(saved)
    setStep('result')
  }

  function restart() {
    setAnswers([])
    setResultKey('')
    setStep('landing')
  }

  return (
    <main className={`app-shell ${isSalesPage ? 'sales-shell' : ''}`}>
      <div className="living-backdrop" aria-hidden="true">
        {Array.from({ length: 32 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="starfield" aria-hidden="true" />
      <div className="aura aura-one" />
      <div className="aura aura-two" />

      {isSalesPage && <SalesPage />}

      {isThankYouPage && <ThankYouPage />}

      {!isSalesPage && !isThankYouPage && step === 'landing' && (
        <Landing onStart={startQuiz} />
      )}

      {!isSalesPage && !isThankYouPage && step === 'preparation' && (
        <Preparation onReady={enterQuiz} />
      )}

      {!isSalesPage && !isThankYouPage && step === 'quiz' && (
        <Quiz
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          progress={progress}
          onAnswer={handleAnswer}
          onBack={goBack}
        />
      )}

      {!isSalesPage && !isThankYouPage && step === 'loading' && <LoadingResult />}

      {!isSalesPage && !isThankYouPage && step === 'lead' && (
        <LeadCapture defaultName={lead?.nome || ''} onSubmit={handleLeadSubmit} />
      )}

      {!isSalesPage && !isThankYouPage && step === 'result' && (
        <Result resultKey={resultKey} leadName={lead?.nome} onRestart={restart} />
      )}
    </main>
  )
}
