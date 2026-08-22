import { useEffect, useState } from 'react'
import { personal } from '../data/portfolio'

const LINKS = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['services', 'Services'],
  ['resume', 'Resume'],
  ['contact', 'Contact'],
]

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map(([id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick('home')
          }}
        >
          {personal.name}
          <span className="navbar-cursor" aria-hidden="true" />
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : ''}
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick(id)
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button
            className="hamburger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="navbar-mobile" aria-label="Mobile">
          {LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : ''}
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick(id)
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
