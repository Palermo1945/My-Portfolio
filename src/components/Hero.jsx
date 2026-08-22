import { useEffect, useState } from 'react'
import { personal } from '../data/portfolio'

function useUptime(startYear) {
  const [label, setLabel] = useState('')
  useEffect(() => {
    const start = new Date(startYear, 0, 1)
    const update = () => {
      const now = new Date()
      const years = now.getFullYear() - start.getFullYear()
      const months = (now.getMonth() - start.getMonth() + 12) % 12
      setLabel(`${years}y ${months}m active`)
    }
    update()
    const id = setInterval(update, 60000)
    return () => clearInterval(id)
  }, [startYear])
  return label
}

const STACK = ['React', 'Node.js', 'TypeScript', 'AWS', 'Linux', 'MySQL', 'OpenAI API']

export default function Hero() {
  const uptime = useUptime(personal.yearStarted)

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="status-bar" role="status">
          <span className="status-dot" aria-hidden="true" />
          <span>{personal.availability}</span>
          <span className="status-sep" aria-hidden="true">/</span>
          <span>{uptime}</span>
          <span className="status-sep" aria-hidden="true">/</span>
          <span>{personal.location}</span>
        </div>

        <p className="eyebrow">{personal.title}</p>
        <h1 className="hero-title">{personal.name}</h1>
        <p className="hero-tagline">{personal.tagline}</p>

        <div className="hero-ctas">
          <a
            href="#projects"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="btn btn-secondary"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contact Me
          </a>
          <a href={personal.resumeUrl} className="btn btn-ghost" download>
            Download Resume ↓
          </a>
        </div>

        <div className="stack-preview" aria-label="Primary technologies">
          {STACK.map((tech) => (
            <span key={tech} className="stack-chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
