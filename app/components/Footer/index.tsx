import styles from './Footer.module.scss'
import {BsFacebook} from  'react-icons/bs'
import {BsTwitter} from  'react-icons/bs'
import {AiFillLinkedin} from  'react-icons/ai'
import {AiFillInstagram} from  'react-icons/ai'

export default function Footer() {
  return (
    <div className={styles.footer}>
    <div className={styles.waves}>
      {/* <div className={styles.wave} id="wave1"></div>
      <div className={styles.wave} id="wave2"></div>
      <div className={styles.wave} id="wave3"></div>
      <div className={styles.wave} id="wave4"></div> */}
    </div>
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
    <ul className={styles.menu}>
      <li className={styles.menu__item}><a className={styles.menu__link} href="#">Home</a></li>
      <li className={styles.menu__item}><a className={styles.menu__link} href="#">About</a></li>
      <li className={styles.menu__item}><a className={styles.menu__link} href="#">Security</a></li>
      <li className={styles.menu__item}><a className={styles.menu__link} href="#">Contact</a></li>
      <li className={styles.menu__item}><a className={styles.menu__link} href="#">Features</a></li>
    </ul>
    {/* <p>&copy;2021 Nadine Coelho | All Rights Reserved</p> */}
  </div>
  )
}
