import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import logoMark from '../assets/obsidian-mark.svg'
import '../App.css'

const links = [
  { to: '/', label: 'Главная' },
  { to: '/about', label: 'О нас' },
  { to: '/products', label: 'Наши продукты' },
  { to: '/news', label: 'Принципы' },
]

const Layout = () => {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app-shell">
      <header className="site-header">
        <nav className="navbar">
          <NavLink to="/" className="brand" onClick={closeMenu}>
            <img src={logoMark} alt="Логотип Obsidian" />
            <span>Obsidian Group</span>
          </NavLink>
          <div className="nav-links">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <button
            type="button"
            className="mobile-menu-button"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            Меню
          </button>
        </nav>
        {menuOpen && (
          <div className="nav-links mobile-nav">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                end={link.to === '/'}
                onClick={closeMenu}
              >
                {link.label}
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
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className="nav-link" end={link.to === '/'}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="footer-note">Цифровой щит и двигатель технологической независимости.</div>
          <div className="footer-note">© {new Date().getFullYear()} Obsidian Group. Все права защищены.</div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
