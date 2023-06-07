import Image from 'next/image'
import styles from './Part1.module.scss'
import AnimatedText4 from 'hooks/AnimatedText4'
import AnimatedOpacity from 'hooks/AnimatedOpacity'
import AnimatedText2 from 'hooks/AnimatedText2'
export default function Part1() {
  return (
    <div className={styles.back}>
    <div className={styles.texts}>
      <AnimatedText4>
        <p className={styles.title}>We believe in the power of financial freedom</p>
        </AnimatedText4>
        <AnimatedText4>
        <p className={styles.text}>Our mission is to empower individuals to achieve financial success and live a wealthy life by harnessing the power of blockchain technology and cryptocurrencies.</p>
        </AnimatedText4>
    </div>
    <div className={styles.darker_back}/>
    <Image alt='.' width={2270} height={1135} src="/about_us_preview.webp" className={styles.back_image}/>
    </div>
  )
}
