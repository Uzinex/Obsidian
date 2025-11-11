const pillars = [
  {
    title: 'Digital Sovereignty',
    copy: 'Technological independence from external platforms. Critical workloads run inside sovereign infrastructure.',
  },
  {
    title: 'AI-First',
    copy: 'Every product is rooted in artificial intelligence, automation, and real-time data flows.',
  },
  {
    title: 'Zero-Trust',
    copy: 'Security by default: continuous verification, rigorous access control, and data protection in every scenario.',
  },
  {
    title: 'Long-Term Vision',
    copy: 'Strategic thinking over short-term gain. We design an ecosystem built to scale for decades.',
  },
]

const positioning = [
  {
    year: 'Infrastructure',
    title: 'Host',
    description: 'Delivers compute power and sovereign cloud footprints for every vertical.',
  },
  {
    year: 'Finance',
    title: 'Bank',
    description: 'Builds the digital payment spine and corporate gateways for business and government.',
  },
  {
    year: 'Economy',
    title: 'Freelance',
    description: 'Launches the domestic market for digital services and supports the export of expertise.',
  },
  {
    year: 'Tokenomics',
    title: 'Uzcoin',
    description: 'The ecosystem’s digital fuel, connecting services through a unified layer of trust.',
  },
  {
    year: 'Intelligence',
    title: 'AI & Defense',
    description: 'Creates artificial intelligence solutions and defense technology for national security.',
  },
  {
    year: 'Security',
    title: 'Cybersecurity',
    description: 'Provides continuous monitoring and protection for critical infrastructure.',
  },
]

const AboutPage = () => {
  return (
    <div className="page">
      <header className="page-header">
        <span className="page-subheading">About the group</span>
        <h1>The nation’s unified technology core</h1>
        <p className="page-lede">
          Obsidian connects engineering, capital, and strategic governance. We collaborate with public agencies,
          enterprises, and high-tech startups to build a full-cycle ecosystem — from AI and cloud to fintech and
          cybersecurity.
        </p>
      </header>

      <section className="page-grid">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="glass-card">
            <h3>{pillar.title}</h3>
            <p>{pillar.copy}</p>
          </article>
        ))}
      </section>

      <div className="section-divider" />

      <section className="page-header">
        <span className="page-subheading">Positioning</span>
        <h2>Every component reinforces the strategy</h2>
        <p className="page-lede">
          This is not a single product or a startup. It is a system of interlinked layers where infrastructure, finance,
          economy, and security amplify one another.
        </p>
      </section>

      <div className="page-grid">
        {positioning.map((item) => (
          <article key={item.title} className="glass-card">
            <h3>{item.year}</h3>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default AboutPage
