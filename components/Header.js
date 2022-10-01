import Image from 'next/image'
import styles from './Header.module.css'

export default () => {
  return (
    <header className={styles.header}>
      <Image
        alt="The Endless Logo"
        height={18}
        src="/images/logo-endless.svg"
        width={110}
      />
    </header>
  )
}