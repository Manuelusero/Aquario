import { Link } from 'react-router-dom'
import logo from '../../assets/logo/aquario-logo.svg'
import styles from './Footer.module.css'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../i18n/translations'

const Footer = () => {
  const { lang } = useLanguage()
  const t = translations[lang].footer

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Aquario" height={24} />
        </Link>
        <nav className={styles.links}>
          {t.links.map(link => (
            <Link key={link.href} to={link.href}>{link.label}</Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
