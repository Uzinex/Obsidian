import logoMark from '../assets/obsidian-mark.svg'

const features = [
  {
    title: 'Elemental Engineering',
    description:
      'Harnessing volcanic energy to forge ultra-resilient materials for aerospace, defense, and frontier architecture.',
  },
  {
    title: 'Quantum-Fused Design',
    description:
      'Proprietary lattice weaving that stabilizes matter at the molecular level, delivering lighter and stronger composites.',
  },
  {
    title: 'Carbon-Negative Foundries',
    description:
      'Closed-loop production lines fueled by geothermal power and zero-emission plasma crucibles.',
  },
]

const HomePage = () => {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-badges">
            <span className="badge">Forged from Fire</span>
            <span className="badge">Since 2084</span>
          </div>
          <h1>Obsidian</h1>
          <p>
            We craft luminous solutions from volcanic origins — empowering pioneers with materials engineered for deep space,
            extreme climate resilience, and transformative energy systems.
          </p>
          <a className="cta-button" href="#products">
            Explore Products
          </a>
        </div>
        <div className="hero-visual">
          <div className="hero-orb">
            <img src={logoMark} alt="Obsidian emblem" />
          </div>
        </div>
      </section>

      <section className="page-header" id="products">
        <span className="page-subheading">Our Essence</span>
        <h2>Innovation tempered by magma</h2>
        <p className="page-lede">
          From subterranean furnaces to orbital habitats, Obsidian stabilizes the impossible. Our interdisciplinary teams
          orchestrate matter, light, and heat to deliver products that redefine durability and elegance in hostile environments.
        </p>
      </section>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <article key={feature.title} className="feature-card">
            <span className="feature-index">0{index + 1}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default HomePage
