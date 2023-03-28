import styles from "./index.module.scss"
import {IoIosArrowDown} from 'react-icons/io'

export default function Part1() {
  return (
    <div className={styles.preback}>
    <div className={styles.back}>
        <p className={styles.title}>Features</p>
        <p className={styles.close_text}>
        •  This WEB3 DeFi ( decentralized finance) platform will help you to achieve your financial dreams with its decentralized multi income streams. 
        <br/>
        <br/>
        •  The WFL coin can be used to purchase products and services. 
        </p>
        <button className={styles.button_open}>Read more <span><IoIosArrowDown className={styles.arrow}/></span></button>
    </div>
    </div>
  )
}
