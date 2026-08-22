import { useState } from 'react'
import { personal } from '../data/portfolio'

const initialForm = { name: '', email: '', subject: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!form.subject.trim()) errors.subject = 'Subject is required.'
  if (!form.message.trim()) errors.message = 'Message is required.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success | error

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }

    try {
      // NOTE: there is no backend wired up yet, so this opens the user's
      // email client pre-filled with the message as a working fallback.
      // Replace with a real POST to a secure API route when a backend exists.
      const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`
      window.location.href = mailto
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Contact</p>
          <h2>Get in touch</h2>
          <p>Have a role, project, or question in mind? Send a message.</p>
        </div>

        <div className="contact-grid">
          <form className="card contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" value={form.name} onChange={handleChange('name')} aria-invalid={!!errors.name} />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                aria-invalid={!!errors.email}
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                value={form.subject}
                onChange={handleChange('subject')}
                aria-invalid={!!errors.subject}
              />
              {errors.subject && <span className="field-error">{errors.subject}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={handleChange('message')}
                aria-invalid={!!errors.message}
              />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>

            {status === 'success' && (
              <p className="form-status form-status-success">
                Your email client should have opened with the message ready to send.
              </p>
            )}
            {status === 'error' && (
              <p className="form-status form-status-error">
                Something went wrong. Please email {personal.email} directly.
              </p>
            )}
          </form>

          <div className="contact-links">
            <a className="card contact-link" href={`mailto:${personal.email}`}>
              <span className="tag">Email</span>
              <span>{personal.email}</span>
            </a>
            <a className="card contact-link" href={personal.social.github} target="_blank" rel="noreferrer">
              <span className="tag">GitHub</span>
              <span>{personal.social.github.replace('https://', '')}</span>
            </a>
            <a className="card contact-link" href={personal.social.linkedin} target="_blank" rel="noreferrer">
              <span className="tag">LinkedIn</span>
              <span>{personal.social.linkedin.replace('https://', '')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
