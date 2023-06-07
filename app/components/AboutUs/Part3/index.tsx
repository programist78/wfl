import Image from 'next/image'
import styles from './Part3.module.scss'
import AnimatedText4 from 'hooks/AnimatedText4'

export default function Part3() {
  return (
    <div className={styles.back}>
      <AnimatedText4>
        <p className={styles.title}>Our values</p>
        </AnimatedText4>
        <div className={styles.values}>
        <AnimatedText4>
        <div className={styles.value}>
            <Image src="/about_us_ill1.svg" width={253} height={114} alt='wfl'/>
            <p className={styles.text}>Our mission is to empower individuals to achieve financial success and live a wealthy life by harnessing the power of blockchain technology and cryptocurrencies.</p>
        </div>
        </AnimatedText4>
        <AnimatedText4>
        <div className={styles.value}>
            <p className={styles.text}>We offer a range of services, including a user-friendly cryptocurrency wallet, a free robust cryptocurrency exchange, and a suite of smart contract-based financial tools for individuals. </p>
            <Image src="/about_us_ill2.svg" width={250} height={267} alt='wfl'/>
        </div>
        </AnimatedText4>
        <AnimatedText4>
        <div className={styles.value}>
            <Image src="/about_us_ill3.svg" width={238} height={238} alt='wfl'/>
            <p className={styles.text}>In addition to our wallet and exchange, we offer passive income and auto-invest income streams to our clients. Our passive income streams allow clients to earn rewards simply by holding certain cryptocurrencies in their wallet</p>
        </div>
        </AnimatedText4>
        </div>
    </div>
  )
}
