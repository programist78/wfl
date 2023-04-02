import Image from "next/image"
import styles from "./index.module.scss"
import AnimatedRight from "hooks/AnimatedRight"
import AnimatedText4 from "hooks/AnimatedText4"

export default function Part2() {
  return (
    <div className={styles.back}>
      <AnimatedRight>
        <p className={styles.title}>User dashboard</p>
        </AnimatedRight>
        <AnimatedText4>
        <Image src="/Dashboard.webp" width={1063} height={598} className={styles.image} alt="dashboard"/>
        </AnimatedText4>
    </div>
  )
}
