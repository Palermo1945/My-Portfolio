import { aboutStats, aboutText } from '../data/portfolio'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">About</p>
          <h2>Background &amp; focus</h2>
        </div>

        <div className="about-grid">
          <div className="about-photo" role="img" aria-label="Profile photo placeholder">
            <img src="/Profile.jpg" alt="Profile photo" />
          </div>

          <div className="about-copy">
            <p>{aboutText.intro}</p>
            <p>{aboutText.interests}</p>
            <p>{aboutText.goals}</p>
          </div>
        </div>

        <div className="stats-grid">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="stat-card card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
