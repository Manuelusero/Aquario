import { useState } from 'react'
import styles from './FAQ.module.css'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../i18n/translations'

const FAQ = () => {
  const { lang } = useLanguage()
  const t = translations[lang].faq
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => {
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </div>

      <div className={styles.list}>
        {t.items.map(item => (
          <div key={item.id} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => toggle(item.id)}
              aria-expanded={openId === item.id}
            >
              <span>{item.question}</span>
              <span className={`${styles.chevron} ${openId === item.id ? styles.chevronOpen : ''}`}>
                ›
              </span>
            </button>
            {openId === item.id && (
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
