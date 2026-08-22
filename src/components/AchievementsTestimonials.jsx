import { achievements, testimonials } from '../data/portfolio'

export default function AchievementsTestimonials() {
  if (achievements.length === 0 && testimonials.length === 0) return null

  return (
    <>
      {achievements.length > 0 && (
        <section id="achievements">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Achievements</p>
              <h2>Milestones</h2>
            </div>
            <div className="achievements-grid">
              {achievements.map((a, i) => (
                <div key={i} className="card">
                  <div className="timeline-head">
                    <h3>{a.title}</h3>
                    <span className="tag">{a.date}</span>
                  </div>
                  <p>{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section id="testimonials">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Testimonials</p>
              <h2>What people say</h2>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((t, i) => (
                <div key={i} className="card">
                  <p>&ldquo;{t.message}&rdquo;</p>
                  <p className="timeline-company">
                    {t.name} — {t.position}, {t.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
