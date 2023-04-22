import Image from "next/image"
import styles from "./index.module.scss"
import {BsThreeDots} from 'react-icons/bs'
import {MdAddLink} from 'react-icons/md'
import AnimatedLeft from "hooks/AnimatedLeft"
import AnimatedText4 from "hooks/AnimatedText4"

export default function Part11() {
  return (
    <div className={styles.preback}>
      <div className={styles.back}>
        <div className={styles.part1}>
          <div className={styles.info}>
            <AnimatedLeft>
            <p className={styles.title}>Earn by inviting friends</p>
            </AnimatedLeft>
            <button>Invite <span><MdAddLink className={styles.add}/></span></button>
          </div>
          <AnimatedText4>
          <div className={styles.ill}>
            <div className={styles.comment1}>
              <Image src="/avatar-men.jpg" width={50} height={50} alt="logo"/>
              <div className={styles.comment_about}>
                <p className={styles.about_title}>
                Numan Xafar
                </p>
                <p className={styles.about_text}>Join 2 Hour Ago</p>
              </div>
              <BsThreeDots className={styles.dots}/>
            </div>
            <div className={styles.comment1}>
              <Image src="/avatar-men.jpg" width={50} height={50} alt="logo"/>
              <div className={styles.comment_about}>
                <p className={styles.about_title}>
                Numan Xafar
                </p>
                <p className={styles.about_text}>Join 2 Hour Ago</p>
              </div>
              <BsThreeDots className={styles.dots}/>
            </div>
            <div className={styles.comment1}>
              <Image src="/avatar-men.jpg" width={50} height={50} alt="logo"/>
              <div className={styles.comment_about}>
                <p className={styles.about_title}>
                Numan Xafar
                </p>
                <p className={styles.about_text}>Join 2 Hour Ago</p>
              </div>
              <BsThreeDots className={styles.dots}/>
            </div>
          </div>
          </AnimatedText4>
        </div>
        <div className={styles.part2}>
          <div className={styles.close_block}>
            <Image src="/warning.svg" alt="*" width={50} height={50}/>
            <p>Users can also earn income from reoccurring referral commissions( 20%-90% ), from your invites!</p>
            <button>View more</button>
          </div>
        </div> 
      </div>
    </div>
  )
}
