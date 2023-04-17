import Image from 'next/image'
import styles from './Part7.module.scss'
import AnimatedText4 from 'hooks/AnimatedText4'

export default function Part7() {
  return (
    <div className={styles.back}>
        <AnimatedText4>
        <p className={styles.title}>Recent reviews</p>
        </AnimatedText4>
        <div className={styles.reviews}>
        <div className={styles.marquee}>
  <ul className={styles.marquee__content}>
    <div className={styles.review}>
        <p className={styles.review_text}>
        1.Wealth Freedom Life is an incredible platform that I absolutely love using. It's a one-stop-shop 
        </p>
        <div className={styles.review_bottom}>
            <Image src="/logo_user.svg" alt="." width={50} height={50} />
            <div className={styles.names}>
                <p className={styles.review_nick}>@janiel_dag</p>
                <p className={styles.review_who}>Premium user</p>
            </div>
        </div>
    </div>
    <div className={styles.review}>
        <p className={styles.review_text}>
        2.Wealth Freedom Life is an incredible platform that I absolutely love using. It's a one-stop-shop 
        </p>
        <div className={styles.review_bottom}>
            <Image src="/logo_user.svg" alt="." width={50} height={50} />
            <div className={styles.names}>
                <p className={styles.review_nick}>@janiel_dag</p>
                <p className={styles.review_who}>Premium user</p>
            </div>
        </div>
    </div>
    <div className={styles.review}>
        <p className={styles.review_text}>
        3.Wealth Freedom Life is an incredible platform that I absolutely love using. It's a one-stop-shop 
        </p>
        <div className={styles.review_bottom}>
            <Image src="/logo_user.svg" alt="." width={50} height={50} />
            <div className={styles.names}>
                <p className={styles.review_nick}>@janiel_dag</p>
                <p className={styles.review_who}>Premium user</p>
            </div>
        </div>
    </div>
    <div className={styles.review}>
        <p className={styles.review_text}>
        4.Wealth Freedom Life is an incredible platform that I absolutely love using. It's a one-stop-shop 
        </p>
        <div className={styles.review_bottom}>
            <Image src="/logo_user.svg" alt="." width={50} height={50} />
            <div className={styles.names}>
                <p className={styles.review_nick}>@janiel_dag</p>
                <p className={styles.review_who}>Premium user</p>
            </div>
        </div>
    </div>
    <div className={styles.review}>
        <p className={styles.review_text}>
        5.Wealth Freedom Life is an incredible platform that I absolutely love using. It's a one-stop-shop 
        </p>
        <div className={styles.review_bottom}>
            <Image src="/logo_user.svg" alt="." width={50} height={50} />
            <div className={styles.names}>
                <p className={styles.review_nick}>@janiel_dag</p>
                <p className={styles.review_who}>Premium user</p>
            </div>
        </div>
    </div>
  </ul>
  <ul className={styles.marquee__content} aria-hidden="true">
  <div className={styles.review}>
        <p className={styles.review_text}>
        1.Wealth Freedom Life is an incredible platform that I absolutely love using. It's a one-stop-shop 
        </p>
        <div className={styles.review_bottom}>
            <Image src="/logo_user.svg" alt="." width={50} height={50} />
            <div className={styles.names}>
                <p className={styles.review_nick}>@janiel_dag</p>
                <p className={styles.review_who}>Premium user</p>
            </div>
        </div>
    </div>
    <div className={styles.review}>
        <p className={styles.review_text}>
        2.Wealth Freedom Life is an incredible platform that I absolutely love using. It's a one-stop-shop 
        </p>
        <div className={styles.review_bottom}>
            <Image src="/logo_user.svg" alt="." width={50} height={50} />
            <div className={styles.names}>
                <p className={styles.review_nick}>@janiel_dag</p>
                <p className={styles.review_who}>Premium user</p>
            </div>
        </div>
    </div>
    <div className={styles.review}>
        <p className={styles.review_text}>
        3.Wealth Freedom Life is an incredible platform that I absolutely love using. It's a one-stop-shop 
        </p>
        <div className={styles.review_bottom}>
            <Image src="/logo_user.svg" alt="." width={50} height={50} />
            <div className={styles.names}>
                <p className={styles.review_nick}>@janiel_dag</p>
                <p className={styles.review_who}>Premium user</p>
            </div>
        </div>
    </div>
    <div className={styles.review}>
        <p className={styles.review_text}>
        4.Wealth Freedom Life is an incredible platform that I absolutely love using. It's a one-stop-shop 
        </p>
        <div className={styles.review_bottom}>
            <Image src="/logo_user.svg" alt="." width={50} height={50} />
            <div className={styles.names}>
                <p className={styles.review_nick}>@janiel_dag</p>
                <p className={styles.review_who}>Premium user</p>
            </div>
        </div>
    </div>
    <div className={styles.review}>
        <p className={styles.review_text}>
        5.Wealth Freedom Life is an incredible platform that I absolutely love using. It's a one-stop-shop 
        </p>
        <div className={styles.review_bottom}>
            <Image src="/logo_user.svg" alt="." width={50} height={50} />
            <div className={styles.names}>
                <p className={styles.review_nick}>@janiel_dag</p>
                <p className={styles.review_who}>Premium user</p>
            </div>
        </div>
    </div>
  </ul>
</div>
        </div>
    </div>
  )
}
