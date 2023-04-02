import Image from "next/image"
import styles from "./index.module.scss"
import AnimatedLeft from "hooks/AnimatedLeft"
import AnimatedText4 from "hooks/AnimatedText4"

export default function Part5() {
  return (
    <div className={styles.back}>
      <AnimatedLeft>
      <p className={styles.title}>Exchange WFL</p>
      </AnimatedLeft>
      <div className={styles.info}>
        <AnimatedText4>
        <p className={styles.text}>•  With WFL Exchange, you can trade your cryptocurrencies with ease and efficiency. 
        <br />
        <br />
•  Our institutional exchange rates ensure that you receive the best possible price for your trades, while our ZERO commission charge of only 0% ensures that you keep all of your profits. </p>
</AnimatedText4>
        <div className={styles.images}>
          <Image src="/Phone.webp" alt="Example" width={425} height={829} className={styles.phone}/>
          <Image src="/Cryptocur.webp" alt="Crypto Curency" width={1080} height={632} className={styles.crypto} />
        </div>
      </div>
    </div>
  )
}
