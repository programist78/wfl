import Image from 'next/image'
import styles from './Part3.module.scss'
import AnimatedText4 from 'hooks/AnimatedText4'

export default function Part3() {
  return (
    <div className={styles.back}>
      <AnimatedText4>
       <p className={styles.title}>Investing made simple</p>
       </AnimatedText4>
       <div className={styles.part2}>
        <AnimatedText4>
        <div className={styles.box}>
        <div>
            <Image src="/home_earn.svg" alt='.' width={30} height={30}/>
            </div>
            <p className={styles.card_title}>EARN 90% BACK</p>
            <p className={styles.card_text}>
            Our unique economic model includes monthly referral commissions (up to 90%)
            </p>
        </div>
        </AnimatedText4>
        <AnimatedText4>
        <p className={styles.text}>Say goodbye to hours of research and work, we do it all for you. Just sit back, relax and watch your wealth soar!</p>
        </AnimatedText4>
        <AnimatedText4>
        <div className={styles.box}>
        <div>
            <Image src="/home_community.svg" alt='.' width={30} height={30}/>
            </div>
            <p className={styles.card_title}>COMMUNITY & Growth</p>
            <p className={styles.card_text}>
            Connect with like-minded individuals with our chat feature built in our dashboard
            </p>
        </div>
        </AnimatedText4>
       </div>
       
       <div className={styles.part3}>
       <AnimatedText4>

       <div className={styles.box}>
        <div>
        <Image src="/home_opportunity.svg" alt='.' width={30} height={30}/>
            </div>
            <p className={styles.card_title}>MORE OPPORTUNITIES</p>
            <p className={styles.card_text}>
            We incorporate auto-bot pool investments, host an NFT marketplace and created the WFL crypto coin 
            </p>
        </div>
        </AnimatedText4>
       </div>
    </div>
  )
}
