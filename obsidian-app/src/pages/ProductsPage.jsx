import { useTranslation } from '../i18n/TranslationProvider.jsx'

const ProductsPage = () => {
  const { t } = useTranslation()
  const productSections = t('products.sections', [])

  return (
    <div className="page products-newspaper">
      <header className="page-header newspaper-header">
        <span className="page-subheading">{t('products.header.subheading')}</span>
        <h1>{t('products.header.title')}</h1>
        <p className="page-lede">{t('products.header.body')}</p>
      </header>

      <section className="newspaper-sheet">
        <div className="newspaper-columns">
          {productSections.map((section) => (
            <article key={section.name} className="newspaper-article">
              <header className="article-header">
                <span className="article-section">{t('products.verticalLabel')}</span>
                <h2>{section.name}</h2>
                <p className="article-lead">{section.lead}</p>
              </header>

              {section.story.map((paragraph) => (
                <p key={paragraph} className="article-paragraph">
                  {paragraph}
                </p>
              ))}

              <div className="article-bullets">
                {section.bulletGroups.map((group) => (
                  <div key={group.title} className="article-bullet-group">
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <footer className="article-footnote">{section.footnote}</footer>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
