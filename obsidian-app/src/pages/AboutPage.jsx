const milestones = [
  {
    year: '2084',
    title: 'The Foundry Ignites',
    description: 'Volcanologists and quantum metallurgists unite beneath Icelandic calderas to synthesize the first Obsidian alloy.',
  },
  {
    year: '2091',
    title: 'Lagrange Expansion',
    description: 'Our orbital laboratories activate at Lagrange Point L5, enabling zero-gravity tempering and lattice sculpting.',
  },
  {
    year: '2098',
    title: 'TerraShield Accord',
    description: 'World governments adopt Obsidian barrier systems to protect coastal megacities from superstorms.',
  },
]

const pillars = [
  {
    title: 'Transcendent Craft',
    copy: 'Our artisans operate at the convergence of geology, photonics, and sonic engineering to mold matter with micron precision.',
  },
  {
    title: 'Ethical Power',
    copy: 'Closed-loop geothermal systems power every facility, ensuring our breakthroughs heal the planet that forged us.',
  },
  {
    title: 'Exploratory Spirit',
    copy: 'We design for tomorrow’s frontiers — from Europa’s ice oceans to fusion reactors at the edge of the sun.',
  },
]

const AboutPage = () => {
  return (
    <div className="page">
      <header className="page-header">
        <span className="page-subheading">Who We Are</span>
        <h1>Forgers of luminous futures</h1>
        <p className="page-lede">
          Obsidian was born from lava tubes and relentless curiosity. Our team spans volcanologists, quantum coders,
          architects, and storytellers united by the belief that resilience and beauty can coexist in the harshest
          environments.
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
        <span className="page-subheading">Milestones</span>
        <h2>Moments that tempered our core</h2>
      </section>

      <div className="page-grid">
        {milestones.map((milestone) => (
          <article key={milestone.year} className="glass-card">
            <h3>{milestone.year}</h3>
            <h4>{milestone.title}</h4>
            <p>{milestone.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default AboutPage
