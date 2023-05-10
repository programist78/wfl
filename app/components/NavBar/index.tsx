import Image from 'next/image'
import styles from './NavBar.module.scss'
import {IoIosArrowDown} from 'react-icons/io'
import { Roboto } from '@next/font/google'
import { useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { Montserrat } from '@next/font/google'
import Link from 'next/link'
import { useAppSelector } from 'hooks/type'
const roboto = Roboto({
    weight: ['300', '400', '500', '700', '900'],
    subsets: ['latin'],
  })
  const montserrat = Montserrat({
    weight: ['300', '400', '500', '700', '900'],
    subsets: ['latin'],
  })
export default function NavBar() {
  const {admin} = useAppSelector((state) => state.admin);
  const [isScrollUp, setIsScrollUp] = useState(false)

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop
    let isScrollUp = false

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollTop < lastScrollTop) {
        setIsScrollUp(false)
      } else if (currentScrollTop > lastScrollTop) {
        setIsScrollUp(true)
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);


  const part2Styles = useSpring({
    transform: isScrollUp ? 'translateY(-160%)' : 'translateY(0%)',
    opacity: isScrollUp ? 1 : 1
  })
  return (
    <main className={montserrat.className}>
          <div className={styles.preback}>
    {/* <div className={styles.back}> */}  <div className={styles.back1}>
          <p>Be the first of the 1000</p>
        </div>
      <animated.div style={part2Styles} className={styles.back}>
        <Link href="/">
        <div className={styles.logo}>
            <Image src="/logo.svg" alt='Logo' width={40} height={40}/>
            <main className={roboto.className}>
            <p>Wealth Free Life</p>
            </main>
        </div>
        </Link>
        <div className={styles.part2}>

            {/* <div>
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
            </div> */}
                                  {admin && <Link href="/admin/dashboard"> <div>
                <p>Dashboard</p>
            </div></Link>}
                        <div>
                <p>Features</p>
            </div>
            <div>
                <p>Pricing</p>
            </div>
            <Link href="/blog"><div>
                <p>Blog</p>
            </div></Link>
            <div>
                <p>About us</p>
            </div>
            
        </div>
        <div className={styles.part3}>
            <p>Sign in</p>
            <Link href="/auth/join-now"><button>Join Now</button></Link>
        </div>
        </animated.div>
      
    {/* </div> */}
    </div>
    </main>
  )
}
