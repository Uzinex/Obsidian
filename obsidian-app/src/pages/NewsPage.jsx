const principles = [
  {
    title: 'Digital Sovereignty',
    date: 'Принцип',
    summary:
      'Мы строим решения, не зависящие от внешних игроков. Данные, безопасность и финансы остаются под национальным контролем.',
  },
  {
    title: 'AI-First',
    date: 'Подход',
    summary:
      'Искусственный интеллект — ядро каждого продукта. Мы автоматизируем процессы, повышаем эффективность и усиливаем аналитику.',
  },
  {
    title: 'Zero-Trust',
    date: 'Стандарт',
    summary:
      'Безусловное доверие исключено. Системы строятся на постоянной верификации и строгой политике доступа.',
  },
  {
    title: 'Integration of Capital and Engineering',
    date: 'Метод',
    summary:
      'Инвестиции и инжиниринг развиваются синхронно. Мы финансируем проекты, которые усиливают технологическое ядро страны.',
  },
  {
    title: 'Long-Term Vision',
    date: 'Стратегия',
    summary:
      'Фокус на устойчивом развитии. Мы проектируем экосистему на десятилетия вперёд, а не ради краткосрочного результата.',
  },
]

const NewsPage = () => {
  return (
    <div className="page">
      <header className="page-header">
        <span className="page-subheading">Принципы</span>
        <h1>Как мы строим экосистему</h1>
        <p className="page-lede">
          Наши решения объединяют архитектуру Zero Trust, интеллект, финансы и людей. Это основа цифрового щита и двигателя
          технологической независимости страны.
        </p>
      </header>

      <section className="page-grid">
        {principles.map((principle) => (
          <article key={principle.title} className="glass-card">
            <span className="badge">{principle.date}</span>
            <h3>{principle.title}</h3>
            <p>{principle.summary}</p>
            <a className="cta-button" href="#!" aria-label={`Узнать больше о принципе ${principle.title}`}>
              Узнать больше
            </a>
          </article>
        ))}
      </section>
    </div>
  )
}

export default NewsPage
