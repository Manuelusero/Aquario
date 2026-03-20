import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo/aquario-logo.svg'
import styles from './Navbar.module.css'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../i18n/translations'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang } = useLanguage()
  const t = translations[lang]
  const navigate = useNavigate()

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    const navbar = document.querySelector('header') as HTMLElement | null
    if (!el) return
    const navbarHeight = navbar ? navbar.offsetHeight : 0
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '')
      if (window.location.pathname !== '/') {
        navigate('/')
        setTimeout(() => scrollToSection(id), 150)
      } else {
        scrollToSection(id)
      }
    } else {
      navigate(href)
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <div className={styles.left}>
          <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Aquario" width={105} height={32} />
          </Link>
          <button
            className={`${styles.chevron} ${menuOpen ? styles.chevronOpen : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
          >
            ‹
          </button>
        </div>

        <div className={styles.langToggle}>
          <button
            className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`}
            onClick={() => setLang('en')}
          >
            Eng
          </button>
          <button
            className={`${styles.langBtn} ${lang === 'es' ? styles.langActive : ''}`}
            onClick={() => setLang('es')}
          >
            Esp
          </button>
        </div>
      </div>

      <div className={`${styles.dropdown} ${menuOpen ? styles.dropdownOpen : ''}`}>
        {t.nav.items.map(item => (
          <button
            key={item.label}
            className={styles.dropdownItem}
            onClick={() => handleNavClick(item.href)}
          >
            <span>{item.label}</span>
            <span className={styles.dropdownArrow}>›</span>
          </button>
        ))}
      </div>

      {menuOpen && (
        <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />
      )}
    </header>
  )
}

export default Navbar
