import Image from "next/image"
import styles from "./index.module.scss"

export default function Part2() {
  return (
    <div className={styles.back}>
        <p className={styles.title}>User dashboard</p>
        <Image src="/Dashboard.webp" width={1063} height={598} className={styles.image} alt="dashboard"/>
    </div>
  )
}
