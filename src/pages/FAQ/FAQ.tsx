import styles from './FAQ.module.css'

const FAQ = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Preguntas frecuentes</h1>
        <p>Todo lo que necesitás saber antes de empezar.</p>
        {/* FAQ accordion will be added as design is shared */}
      </div>
    </div>
  )
}

export default FAQ
