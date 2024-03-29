import Image from 'next/image'
import styles from './Part1.module.scss'
import AnimatedText4 from 'hooks/AnimatedText4'
import AnimatedLeft from 'hooks/AnimatedLeft'

export default function Part1() {
  return (
    <div className={styles.back}>
        <div className={styles.left_part}>
            <div className={styles.box}>
              <AnimatedLeft>
            <p className={styles.title}>Change your life, just now</p>
            </AnimatedLeft>
            <AnimatedText4>
            <p className={styles.text}>Don't Miss Out on This Exclusive Opportunity to Join the First 1,000 Members. Sign up Today and Unlock Your Path to Wealth!</p>
            </AnimatedText4>
            <AnimatedText4>
            <button>JOIN NOW</button>
            </AnimatedText4>
            <p className={styles.small_text}>
            The first 1000 pre-members gets 10 WFL coin, 1 month free Ultimate Plan (100$) & E-Book*
            </p>
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
