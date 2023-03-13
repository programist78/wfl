import Image from 'next/image'
import styles from './Part1.module.scss'
import AnimatedText2 from 'hooks/AnimatedText2'
import AnimatedText21 from 'hooks/AnimatedText21'

export default function Part1() {
  return (
    <div className={styles.back}>
        <div className={styles.part1}>
            <p className={styles.title}>Superior.Security.Forever.</p>
            {/* <p className={styles.title2}>Forever.</p> */}
            <p className={styles.text}><AnimatedText21>Our commitment to providing top-notch security on all levels of the platform, means that you can have peace of mind knowing that you are protected against any potential threats.</AnimatedText21>
            </p>
        </div>
        {/* <div className={styles.part2}> */}
        {/* <div className={styles.black_back}/> */}

        {/* <Image src="/ps-shield500.png" width={1500} height={1500} alt="lock" className={styles.white_lock}/> */}
        <Image src="/gold-shield.png" width={1500} height={1500} alt="lock" className={styles.white_lock}/>
        <Image src="/back-shield-gold.png" width={500} height={500} alt="lock" className={styles.back_shield_gold}/>
        {/* <Image src="/white-lock.webp" width={750} height={750} alt="lock" className={styles.white_lock}/> */}
        {/* </div> */}
    </div>
  )
}
