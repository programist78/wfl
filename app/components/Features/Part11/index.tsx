import Image from "next/image"
import styles from "./index.module.scss"
import {BsThreeDots} from 'react-icons/bs'
import {MdAddLink} from 'react-icons/md'

export default function Part11() {
  return (
    <div className={styles.preback}>
      <div className={styles.back}>
        <div className={styles.part1}>
          <div className={styles.info}>
            <p className={styles.title}>Earn by inviting friends</p>
            <button>Invite <span><MdAddLink className={styles.add}/></span></button>
          </div>
          <div className={styles.ill}>
            <div className={styles.comment1}>
              <Image src="/logo-men.webp" width={50} height={50} alt="logo"/>
              <div className={styles.comment_about}>
                <p className={styles.about_title}>
                Numan Xafar
                </p>
                <p className={styles.about_text}>Join 2 Hour Ago</p>
              </div>
              <BsThreeDots className={styles.dots}/>
            </div>
          </div>
        </div>
        <div className={styles.part2}></div>
      </div>
    </div>
  )
}
