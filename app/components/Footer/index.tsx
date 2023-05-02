import styles from './Footer.module.scss'
import {BsFacebook} from  'react-icons/bs'
import {BsTwitter} from  'react-icons/bs'
import {AiFillLinkedin} from  'react-icons/ai'
import {AiFillInstagram} from  'react-icons/ai'
import Image from 'next/image'

export default function Footer() {
  
  return (
    <div className={styles.prefooter}>
      <div className={styles.marquee}>
        <ul className={styles.marquee__content}>
        <p>Copyright 2023 © Wealth Free Life. All rights reserved</p>
        <p>Your satisfaction is our top priority at Wealth Free Life</p>
        <p>Get in touch with our support team at wfl@mail.com</p>
        </ul>
        <ul className={styles.marquee__content} arial-hidden="true">
        <p>Copyright 2023 © Wealth Free Life. All rights reserved</p>
        <p>Your satisfaction is our top priority at Wealth Free Life</p>
        <p>Get in touch with our support team at wfl@mail.com</p>
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
