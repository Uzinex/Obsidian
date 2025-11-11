const ContactPage = () => {
  return (
    <div className="page">
      <header className="page-header">
        <span className="page-subheading">Connect</span>
        <h1>Signal the forge</h1>
        <p className="page-lede">
          Whether you are architecting orbital habitats or shielding coastal cities, our specialists are ready to sculpt a
          tailored Obsidian solution. Reach out — the embers are waiting.
        </p>
      </header>

      <div className="page-grid">
        <article className="glass-card">
          <h3>Contact Channels</h3>
          <p>We respond within two Earth cycles.</p>
          <ul>
            <li>Email: forge@obsidian-industries.com</li>
            <li>Quantum Relay: Q-Link OBS-7742</li>
            <li>Headquarters: Reykjavik Geothermal Array, Iceland</li>
          </ul>
        </article>

        <article className="glass-card">
          <h3>Visit the Sanctum</h3>
          <p>
            Tours of our subterranean foundry are available by appointment. Experience plasma crucibles, basalt archives, and
            the harmonic chamber that tunes every lattice.
          </p>
          <a className="cta-button" href="mailto:forge@obsidian-industries.com">
            Book a Tour
          </a>
        </article>

        <article className="glass-card">
          <h3>Press & Media</h3>
          <p>
            For interviews, press kits, and speaking invitations, connect with the Obsidian storytelling collective. We love
            sharing the glow.
          </p>
          <a className="cta-button" href="mailto:press@obsidian-industries.com">
            Media Request
          </a>
        </article>
      </div>
    </div>
  )
}

export default ContactPage
