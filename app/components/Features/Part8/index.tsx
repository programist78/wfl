import AnimatedRight from 'hooks/AnimatedRight'
import styles from './index.module.scss'
import Image from 'next/image'
import AnimatedText4 from 'hooks/AnimatedText4'
import { AiOutlineLink } from 'react-icons/ai'
export default function Part8() {
  return (
    <div className={styles.back}>
      <div className={styles.texts}>
        <AnimatedRight>
      <p className={styles.title}>DeFi E-Commerce</p>
      </AnimatedRight>
      <AnimatedText4>
      <p className={styles.text}>
      •  Open your shop unlimited products for Free
<br />
<br />
•  Decentralized e-commerce platform that enables users to buy and sell goods and services without a centralized intermediary. Use WFL coin for transactions.
<br />
<br />
•  You can open as many shops as you wish on WFL, and we charge only a 10% maintenance fee per recurring sales transaction. You keep 90% directly in your wallet.
      </p>
      </AnimatedText4>
      </div>
      <div className={styles.ill}>
      <button className={styles.button}>
            <p>Open</p>
            <AiOutlineLink className={styles.link}/>
          </button>
        <div className={styles.info}>
          <div className={styles.features}>
          <p>• Crypto payment!</p>
          <br />
          {/* <br /> */}
          <p>• Pay with WFL wallet!</p>
          <br />
          {/* <br /> */}
          <p>• Payment by card(Visa/Mastercard)</p>
          </div>
          <Image src="/coins.svg" alt="coins" width={325} height={325} />
        </div>
        <Image src="/ill_ecommerce.webp" alt="ec" width={470} height={911} className={styles.phone}/>
      </div>
    </div>
  )
}
