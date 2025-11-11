const principles = [
  {
    title: 'Digital Sovereignty',
    date: 'Principle',
    summary:
      'We build solutions independent from foreign influence. Data, security, and finance remain under national control.',
  },
  {
    title: 'AI-First',
    date: 'Approach',
    summary:
      'Artificial intelligence is the heart of every product. We automate processes, elevate efficiency, and enrich analytics.',
  },
  {
    title: 'Zero-Trust',
    date: 'Standard',
    summary:
      'Implicit trust is eliminated. Systems are built on continuous verification and rigorous access policies.',
  },
  {
    title: 'Integration of Capital and Engineering',
    date: 'Method',
    summary:
      'Investment and engineering advance together. We fund initiatives that fortify the nation’s technological core.',
  },
  {
    title: 'Long-Term Vision',
    date: 'Strategy',
    summary:
      'We focus on sustainable progress. The ecosystem is engineered for decades, not for short-term wins.',
  },
]

const NewsPage = () => {
  return (
    <div className="page">
      <header className="page-header">
        <span className="page-subheading">Principles</span>
        <h1>How we build the ecosystem</h1>
        <p className="page-lede">
          Our solutions weave together Zero Trust architecture, intelligence, finance, and people — the foundation of the
          digital shield and the driver of technological independence.
        </p>
      </header>

      <section className="page-grid">
        {principles.map((principle) => (
          <article key={principle.title} className="glass-card">
            <span className="badge">{principle.date}</span>
            <h3>{principle.title}</h3>
            <p>{principle.summary}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default NewsPage
