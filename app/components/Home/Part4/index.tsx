import Image from 'next/image'
import styles from './Part4.module.scss'
import AnimatedText4 from 'hooks/AnimatedText4'

export default function Part4() {
  return (
    <div className={styles.back}>
        <AnimatedText4>
        <p className={styles.title}>Choose your plan</p>
        </AnimatedText4>
        <div className={styles.cards}>
        <AnimatedText4>
            <div className={styles.card_basic}>
                <div className={styles.icon}>
                    <Image src="/home.svg" alt='.' width={40} height={40}/>
                </div>
                <p className={styles.card_title}>Free</p>
                <p className={styles.card_price}>$0</p>
                <button className={styles.get_started}>
                    Get Started
                </button>
                    <div className={styles.description}>
                    <p>• 20% reoccurring referral commission</p>
                    <p>• buy & stake WFL coin</p>
                </div>
                <button className={styles.see}>See all features</button>
            </div>
            </AnimatedText4>
            <AnimatedText4>

            <div className={styles.card_premium}>
                <div className={styles.icon}>
                    <Image src="/flash.svg" alt='.' width={40} height={40}/>
                </div>
                <p className={styles.card_title}>Premium</p>
                <p className={styles.card_price}>$100</p>
                <button className={styles.get_started}>
                    Get Started
                </button>
                <div className={styles.description}>
                    <p>• 90% reoccurring referral commission</p>
                    <p>• buy & stake WFL coin</p>
                    <p>• auto trading bot pool</p>
                    <p>• NFT marketplace</p>
                    <p>• dApps</p>
                </div>
                <button className={styles.see}>See all features</button>
            </div>
            </AnimatedText4>
            <AnimatedText4>
            <div className={styles.card_basic}>
                <div className={styles.icon}>
                    <Image src="/list.svg" alt='.' width={40} height={40}/>
                </div>
                <p className={styles.card_title}>Standart</p>
                <p className={styles.card_price}>$50</p>
                <button className={styles.get_started}>
                    Get Started
                </button>
                <div className={styles.description}>
                    <p>• 40% reoccurring referral commission</p>
                    <p>• buy & stake WFL coin</p>
                    <p>• auto trading bot pool</p>
                    <p>• NFT marketplace</p>
                </div>
                <button className={styles.see}>See all features</button>
            </div>
            </AnimatedText4>
        </div>
    </div>
  )
}
