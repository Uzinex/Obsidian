const ContactPage = () => {
  return (
    <div className="page">
      <header className="page-header">
        <span className="page-subheading">Связаться</span>
        <h1>Соединяем стратегических партнёров</h1>
        <p className="page-lede">
          Мы сопровождаем государственные проекты, корпоративные программы и технологические стартапы. Напишите нам, если
          вам нужна экосистема, способная обеспечить цифровой суверенитет и безопасность.
        </p>
      </header>

      <div className="page-grid">
        <article className="glass-card">
          <h3>Каналы взаимодействия</h3>
          <p>Ответим в течение одного рабочего дня.</p>
          <ul>
            <li>Email: strategy@obsidian-group.tech</li>
            <li>Телефон: +998 (71) 000-00-00</li>
            <li>Штаб-квартира: Ташкент, Technopark «Obsidian»</li>
          </ul>
        </article>

        <article className="glass-card">
          <h3>Государственные проекты</h3>
          <p>
            Формируем цифровые платформы, инфраструктуру и оборонные решения под задачи страны. Организуем защищённые пилоты и
            интеграции на уровне министерств и ведомств.
          </p>
          <a className="cta-button" href="mailto:gov@obsidian-group.tech">
            Запросить консультацию
          </a>
        </article>

        <article className="glass-card">
          <h3>Инвесторы и медиа</h3>
          <p>
            Предоставляем аналитические материалы, отчёты и комментарии по развитию цифровой экономики, финтеха и
            кибербезопасности.
          </p>
          <a className="cta-button" href="mailto:press@obsidian-group.tech">
            Получить материалы
          </a>
        </article>
      </div>
    </div>
  )
}

export default ContactPage
