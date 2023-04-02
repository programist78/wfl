import AnimatedRight from 'hooks/AnimatedRight'
import styles from './index.module.scss'
import AnimatedLeft from 'hooks/AnimatedLeft'

export default function Part4() {
  return (
    <div>
      <div>
      <AnimatedRight>
      <p className={styles.title}>Smart contracts</p>
      </AnimatedRight>
      </div>
      <div className={styles.texts}>
        <AnimatedLeft>
        <p className={styles.text1}><span>1. </span>The WFL Blockchain creating smart contracts to carry out financial transactions that generate revenue for the users. The key purpose is to complete the deals successfully and profitably.</p>
        </AnimatedLeft>
        <AnimatedRight>
        <p className={styles.text2}><span>2. </span>The operation of smart contracts is governed by the guidelines agreed upon by both parties, as well as a specific security code. This outcomes in wealth and income.</p>
        </AnimatedRight>
        <AnimatedLeft>
        <p className={styles.text1}><span>3. </span>The operation of smart contracts is governed by the guidelines agreed upon by both parties, as well as a specific security code. This outcomes in wealth and income.</p>
        </AnimatedLeft>
      </div>

    </div>
  )
}
