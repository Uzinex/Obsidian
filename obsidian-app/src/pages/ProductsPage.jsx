const productSections = [
  {
    name: 'AI & Defense Technologies',
    lead: 'An engineering command center that turns artificial intelligence into the core of digital defense and governance.',
    story: [
      'We design multi-layered models fluent in Uzbek, Russian, and English, train analytical pipelines on government and enterprise datasets, and embed AI into mission-critical workflows.',
      'The team advances situational intelligence, threat forecasting, and autonomous decision-making — from monitoring systems to digital staff advisors.',
    ],
    bulletGroups: [
      {
        title: 'Flagship programs',
        items: [
          'Obsidian LLM — a family of large language models with hardened deployment options.',
          'Event recognition and tracking suite tailored for security agencies.',
          'Digital command hub: AI integrated into planning, logistics, and operations.',
        ],
      },
      {
        title: 'Partner impact',
        items: [
          'Deploying AI across critical defense and security domains.',
          'Knowledge platforms and data centers that meet national standards.',
          'Joint laboratories with universities and defense institutes.',
        ],
      },
    ],
    footnote: 'Growth focus: sovereign cognitive platform for national command.',
  },
  {
    name: 'Host (Cloud & Infrastructure)',
    lead: 'Sovereign cloud and infrastructure engineered on Zero Trust principles for government and enterprise.',
    story: [
      'Host unifies data centers, private clouds, and API gateways into a single platform. Every transaction is verified and every access chain is governed end-to-end.',
      'The platform adapts to critical workloads, supports hybrid topologies, and is ready for national certification.',
    ],
    bulletGroups: [
      {
        title: 'Infrastructure services',
        items: [
          'Application hosting and dedicated servers with hardware encryption.',
          'Cloud-native development environments with CI/CD integration.',
          'National data exchange fabric and secured communication channels.',
        ],
      },
      {
        title: 'Resilience guarantees',
        items: [
          'Redundant presence across three geographic zones.',
          'Continuous availability modes for public services.',
          'Compliance with regulator and national cyber center requirements.',
        ],
      },
    ],
    footnote: 'Growth focus: unified national digital infrastructure.',
  },
  {
    name: 'Freelance (Digital Economy Platform)',
    lead: 'An economic platform connecting specialists, companies, and the state in a transparent digital marketplace.',
    story: [
      'Freelance opens space for export-ready services and domestic demand. Legal and financial processes are automated so teams can work with public projects without intermediaries.',
      'Every engagement is protected by ratings, arbitration, and digital contracts backed by the Obsidian blockchain.',
    ],
    bulletGroups: [
      {
        title: 'Platform value',
        items: [
          'Protected deals with guaranteed payouts and legal support.',
          'Marketplace of missions from the public sector, enterprises, and startups.',
          'Acceleration programs and export tracks for digital teams.',
        ],
      },
      {
        title: 'Financial ecosystem',
        items: [
          'Instant payouts in UZT and national currency.',
          'Smart contracts for revenue sharing between participants.',
          'Integration with banking and tax services.',
        ],
      },
    ],
    footnote: 'Growth focus: nationwide exchange for digital services and talent.',
  },
  {
    name: 'Bank (Fintech & Payments)',
    lead: 'The ecosystem’s fintech core: a unified payment circuit for citizens, business, and public institutions.',
    story: [
      'Bank delivers a transparent settlement layer with instant transfers, business-ready APIs, and integration with national identity services.',
      'We build products for digital budgets, municipal programs, and retail clients where security and speed carry equal weight.',
    ],
    bulletGroups: [
      {
        title: 'Development tracks',
        items: [
          'Payment gateways and white-label solutions for banks and fintech startups.',
          'IBAN accounts, corporate wallets, and treasury management.',
          'Digital leasing and lending programs for technology companies.',
        ],
      },
      {
        title: 'Digital oversight',
        items: [
          'Real-time transaction monitoring and anti-fraud engines.',
          'UZT token integration for settlement and loyalty scenarios.',
          'Automated AML/KYC compliance suites.',
        ],
      },
    ],
    footnote: 'Growth focus: financial backbone of Obsidian’s digital economy.',
  },
  {
    name: 'Uzcoin & Blockchain',
    lead: 'The trust layer that connects the group’s products and the country’s digital services.',
    story: [
      'Uzcoin powers smart contracts, asset tokenization, and Web3 infrastructure for public and private programs.',
      'We pursue interoperability with international protocols to export digital services without losing sovereignty.',
    ],
    bulletGroups: [
      {
        title: 'Technology modules',
        items: [
          'EVM compatibility and proprietary consensus algorithms.',
          'Digital IDs and distributed registries for public services.',
          'Tokenization toolkits for real-world assets and sovereign bonds.',
        ],
      },
      {
        title: 'Partner initiatives',
        items: [
          'Integration with regional fintech projects and payment systems.',
          'Programs for Web3 startups and digital corporations.',
          'National pilots for digital currencies and smart guarantees.',
        ],
      },
    ],
    footnote: 'Growth focus: trusted infrastructure for every digital service.',
  },
  {
    name: 'Cybersecurity & Sovereign Infrastructure',
    lead: 'A cyber shield and security operations engine that safeguards technological sovereignty.',
    story: [
      'We design isolated clouds, build monitoring centers, audit critical data, and orchestrate incident response.',
      'The team develops AI-driven threat analysis platforms, trains specialists, and sets security standards for the ecosystem.',
    ],
    bulletGroups: [
      {
        title: 'Core capabilities',
        items: [
          '24/7 Security Operations Center and incident response.',
          'Certified audit methodologies and penetration testing.',
          'Encryption, secure document flow, and key management systems.',
        ],
      },
      {
        title: 'National programs',
        items: [
          'Building sectoral cybersecurity centers.',
          'Supporting government initiatives for digital sovereignty.',
          'Joint exercises and simulators for defense agencies.',
        ],
      },
    ],
    footnote: 'Growth focus: integrated shield for data and infrastructure.',
  },
  {
    name: 'Education & Research',
    lead: 'An education and research circuit that prepares engineers and leaders for the digital future.',
    story: [
      'We unite universities, accelerators, and industry centers to launch programs in AI, DevOps, cybersecurity, and blockchain.',
      'Learning paths are built on real ecosystem challenges: students join group projects and launch their own initiatives.',
    ],
    bulletGroups: [
      {
        title: 'Learning formats',
        items: [
          'University departments and graduate programs.',
          'Corporate accelerators and industry residencies.',
          'Laboratories with access to Obsidian infrastructure.',
        ],
      },
      {
        title: 'Outcomes',
        items: [
          'Talent pipeline for public digital initiatives.',
          'Research on resilience and security of digital platforms.',
          'Support for startups and scientific consortiums.',
        ],
      },
    ],
    footnote: 'Growth focus: talent engine and research base for the ecosystem.',
  },
]

const ProductsPage = () => {
  return (
    <div className="page products-newspaper">
      <header className="page-header newspaper-header">
        <span className="page-subheading">Ecosystem</span>
        <h1>Our products and verticals</h1>
        <p className="page-lede">
          Welcome to the Obsidian Times — a concise overview of our core directions, their missions, and development
          programs. Each vertical strengthens the others, forming a cohesive digital economy.
        </p>
      </header>

      <section className="newspaper-sheet">
        <div className="newspaper-columns">
          {productSections.map((section) => (
            <article key={section.name} className="newspaper-article">
              <header className="article-header">
                <span className="article-section">Vertical</span>
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
