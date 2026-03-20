import styles from './Blog.module.css'

const Blog = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Blog</h1>
        <p>Artículos y novedades de Aquario.</p>
        {/* Blog posts grid will be added as design is shared */}
      </div>
    </div>
  )
}

export default Blog
