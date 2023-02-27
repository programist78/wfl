import Image from 'next/image'
import styles from './NavBar.module.scss'
import {IoIosArrowDown} from 'react-icons/io'
import { Roboto } from '@next/font/google'
import { Montserrat } from '@next/font/google'
const roboto = Roboto({
    weight: ['300', '400', '500', '700', '900'],
    subsets: ['latin'],
  })
  const montserrat = Montserrat({
    weight: ['300', '400', '500', '700', '900'],
    subsets: ['latin'],
  })
export default function NavBar() {

  return (
    <main className={montserrat.className}>
    <div className={styles.back}>
        <div className={styles.logo}>
            <Image src="/logo.svg" alt='Logo' width={40} height={40}/>
            <main className={roboto.className}>
            <p>WFL</p>
            </main>
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
    </main>
  )
}
