import Image from 'next/image'
import styles from './Part1.module.scss'

export default function Part1() {
  return (
    <div className={styles.back}>
        <div className={styles.left_part}>
            <div className={styles.box}>
            <p className={styles.title}>Change your life, just now</p>
            <p className={styles.text}>Join the revolutionary movement, be one of the first 1,000 to take control of your financial future</p>
            <button>JOIN NOW</button>
            </div>
        </div>
        <div className={styles.right_part}>
            <div className={styles.ill}>
                <Image src="/home_dashboard.webp" alt='Dashboard' width={3252} height={2524} className={styles.home_dashboard}/>
                <Image src="/home_dashboard_appbar.webp" alt='AppBar' width={160} height={1468} className={styles.home_dashboard_appbar}/>
                <Image src="/home_dashboard_exchange.webp" alt='Exchange' width={496} height={560} className={styles.home_dashboard_exchange}/>
                <Image src="/home_dashboard_transactions.webp" alt='Transactions' width={512} height={676} className={styles.home_dashboard_transactions}/>
            </div>
        </div>
    </div>
  )
}
