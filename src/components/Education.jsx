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
            No education entries yet — add real details to{' '}
            <code>src/data/portfolio.js</code>.
          </p>
        ) : (
          <div className="edu-grid">
            {education.map((edu, i) => (
              <div key={i} className="card">

                {/* School Logo */}
                {edu.image && (
                  <img
                    src={edu.image}
                    alt={`${edu.school} logo`}
                    className="education-logo"
                  />
                )}

                <div className="timeline-head">
                  <h3>{edu.degree}</h3>
                </div>

                <p className="education-date">
                  {edu.dates}
              </p>

                <p className="timeline-company">{edu.school}</p>

                {edu.coursework?.length > 0 && (
                  <>
                    
                    <div className="project-tags">
                      <h4>Relevant Coursework</h4>
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
            <h3 className="subsection-title">
              Certifications &amp; Training
            </h3>

            <div className="cert-grid">
              {certifications.map((cert, i) => (
                <a
                  key={i}
                  href={cert.link || undefined}
                  target={cert.link ? '_blank' : undefined}
                  rel={cert.link ? 'noreferrer' : undefined}
                  className="card cert-card"
                >

                  {/* TESDA Logo */}
                  {cert.image && (
                    <img
                      src={cert.image}
                      alt={`${cert.org} logo`}
                      className="cert-logo"
                    />
                  )}

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
