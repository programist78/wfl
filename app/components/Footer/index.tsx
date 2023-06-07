import styles from './Footer.module.scss'
import {BsFacebook} from  'react-icons/bs'
import {BsTwitter} from  'react-icons/bs'
import {AiFillLinkedin} from  'react-icons/ai'
import {AiFillInstagram} from  'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
  
  return (
    <div className={styles.prefooter}>
      <div className={styles.marquee}>
        <ul className={styles.marquee__content}>
       <Link href="/blog"> <p>How to create wealth on WFL without any... check title in blogs</p></Link>
       <Link href="/about-us"><p>How Wealth Free Life Platform Works?</p></Link>
       <Link href="/blog/1344457"><p>The High Value of WFL Cryptocurrency Coin</p></Link>
        </ul>
        <ul className={styles.marquee__content} arial-hidden="true">
        <Link href="/blog"> <p>How to create wealth on WFL without any... check title in blogs</p></Link>
        <Link href="/about-us"><p>How Wealth Free Life Platform Works?</p></Link>
        <Link href="/blog/1344457"><p>The High Value of WFL Cryptocurrency Coin</p></Link>
        </ul>
      </div>
    <div className={styles.footer}>
        <div className={styles.logo}>
            <Image src="/logo.svg" alt='Logo' width={40} height={40}/>
            <p>Wealth Free Life</p>
        </div>

    <ul className={styles.menu}>
      <li className={styles.menu__item}><a className={styles.menu__link} href="#">Home</a></li>
      <li className={styles.menu__item}><a className={styles.menu__link} href="#">About</a></li>
      <li className={styles.menu__item}><a className={styles.menu__link} href="#">Security</a></li>
      <li className={styles.menu__item}><a className={styles.menu__link} href="#">Features</a></li>
    </ul>
    <div className={styles.inblock}> 
    <div  className={styles.block}/>
    <ul className={styles.social_icon}>
      
      <li className={styles.social_icon__item}><a className={styles.social_icon__link} href="#">
          {/* <ion-icon name="logo-facebook"></ion-icon> */}
          <BsFacebook />
        </a></li>
        <li className={styles.social_icon__item}><a className={styles.social_icon__link} href="#">
          {/* <ion-icon name="logo-facebook"></ion-icon> */}
          <BsTwitter />
        </a></li>
        <li className={styles.social_icon__item}><a className={styles.social_icon__link} href="#">
          {/* <ion-icon name="logo-facebook"></ion-icon> */}
          <AiFillLinkedin />
        </a></li>
        <li className={styles.social_icon__item}><a className={styles.social_icon__link} href="#">
          {/* <ion-icon name="logo-facebook"></ion-icon> */}
          <AiFillInstagram />
        </a></li>
    </ul>
    <div  className={styles.block2}/>
    </div>
    {/* <p>&copy;2021 Nadine Coelho | All Rights Reserved</p> */}
  </div>
  </div>
  )
}
