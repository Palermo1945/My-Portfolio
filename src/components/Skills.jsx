import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Skills</p>
          <h2>Technical toolkit</h2>
          <p>Grouped by domain — updated as tools change, not as a scoreboard.</p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-card card">
              <h3>{group.category}</h3>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
