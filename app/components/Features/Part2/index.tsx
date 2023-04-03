import Image from "next/image"
import styles from "./index.module.scss"
import AnimatedRight from "hooks/AnimatedRight"
import AnimatedText4 from "hooks/AnimatedText4"
import {AiOutlineLink} from 'react-icons/ai'

export default function Part2() {
  return (
    <div className={styles.back}>
      <AnimatedRight>
        <p className={styles.title}>User dashboard</p>
        </AnimatedRight>
        <AnimatedText4>
          <button className={styles.button}>
            <p>Open</p>
            <AiOutlineLink className={styles.link}/>
          </button>
        <Image src="/Dashboard.webp" width={1063} height={598} className={styles.image} alt="dashboard"/>
        </AnimatedText4>
    </div>
  )
}
