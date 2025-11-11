const headlines = [
  {
    title: 'Obsidian unveils aurora-class habitats',
    date: 'May 26, 2099',
    summary:
      'Modular habitats woven from Helios Lattice ignite above Reykjavik, forming the first self-illuminating city shield.',
  },
  {
    title: 'Partnership with Europa research fleets',
    date: 'April 13, 2099',
    summary:
      'Our geothermal cores will power submersible fleets exploring Europa’s ice oceans, unlocking new data for terraforming.',
  },
  {
    title: 'TerraShield wins Global Resilience Award',
    date: 'March 03, 2099',
    summary:
      'International climate councils honor Obsidian for safeguarding 40 coastal megacities during the tri-storm season.',
  },
]

const NewsPage = () => {
  return (
    <div className="page">
      <header className="page-header">
        <span className="page-subheading">Newsroom</span>
        <h1>Latest transmissions from the forge</h1>
        <p className="page-lede">
          Stories of resilience, luminous breakthroughs, and partnerships that push humanity beyond its perceived limits.
        </p>
      </header>

      <section className="page-grid">
        {headlines.map((headline) => (
          <article key={headline.title} className="glass-card">
            <span className="badge">{headline.date}</span>
            <h3>{headline.title}</h3>
            <p>{headline.summary}</p>
            <a className="cta-button" href="#!" aria-label={`Read more about ${headline.title}`}>
              Read Story
            </a>
          </article>
        ))}
      </section>
    </div>
  )
}

export default NewsPage
