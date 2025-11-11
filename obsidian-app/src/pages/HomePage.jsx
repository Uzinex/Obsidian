import logoMark from '../assets/obsidian-mark.svg'

const features = [
  {
    title: 'Цифровой суверенитет',
    description:
      'Независимая технологическая экосистема, где данные, инфраструктура и процессы контролируются внутри страны.',
  },
  {
    title: 'Zero Trust по умолчанию',
    description:
      'Безопасность, основанная на непрерывной верификации, шифровании и строгом контроле доступа на всех уровнях.',
  },
  {
    title: 'Интеграция капитала и инжиниринга',
    description:
      'Финансы, технологии и таланты объединены в единое стратегическое ядро для долгосрочного развития.',
  },
]

const HomePage = () => {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-badges">
            <span className="badge">Zero Trust</span>
            <span className="badge">AI-First</span>
          </div>
          <h1>Обсидиан</h1>
          <p>
            Технологическая и инвестиционная группа полного цикла. Мы соединяем искусственный интеллект, облачную
            инфраструктуру, финтех и цифровую безопасность, создавая экосистему, способную обеспечить технологическую
            независимость и устойчивое развитие страны.
          </p>
          <a className="cta-button" href="#products">
            Основные направления
          </a>
        </div>
        <div className="hero-visual">
          <div className="hero-orb">
            <img src={logoMark} alt="Логотип Obsidian" />
          </div>
        </div>
      </section>

      <section className="page-header" id="products">
        <span className="page-subheading">Миссия</span>
        <h2>Национальная экосистема цифровой независимости</h2>
        <p className="page-lede">
          Мы создаём технологический щит страны: от оборонных ИИ-систем и суверенных облаков до блокчейн-уровня доверия и
          финансовой инфраструктуры будущего.
        </p>
      </section>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <article key={feature.title} className="feature-card">
            <span className="feature-index">0{index + 1}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default HomePage
