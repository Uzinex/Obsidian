import logoMark from '../assets/obsidian-logo.svg'
import { useTranslation } from '../i18n/TranslationProvider.jsx'

const HomePage = () => {
  const { t } = useTranslation()
  const focusAreas = t('home.focusAreas', [])

  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="hero-kicker">{t('home.hero.kicker')}</p>
          <h1>{t('home.hero.title')}</h1>
          <p>{t('home.hero.description')}</p>
          <a className="cta-button" href="#focus">
            {t('home.hero.cta')}
          </a>
        </div>
        <div className="hero-visual">
          <img src={logoMark} alt="Obsidian symbol" className="hero-logo" />
          <span className="hero-caption">{t('home.hero.caption')}</span>
        </div>
      </section>

      <section className="page-header" id="focus">
        <span className="page-subheading">{t('home.focus.subheading')}</span>
        <h2>{t('home.focus.title')}</h2>
        <p className="page-lede">{t('home.focus.body')}</p>
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
