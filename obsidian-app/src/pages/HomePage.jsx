import logoMark from '../assets/obsidian-mark.svg'

const features = [
  {
    title: 'Digital Sovereignty',
    description:
      'An independent technology ecosystem where data, infrastructure, and decision-making stay under national control.',
  },
  {
    title: 'Zero Trust by Default',
    description:
      'Security engineered on continuous verification, encryption, and precise access governance at every layer.',
  },
  {
    title: 'Capital + Engineering',
    description:
      'Finance, technology, and talent fused into a single strategic core that sustains long-term growth.',
  },
]

const HomePage = () => {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-badges">
            <span className="badge">Zero Trust</span>
            <span className="badge">AI-First</span>
          </div>
          <h1>Obsidian</h1>
          <p>
            A full-cycle technology and investment group. We combine artificial intelligence, sovereign cloud
            infrastructure, fintech, and cyber defense to build an ecosystem capable of securing technological
            independence and resilient national growth.
          </p>
          <a className="cta-button" href="#products">
            Explore key initiatives
          </a>
        </div>
        <div className="hero-visual">
          <div className="hero-orb">
            <img src={logoMark} alt="Obsidian emblem" />
          </div>
        </div>
      </section>

      <section className="page-header" id="products">
        <span className="page-subheading">Mission</span>
        <h2>A national ecosystem of digital independence</h2>
        <p className="page-lede">
          We assemble the country’s technology shield: defense-grade AI systems, sovereign clouds, trusted blockchain
          layers, and the financial rails of the future.
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
