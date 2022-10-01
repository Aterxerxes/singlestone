import styles from './Hero.module.css'

export default ({ title, subtitle, description, callToActionText }) => {
  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <button className={styles.callToAction}>{callToActionText}</button>
      </div>
    </main>
  )
}