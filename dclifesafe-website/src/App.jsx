const services = [
  {
    title: 'Emergency and Safety Training',
    description:
      'BLS, first aid, preparedness, and practical lifesaving education designed for communities, travelers, and organizations.',
  },
  {
    title: 'Expedition and Travel Support',
    description:
      'Medical readiness guidance for expeditions, remote travel, and adventure environments with a global perspective.',
  },
  {
    title: 'Global Health Outreach',
    description:
      'Education-focused health initiatives connecting U.S.-based credibility with Latin American reach and real-world impact.',
  },
]

const pillars = [
  'Medicine beyond the trail',
  'Preparedness with real-world experience',
  'Education with international perspective',
  'Trust, service, and community impact',
]

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <div>
            <p className="eyebrow">DC LifeSafe Global</p>
            <h1 className="brand-title">Expedition Medicine • Safety • Training</h1>
          </div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#mission">Mission</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div>
              <p className="hero-badge">U.S.-based credibility • Latin American reach</p>
              <h2 className="hero-title">
                Safety, medicine, and training for people who go further.
              </h2>
              <p className="hero-text">
                DC LifeSafe Global is a modern platform for emergency education,
                travel preparedness, and expedition-minded medical support—built to
                serve communities, organizations, and global travelers.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Request Information
                </a>
                <a className="button button-secondary" href="#services">
                  Explore Services
                </a>
              </div>
            </div>

            <div className="hero-card-grid">
              <article className="info-card small-card">
                <p className="card-label">Core Focus</p>
                <p className="card-value">Education that saves lives</p>
              </article>
              <article className="info-card small-card">
                <p className="card-label">Approach</p>
                <p className="card-value">Practical, credible, global</p>
              </article>
              <article className="info-card wide-card">
                <p className="card-label">Ideal Audience</p>
                <p className="card-copy">
                  Travelers, outdoor groups, community partners, schools,
                  organizations, and clients seeking trusted safety training with an
                  international mindset.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container split-grid">
            <div>
              <p className="section-label">About</p>
              <h3 className="section-title">
                Built for trust, readiness, and real-world impact.
              </h3>
              <p className="section-text">
                This starter website presents DC LifeSafe Global as a strong,
                credible brand that connects emergency education, expedition
                awareness, and global community service. It is designed as a
                professional first impression for future clients, partners, and
                students.
              </p>
            </div>

            <aside className="panel">
              <p className="section-label">Brand Pillars</p>
              <div className="pillars-list">
                {pillars.map((pillar) => (
                  <div className="pillar-item" key={pillar}>
                    {pillar}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="services" className="section section-muted">
          <div className="container">
            <p className="section-label">Services</p>
            <h3 className="section-title">A clean structure for your future offers.</h3>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="mission" className="section">
          <div className="container">
            <div className="mission-box">
              <p className="section-label">Mission</p>
              <h3 className="section-title">
                To extend lifesaving knowledge beyond the classroom.
              </h3>
              <p className="section-text mission-text">
                DC LifeSafe Global exists to make practical emergency education,
                travel preparedness, and safety culture more accessible, more
                credible, and more connected to real human needs across borders.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-last">
          <div className="container contact-grid">
            <div className="panel">
              <p className="section-label">Contact</p>
              <h3 className="section-title">Ready to shape the full site?</h3>
              <p className="section-text">
                This starter page can be expanded into a complete website with
                sections for courses, certifications, expedition services, Peru and
                Bolivia outreach, testimonials, booking, and bilingual content.
              </p>
            </div>

            <div className="panel contact-box">
              <p className="contact-label">Email</p>
              <p className="contact-value">info@dclifesafeglobal.com</p>
              <p className="contact-label">Tagline</p>
              <p className="contact-value">Medicine beyond the trail</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
