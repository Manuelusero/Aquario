import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.page}>
      {/* Sections will be added as design is shared */}
      <section className={styles.hero}>
        <h1>Bienvenidos a Aquario</h1>
        <p>Diseño y desarrollo web para tu negocio.</p>
      </section>
    </div>
  )
}

export default Home
