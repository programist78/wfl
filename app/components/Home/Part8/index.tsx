import AnimatedLeft from 'hooks/AnimatedLeft'
import styles from './Part8.module.scss'
import AnimatedRight from 'hooks/AnimatedRight'
import AnimatedText4 from 'hooks/AnimatedText4'

export default function Part8() {
  return (
    <div className={styles.back}>
      <AnimatedLeft>
        <p className={styles.title}>Be one of the first</p>
        </AnimatedLeft>
        <AnimatedRight>
        <p className={styles.text}>Claim your FREE account now and secure your spot on the early access waiting list. Don't miss out on this opportunity to change your life forever!</p>
        </AnimatedRight>
        <AnimatedText4>
        <div className={styles.box}>
            <div className={styles.number}>903/1000</div>
            <p className={styles.box_text}>have already joined</p>
        </div>
        </AnimatedText4>
    </div>
  )
}