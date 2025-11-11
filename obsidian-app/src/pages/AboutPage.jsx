import { useTranslation } from '../i18n/TranslationProvider.jsx'

const AboutPage = () => {
  const { t } = useTranslation()
  const pillars = t('about.pillars', [])
  const positioningItems = t('about.positioning.items', [])

  return (
    <div className="page">
      <header className="page-header">
        <span className="page-subheading">{t('about.header.subheading')}</span>
        <h1>{t('about.header.title')}</h1>
        <p className="page-lede">{t('about.header.body')}</p>
      </header>

      <section className="page-grid">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="glass-card">
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </article>
        ))}
      </section>

      <div className="section-divider" />

      <section className="page-header">
        <span className="page-subheading">{t('about.positioning.subheading')}</span>
        <h2>{t('about.positioning.title')}</h2>
        <p className="page-lede">{t('about.positioning.body')}</p>
      </section>

      <div className="page-grid">
        {positioningItems.map((item) => (
          <article key={item.title} className="glass-card">
            <h3>{item.badge}</h3>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default AboutPage
