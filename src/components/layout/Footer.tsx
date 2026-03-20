import styles from './Footer.module.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p>© {year} Aquario. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer
