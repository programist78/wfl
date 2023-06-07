import AnimatedRight from 'hooks/AnimatedRight'
import styles from './Part2.module.scss'
import Image from "next/image"
import AnimatedText4 from 'hooks/AnimatedText4'
export default function Part2() {
  return (
    <div className={styles.back}>
        <AnimatedText4>
        <p className={styles.title}>Our approach</p>
        </AnimatedText4>
        <div className={styles.boxes}>
            {/* <AnimatedRight> */}
            <div className={styles.box}>
                <div className={styles.icon_box}>
                <Image src="/home.svg" alt='.' width={40} height={40}/>
                </div>
                <p className={styles.text_part}>
                    <p className={styles.card_title}>Safe & Secure</p>
                    <p className={styles.card_text}>We incorporate auto-bot pool investments, host an NFT marketplace and created the WFL crypto coin </p>
                </p>
                <Image src="/about_us_part2_greencard.svg" alt='.' width={520} height={150} className={styles.green_card}/>
            </div>
            {/* </AnimatedRight> */}
            <AnimatedRight>
            <div className={`${styles.box} ${styles.green_box}`}>
                <div className={styles.icon_box}>
                <Image src="/flash.svg" alt='.' width={40} height={40}/>
                </div>
                <p className={styles.text_part}>
                    <p className={styles.card_title}>Safe & Secure</p>
                    <p className={styles.card_text}>We incorporate auto-bot pool investments, host an NFT marketplace and created the WFL crypto coin </p>
                </p>
                <Image src="/about_us_part2_bluecard.svg" alt='.' width={520} height={150} className={styles.green_card}/>
            </div>
            </AnimatedRight>
            {/* <AnimatedRight> */}
            <div className={styles.box}>
                <div className={styles.icon_box}>
                <Image src="/list.svg" alt='.' width={40} height={40}/>
                </div>
                <p className={styles.text_part}>
                    <p className={styles.card_title}>Safe & Secure</p>
                    <p className={styles.card_text}>We incorporate auto-bot pool investments, host an NFT marketplace and created the WFL crypto coin </p>
                </p>
                <Image src="/about_us_part2_greencard.svg" alt='.' width={520} height={150} className={styles.green_card}/>
            </div>
            {/* </AnimatedRight> */}
        </div>
    </div>
  )
}
