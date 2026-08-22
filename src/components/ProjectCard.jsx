export default function ProjectCard({ project, onViewDetails }) {
  return (
    <div className="project-card card">
      <div className="project-thumb">
        {project.image ? (
          <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
        ) : (
          <span className="project-thumb-placeholder">{project.category}</span>
        )}
      </div>

      <div className="project-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-ghost">
              Live Demo
            </a>
          )}
          {/* <button className="btn btn-secondary" onClick={() => onViewDetails(project)}>
            View Details
          </button> */}
        </div>
      </div>
    </div>
  )
}
