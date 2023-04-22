import { useState } from 'react'
import styles from './Part9.module.scss'
import {IoIosArrowDown} from 'react-icons/io'
import AnimatedLeft from 'hooks/AnimatedLeft'
import AnimatedRight from 'hooks/AnimatedRight'

export default function Part9() {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
  return (
    <div className={styles.back}>
        <AnimatedLeft>
        <p className={styles.title}>FAQ</p>
        </AnimatedLeft>

        <div className={styles.block}>
        <AnimatedRight>
            <div className={styles.header_block} onClick={() => setOpen1(!open1)}>
            <p className={styles.title_block}>Q: What is Wealth Free Life platform?</p>
            <IoIosArrowDown  className={styles.arrow}/>
            </div></AnimatedRight>
            {open1 &&           <p className={styles.text}>
            A: This innovative platform is a system that enables members to manage their own finances and investments without relying on traditional financial institutions. It allows members to access a variety of financial income streams and many wealthy features.
            </p>}
  
        </div>
        <div className={styles.block}>
        <AnimatedRight>
        <div className={styles.header_block} onClick={() => setOpen2(!open2)}>
        <p className={styles.title_block}>Q: How does WFL-decentralized finance platform generate passive income?</p>
            <IoIosArrowDown  className={styles.arrow}/>
            </div>
            </AnimatedRight>
            {open2 && 
            <p className={styles.text}>
            A: The Wealth Free Life platform allow to generate passive income by allowing members to invest their funds in various assets and earn returns without actively managing their investments. This can include investments pool, smart contracts, and cryptocurrency. Additionally, users can also earn income from reoccurring referral commissions from your invites, and much more see -features(link) .
            </p>}
        </div>
  
        <div className={styles.block}>
        <AnimatedRight>
            <div className={styles.header_block} onClick={() => setOpen3(!open3)}>
            <p className={styles.title_block}>Q: Is WFL Certified?</p>
            <IoIosArrowDown  className={styles.arrow}/>
            </div>
            </AnimatedRight>
            {open3 && 
            <p className={styles.text}>
            A: Wealth Free Life LLC certified Crypto company in SVG, it is certified SOC 2  and we are currently involved in the process of obtaining ISO 27001 and the GDPR, as well as supreme auditing for the blockchain. the technology was researched and tested before successfully deployed
            </p>
            }
        </div>
    </div>
  )
}
