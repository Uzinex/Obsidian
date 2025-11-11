import logoMark from '../assets/obsidian-logo.svg'

const focusAreas = [
  {
    title: 'Forged strategy',
    description: 'Every initiative is shaped with intent — simple structures, resilient execution, and measurable outcomes.',
  },
  {
    title: 'Sovereign build',
    description: 'Infrastructure, software, and intelligence designed to stay under national control.',
  },
  {
    title: 'Enduring craft',
    description: 'We invest for decades. Precision, clarity, and reliability define the products we deliver.',
  },
]

const HomePage = () => {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="hero-kicker">Forged from fire</p>
          <h1>Obsidian</h1>
          <p>
            A technology group built on discipline and clarity. Obsidian delivers infrastructure, software, and
            intelligence with a single focus — create a sovereign digital core that stands on its own.
          </p>
          <a className="cta-button" href="#focus">
            Explore our focus
          </a>
        </div>
        <div className="hero-visual">
          <img src={logoMark} alt="Obsidian symbol" className="hero-logo" />
          <span className="hero-caption">FORGED FROM FIRE</span>
        </div>
      </section>

      <section className="page-header" id="focus">
        <span className="page-subheading">Focus</span>
        <h2>Black lines on a white canvas</h2>
        <p className="page-lede">
          The identity is absolute — monochrome, deliberate, and free from noise. We keep the same discipline in the way we
          operate and build products.
        </p>
      </section>

      <div className="feature-grid">
        {focusAreas.map((feature) => (
          <article key={feature.title} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default HomePage
