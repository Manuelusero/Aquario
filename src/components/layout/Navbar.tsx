import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.logo}>
          Aquario
        </NavLink>
        <ul className={styles.links}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Inicio</NavLink></li>
          <li><NavLink to="/blog" className={({ isActive }) => isActive ? styles.active : ''}>Blog</NavLink></li>
          <li><NavLink to="/faq" className={({ isActive }) => isActive ? styles.active : ''}>FAQ</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
