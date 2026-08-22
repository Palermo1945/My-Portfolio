import { education, certifications } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Education</p>
          <h2>Education &amp; certifications</h2>
        </div>

        {education.length === 0 ? (
          <p className="empty-state">
            No education entries yet — add real details to <code>src/data/portfolio.js</code>.
          </p>
        ) : (
          <div className="edu-grid">
            {education.map((edu, i) => (
              <div key={i} className="card">
                <div className="timeline-head">
                  <h3>{edu.degree}</h3>
                  <span className="tag">{edu.dates}</span>
                </div>
                <p className="timeline-company">{edu.school}</p>
                {edu.coursework?.length > 0 && (
                  <>
                    <h4>Relevant Coursework</h4>
                    <div className="project-tags">
                      {edu.coursework.map((c) => (
                        <span key={c} className="tag">
                          {c}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {certifications.length > 0 && (
          <>
            <h3 className="subsection-title">Certifications &amp; Training</h3>
            <div className="cert-grid">
              {certifications.map((cert, i) => (
                <a
                  key={i}
                  href={cert.link || undefined}
                  target={cert.link ? '_blank' : undefined}
                  rel={cert.link ? 'noreferrer' : undefined}
                  className="card cert-card"
                >
                  <h4>{cert.name}</h4>
                  <p>
                    {cert.org} · {cert.date}
                  </p>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
