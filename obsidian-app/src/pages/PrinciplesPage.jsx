import { useTranslation } from '../i18n/TranslationProvider.jsx'

const PrinciplesPage = () => {
  const { t } = useTranslation()
  const principles = t('principles.items', [])

  return (
    <div className="page">
      <header className="page-header">
        <span className="page-subheading">{t('principles.header.subheading')}</span>
        <h1>{t('principles.header.title')}</h1>
        <p className="page-lede">{t('principles.header.body')}</p>
      </header>

      <section className="page-grid">
        {principles.map((principle) => (
          <article key={principle.title} className="glass-card">
            <span className="badge">{principle.badge}</span>
            <h3>{principle.title}</h3>
            <p>{principle.summary}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default PrinciplesPage
