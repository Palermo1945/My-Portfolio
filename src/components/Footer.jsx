import { personal } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h3>{personal.name}</h3>
          <p>{personal.title}</p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <a href="#projects" onClick={scrollTo('projects')}>
            Projects
          </a>
          <a href="#resume" onClick={scrollTo('resume')}>
            Resume
          </a>
          <a href="#contact" onClick={scrollTo('contact')}>
            Contact
          </a>
          <a href={personal.social.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={personal.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${personal.email}`}>Email</a>
        </nav>

        <p className="footer-copyright">
          © {year} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
