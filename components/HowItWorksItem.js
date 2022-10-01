import styles from './HowItWorksItem.module.css'

export default ({ title, index, body }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{index}</p>
      <p className={styles.subtitle}>{title}</p>
      <p className={styles.description}>{body}</p>
    </div>
  )
}
