import AnimatedLeft from 'hooks/AnimatedLeft'
import styles from './index.module.scss'
import Image from 'next/image'
import AnimatedText4 from 'hooks/AnimatedText4'
export default function Part9() {
  return (
    <div className={styles.back}>
      <div className={styles.part1}>
        <AnimatedLeft>
        <p>Stacking pool</p>
        </AnimatedLeft>
        <Image alt="*" src="/cards.png" width={500} height={500}/>
      </div>
      <AnimatedText4>
      <p className={styles.text}>A staking pool allows multiple stakeholders to combine their computing resources, increasing their chances of receiving rewards. They unite their staking power to verify and validate new blocks, which increases the probability of earning block rewards.</p>
      </AnimatedText4>
    </div>
  )
}
