import Image from "next/image"
import styles from "./index.module.scss"

export default function Part3() {
  return (
    <div className={styles.back}>
        <p className={styles.title}>WFL investment trading AI Pool</p>
        <div>
          <div className={styles.dashboard}>
          <Image src="/Dashboard2.webp" alt="investment" width={1100} height={619}/>
          </div>
          <div className={styles.text}>
          The AI Pool is an investment structure that combines investor contributions to trade crypto and commodities smart contracts. It uses the WFL pool as a single entity to gain high profits, maximizing wins and earning. when you keep your investment we also compound it every week, for larger profits.
We use the best profitable AI Investments bots, this team of bots look every 5 minutes for the best trade to invest with win 85% of the time, gaining minimum of 3% monthly!
          </div>
        </div>
    </div>
  )
}