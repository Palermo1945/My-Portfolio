import { useMemo, useState } from 'react'
import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import Modal from './Modal'

const CATEGORIES = ['All', 'Web', 'Mobile', 'AI', 'Database', 'IT Systems', 'Other']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Projects</p>
          <h2>Selected work</h2>
          <p>Filter by category to see relevant work. Details are one click away.</p>
        </div>

        <div className="filter-bar" role="tablist" aria-label="Filter projects by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              className={`filter-chip ${filter === cat ? 'is-active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="empty-state">No projects in this category yet.</p>
        ) : (
          <div className="projects-grid">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onViewDetails={setSelected} />
            ))}
          </div>
        )}
      </div>

      {selected && (
        <Modal title={selected.name} onClose={() => setSelected(null)}>
          <p className="modal-section-label">Overview</p>
          <p>{selected.details.overview}</p>

          <p className="modal-section-label">Problem</p>
          <p>{selected.details.problem}</p>

          <p className="modal-section-label">Solution</p>
          <p>{selected.details.solution}</p>

          <p className="modal-section-label">Key Features</p>
          <ul className="modal-list">
            {selected.details.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <p className="modal-section-label">Architecture</p>
          <p>{selected.details.architecture}</p>

          <p className="modal-section-label">Challenges</p>
          <p>{selected.details.challenges}</p>

          <p className="modal-section-label">Results</p>
          <p>{selected.details.results}</p>

          <div className="project-tags" style={{ marginTop: 16 }}>
            {selected.technologies.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div className="project-actions" style={{ marginTop: 20 }}>
            {selected.github && (
              <a href={selected.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                GitHub
              </a>
            )}
            {selected.demo && (
              <a href={selected.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                Live Demo
              </a>
            )}
          </div>
        </Modal>
      )}
    </section>
  )
}
