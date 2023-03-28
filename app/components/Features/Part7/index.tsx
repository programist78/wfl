import Image from "next/image"
import styles from "./index.module.scss"

export default function Part7() {
  return (
    <div className={styles.preback}>
    <div className={styles.back}>
      <p className={styles.title}>WFL Crypto Payment Card</p>
      <div className={styles.info}>
      <p className={styles.text1}>
      •  Connected directly to your wallet, you can spend in fiat currency both in shops and online using the balance of your WFL coins you preload to your debit card.
      </p>
      <p className={styles.text2}>
      •  This is the best way to spend your wealth without exchanging or withdrawing your income and money earned within the Wealth Free Life platform.
      </p>
      <div className={styles.cards}>
        <Image src="/Cards.webp" alt="cards" width={1300} height={970}/>
        <div className={styles.line_group}>
        <div className={styles.white}/>
        <div className={styles.gray}/>
        </div>
      </div>
      <p className={styles.text3}>
      •  WFL debit cards enable members to purchase items online or in-person and withdraw cash from ATMs using their WFL coins. This is possible even if sellers and ATMs do not accept cryptocurrency. Rather than converting cryptocurrency into local currency, cardholders load a specific amount of WFL coins onto the card, which are automatically converted during transactions.
      </p>
    </div>
    </div>
    </div>
  )
}
