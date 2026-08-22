import { projects } from '../data/portfolio'

export default function FeaturedProject() {
  const featured = projects.find((p) => p.featured)
  if (!featured) return null

  return (
    <section id="featured-project">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Featured Project</p>
          <h2>{featured.name}</h2>
        </div>

        <div className="featured-grid">
          <div className="featured-media">
            {featured.image ? (
              <img src={featured.image} alt={`${featured.name} screenshot`} />
            ) : (
              <span className="project-thumb-placeholder">{featured.category}</span>
            )}
          </div>

          <div className="featured-copy">
            <p>{featured.details.overview}</p>

            <h4>Key Features</h4>
            <ul className="modal-list">
              {featured.details.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <h4>Architecture</h4>
            <p>{featured.details.architecture}</p>

            <div className="project-tags">
              {featured.technologies.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="project-actions">
              {featured.github && (
                <a href={featured.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
              )}
              {featured.demo && (
                <a href={featured.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
