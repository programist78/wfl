import Image from 'next/image'
import styles from './Part1.module.scss'
import AnimatedText2 from 'hooks/AnimatedText2'

export default function Part1() {
  return (
    <div className={styles.back}>
        <div className={styles.part1}>
            <div className={styles.pre_title}>
            <p className={styles.title}>Superior.Security.Forever.</p>
            {/* <p className={styles.title2}>Forever.</p> */}
            </div>
            <p className={styles.text}><AnimatedText2>Our commitment to providing top-notch security on all levels of the platform, means that you can have peace of mind knowing that you are protected against any potential threats.</AnimatedText2>
            </p>
        </div>
        {/* <div className={styles.part2}> */}
        {/* <div className={styles.black_back}/> */}

        <Image src="/ps-shield.png" width={750} height={750} alt="lock" className={styles.white_lock}/>
        {/* <Image src="/white-lock.webp" width={750} height={750} alt="lock" className={styles.white_lock}/> */}
        {/* </div> */}
    </div>
  )
}
