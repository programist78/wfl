import Image from "next/image"
import styles from "./index.module.scss"
import Link from "next/link"
import AnimatedRight from "hooks/AnimatedRight"
import AnimatedText4 from "hooks/AnimatedText4"
export default function Part6() {
  return (
    <div className={styles.back}>
      <AnimatedRight>
      <p className={styles.title}>Your own WFL wallet</p>
      </AnimatedRight>
      <div className={styles.info}>
        <Image src="/Laptop.webp" alt="Example" width={975} height={580}/>
        <AnimatedText4>
        <div className={styles.texts}>
        <p className={styles.text}>•Now is the time to break away from traditional banking methods, and move into a secure digital wallet in a decentralized finance wealth free life platform, with increased control and options.
<br />
<br />
•Your WFL Wallet is a personal, secure passive income generator.</p>

        <Link href="/dashboard#card"><button>View more</button></Link>
        </div>
        </AnimatedText4>
      </div>
    </div>
  )
}
