import HowItWorksItem from "./HowItWorksItem"
import styles from './Footer.module.css'

export default ({ steps, title }) => {
  return (
    <footer className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.stepsContainer}>
        {
          steps && steps.length > 0 && steps.map((step, index) => {
            return (
              <HowItWorksItem
                title={step.content.title}
                body={step.content.body}
                key={step.id}
                index={`${index + 1}`.padStart(2,'0')}
              />
            )
          })
        }
      </div>
    </footer>
  )
}
