import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import logoMark from '../assets/obsidian-logo.svg'
import { useTranslation } from '../i18n/TranslationProvider.jsx'
import '../App.css'

const navigationLinks = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/about', labelKey: 'nav.about' },
  { to: '/products', labelKey: 'nav.products' },
  { to: '/principles', labelKey: 'nav.principles' },
]

const Layout = () => {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, language, setLanguage, availableLanguages: supportedLanguages } = useTranslation()

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value)
  }

  const footerRights = t('footer.rights', '© {year} Obsidian. All rights reserved.').replace(
    '{year}',
    new Date().getFullYear(),
  )

  return (
    <div className="app-shell">
      <header className="site-header">
        <nav className="navbar">
          <NavLink to="/" className="brand" onClick={closeMenu}>
            <img src={logoMark} alt="Obsidian logo" className="brand-mark" />
            <span className="brand-name">Obsidian</span>
          </NavLink>
          <div className="nav-links">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                end={link.to === '/'}
              >
                {t(link.labelKey)}
              </NavLink>
            ))}
          </div>
          <div className="nav-actions">
            <label className="language-switcher" htmlFor="language-select">
              <span className="language-label">{t('nav.languageLabel')}</span>
              <select
                id="language-select"
                className="language-select"
                value={language}
                onChange={handleLanguageChange}
              >
                {supportedLanguages.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              className="mobile-menu-button"
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {t('nav.menu')}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div id="primary-navigation" className="nav-links mobile-nav">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                end={link.to === '/'}
                onClick={closeMenu}
              >
                {t(link.labelKey)}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      <main>
        <Outlet context={{ currentPath: pathname }} />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-nav">
            {navigationLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className="nav-link" end={link.to === '/'}>
                {t(link.labelKey)}
              </NavLink>
            ))}
          </div>
          <div className="footer-note">{t('footer.tagline', 'Forged from fire.')}</div>
          <div className="footer-note">{footerRights}</div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
