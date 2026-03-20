import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../i18n/translations'

const PROJECT_IMAGES = ['/SercoCard.png', '/BioPompasCard.png', '/RebecaCard.png']

const Home = () => {
  const navigate = useNavigate()
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <div className={styles.page}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <img src="/CruzFondo.svg" className={styles.blob} aria-hidden="true" alt="" />
        <div className={styles.heroContent}>
          <p className={styles.tag}>{t.hero.tag}</p>
          <h1 className={styles.heading}>
            <span className={styles.headingBlue}>{t.hero.heading[0]}</span>
            <span className={styles.headingBlue}>{t.hero.heading[1]}</span>
            <span className={styles.headingWhite}>{t.hero.heading[2]}</span>
          </h1>
          <p className={styles.subtitle}>
            {t.hero.subtitle}
          </p>
          <button
            className={styles.ctaBtn}
            onClick={() => navigate('/contact')}
          >
          {t.hero.cta}
          </button>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className={styles.services}>
        <div className={styles.scrollLabel}>
          <h2 className={styles.serviciosTitle}>{t.hero.servicesLabel}</h2>
        </div>
        {t.services.map(service => (
          <article key={service.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardText}>{service.description}</p>
          </article>
        ))}
      </section>

      {/* ── PROYECTOS ── */}
      <section id="proyectos" className={styles.projects}>
        <img src="/BackgroundBlur.svg" className={styles.projectsBlur} aria-hidden="true" alt="" />
        <div className={styles.projectsHeader}>
          <h2 className={styles.projectsTitle}>{t.projects.title}</h2>
        </div>
        <div className={styles.projectsCarousel}>
          {t.projects.items.map((project, i) => (
            <article key={project.name} className={styles.projectCard}>
              <img
                src={PROJECT_IMAGES[i]}
                alt={project.name}
                className={styles.projectImg}
              />
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
