import styles from './Blog.module.css'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../i18n/translations'

const Blog = () => {
  const { lang } = useLanguage()
  const t = translations[lang].blog

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </div>

      <div className={styles.list}>
        {t.posts.map(post => (
          <article key={post.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={post.image} alt={post.title} className={styles.image} />
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{post.title}</h2>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Blog
