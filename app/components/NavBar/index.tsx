import Image from 'next/image'
import styles from './NavBar.module.scss'
import {IoIosArrowDown} from 'react-icons/io'
export default function NavBar() {
  return (
    <div className={styles.back}>
        <div className={styles.logo}>
            <Image src="/logo.svg" alt='Logo' width={40} height={40}/>
            <p>WFL</p>
        </div>
        <div className={styles.part2}>
            <div>
                <p>Nft</p>
                <IoIosArrowDown className={styles.arrow}/>
            </div>
            <div>
                <p>Crypto</p>
                <IoIosArrowDown className={styles.arrow}/>
            </div>
            <div>
                <p>Events</p>
                <IoIosArrowDown className={styles.arrow}/>
            </div>
        </div>
        <div className={styles.part3}>
            <p>Login</p>
            <button>Get started</button>
        </div>
    </div>
  )
}
