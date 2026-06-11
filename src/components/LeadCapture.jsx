import { useState } from 'react'

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function LeadCapture({ defaultName, onSubmit }) {
  const [form, setForm] = useState({ nome: defaultName, email: '' })
  const [errors, setErrors] = useState({})

  function updateField(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = {}
    if (form.nome.trim().length < 2) {
      nextErrors.nome = 'Informe seu nome.'
    }

    if (!isValidEmail(form.email.trim())) {
      nextErrors.email = 'Informe um e-mail válido.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    onSubmit({
      nome: form.nome.trim(),
      email: form.email.trim().toLowerCase(),
    })
  }

  return (
    <section className="stage lead-stage">
      <form className="lead-form" onSubmit={handleSubmit} noValidate>
        <p className="eyebrow">Perfil espiritual gratuito</p>
        <h2>Seu perfil está pronto.</h2>
        <p>
          Falta apenas um passo para revelar seu perfil personalizado.
        </p>

        <label>
          Nome
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={updateField}
            placeholder="Digite seu primeiro nome"
            autoComplete="name"
          />
          {errors.nome && <small>{errors.nome}</small>}
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={updateField}
            placeholder="Digite seu melhor e-mail"
            autoComplete="email"
          />
          {errors.email && <small>{errors.email}</small>}
        </label>

        <button className="primary-button" type="submit">
          Ver meu resultado
        </button>
      </form>
    </section>
  )
}
