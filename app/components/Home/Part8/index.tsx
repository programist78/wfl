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
        <p className={styles.text}>Are you ready to join the revolution and unlock your financial potential?
This WFL platform, created by top experts, is designed to help you reach your financial goals and achieve success beyond your dreams</p>
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
