import Image from 'next/image'
import styles from './Part3.module.scss'

export default function Part3() {
  return (
    <div className={styles.back}>
       <p className={styles.title}>Investing made simple</p>
       <div className={styles.part2}>
        <div className={styles.box}>
        <div>
            <Image src="/home_earn.svg" alt='.' width={45} height={45}/>
            </div>
            <p className={styles.card_title}>EARN 90% BACK</p>
            <p className={styles.card_text}>
            Our unique economic model includes monthly referral commissions (up to 90%)
            </p>
        </div>
        <p className={styles.text}>Say goodbye to hours of research and work, we do it all for you. Just sit back, relax and watch your wealth soar!</p>
        <div className={styles.box}>
        <div>
            <Image src="/home_community.svg" alt='.' width={45} height={45}/>
            </div>
            <p className={styles.card_title}>COMMUNITY & Growth</p>
            <p className={styles.card_text}>
            Connect with like-minded individuals with our chat feature built in our dashboard
            </p>
        </div>
       </div>
       <div className={styles.part3}>
       <div className={styles.box}>
        <div>
        <Image src="/home_opportunity.svg" alt='.' width={45} height={45}/>
            </div>
            <p className={styles.card_title}>MORE OPPORTUNITIES</p>
            <p className={styles.card_text}>
            We incorporate auto-bot pool investments, host an NFT marketplace and created the WFL crypto coin 
            </p>
        </div>
       </div>
    </div>
  )
}
