const pillars = [
  {
    title: 'Digital Sovereignty',
    copy: 'Технологическая независимость от внешних платформ. Критические решения разворачиваются в суверенной инфраструктуре.',
  },
  {
    title: 'AI-First',
    copy: 'Каждый продукт основывается на искусственном интеллекте, автоматизации и данных в режиме реального времени.',
  },
  {
    title: 'Zero-Trust',
    copy: 'Безопасность по умолчанию: постоянная проверка, контроль доступа и защита данных в любых сценариях.',
  },
  {
    title: 'Long-Term Vision',
    copy: 'Стратегическое мышление вместо краткосрочной выгоды. Мы проектируем экосистему, способную масштабироваться десятилетиями.',
  },
]

const positioning = [
  {
    year: 'Инфраструктура',
    title: 'Host',
    description: 'Обеспечивает вычислительную мощность и облачные контуры для всех направлений.',
  },
  {
    year: 'Финансы',
    title: 'Bank',
    description: 'Формирует цифровую платёжную систему и корпоративные шлюзы для бизнеса и государства.',
  },
  {
    year: 'Экономика',
    title: 'Freelance',
    description: 'Запускает внутренний рынок цифровых услуг и поддерживает экспорт экспертизы.',
  },
  {
    year: 'Токеномика',
    title: 'Uzcoin',
    description: 'Цифровое топливо экосистемы, связывающее сервисы через единый слой доверия.',
  },
  {
    year: 'Интеллект',
    title: 'AI & Defense',
    description: 'Создаёт решения искусственного интеллекта и оборонные технологии для национальной безопасности.',
  },
  {
    year: 'Безопасность',
    title: 'Cybersecurity',
    description: 'Поддерживает непрерывный мониторинг и защиту критической инфраструктуры.',
  },
]

const AboutPage = () => {
  return (
    <div className="page">
      <header className="page-header">
        <span className="page-subheading">О группе</span>
        <h1>Единое технологическое ядро страны</h1>
        <p className="page-lede">
          Обсидиан объединяет инжиниринг, капитал и стратегическое управление. Мы работаем с государственными структурами,
          корпорациями и высокотехнологичными стартапами, создавая экосистему полного цикла — от ИИ и облаков до финтеха и
          кибербезопасности.
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
        <span className="page-subheading">Позиционирование</span>
        <h2>Каждый компонент — часть стратегии</h2>
        <p className="page-lede">
          Это не отдельный продукт и не стартап. Это система взаимосвязанных слоёв, где инфраструктура, финансы, экономика
          и безопасность усиливают друг друга.
        </p>
      </section>

      <div className="page-grid">
        {positioning.map((item) => (
          <article key={item.title} className="glass-card">
            <h3>{item.year}</h3>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default AboutPage
