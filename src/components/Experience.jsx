import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2>Where I've worked</h2>
        </div>

        {experience.length === 0 ? (
          <p className="empty-state">
            No experience entries yet — add real roles to <code>src/data/portfolio.js</code>.
          </p>
        ) : (
          <div className="timeline">
            {experience.map((job, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content card">
                  <div className="timeline-head">
                    <h3>{job.position}</h3>
                    <span className="tag">{job.dates}</span>
                  </div>
                  <p className="timeline-company">{job.company}</p>
                  <p>{job.description}</p>

                  {job.responsibilities?.length > 0 && (
                    <ul className="modal-list">
                      {job.responsibilities.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  )}

                  {job.technologies?.length > 0 && (
                    <div className="project-tags">
                      {job.technologies.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
