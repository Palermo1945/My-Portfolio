import { personal, skills, experience, education, certifications, projects } from '../data/portfolio'

export default function Resume() {
  return (
    <section id="resume">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Resume</p>
          <h2>Resume overview</h2>
          <p>A quick summary — download the full PDF for the complete version.</p>
        </div>

        <div className="resume-card card">
          <div className="resume-row">
            <h3>Professional Summary</h3>
            <p>{personal.tagline}</p>
          </div>

          <div className="resume-row">
            <h3>Skills</h3>
            <div className="project-tags">
              {skills.flatMap((g) => g.items).slice(0, 14).map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="resume-row">
            <h3>Experience</h3>
            <p>{experience.length > 0 ? `${experience.length} role(s) — see Experience section above.` : 'PLACEHOLDER — add roles to portfolio.js'}</p>
          </div>

          <div className="resume-row">
            <h3>Education</h3>
            <p>{education.length > 0 ? `${education.length} entr${education.length === 1 ? 'y' : 'ies'} — see Education section above.` : 'PLACEHOLDER — add education to portfolio.js'}</p>
          </div>

          <div className="resume-row">
            <h3>Certifications</h3>
            <p>{certifications.length > 0 ? `${certifications.length} certification(s) listed above.` : 'PLACEHOLDER — add certifications to portfolio.js'}</p>
          </div>

          <div className="resume-row">
            <h3>Projects</h3>
            <p>{projects.length} project(s) — see Projects section above.</p>
          </div>

          <div className="resume-actions">
            <a href={personal.resumeUrl} className="btn btn-primary" download>
              Download Resume
            </a>
            <a href={personal.resumeUrl} className="btn btn-secondary" target="_blank" rel="noreferrer">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
