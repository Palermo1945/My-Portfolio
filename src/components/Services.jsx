import { services } from '../data/portfolio'

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Services</p>
          <h2>What I can do</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
