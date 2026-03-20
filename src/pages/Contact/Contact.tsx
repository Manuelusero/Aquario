import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../i18n/translations'

type Status = 'idle' | 'sending' | 'success' | 'error'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const { lang } = useLanguage()
  const t = translations[lang].contact

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    console.log('SERVICE:', import.meta.env.VITE_EMAILJS_SERVICE_ID)
    console.log('TEMPLATE:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID)
    console.log('KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          name: form.name,
          email: form.email,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder={t.namePlaceholder}
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder={t.emailPlaceholder}
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            name="message"
            placeholder={t.messagePlaceholder}
            value={form.message}
            onChange={handleChange}
            rows={6}
            required
          />
          <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
            {status === 'sending' ? t.sending : t.submit}
          </button>

          {status === 'success' && (
            <p className={styles.feedbackSuccess}>{t.successMsg}</p>
          )}
          {status === 'error' && (
            <p className={styles.feedbackError}>{t.errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact
