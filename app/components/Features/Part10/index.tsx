import Image from "next/image"
import styles from "./index.module.scss"
import AnimatedRight from "hooks/AnimatedRight"
import AnimatedText4 from "hooks/AnimatedText4"

export default function Part10() {
  return (
    <div className={styles.back}>
      <AnimatedRight>
        <div className={styles.head}>
      <p className={styles.title}>NFT Marketplace</p>
      <button className={styles.link_button}>
        <p>View more</p>
      </button>
      </div>
      </AnimatedRight>
      <div className={styles.info}>
        <AnimatedText4>
        <p className={styles.text}>
        •  This feature involves creating a marketplace where users can buy and sell non-fungible tokens (NFTs). To implement this feature, we will need to:
        <br />
        <br />
1. Develop a marketplace platform  that allows users to create and list their NFTs for sale.
<br />
2. Determine the fees and rules (in smart contract) for buying and selling NFTs on your platform
<br />
3. Ensure that the marketplace is secure, user-friendly, and easily accessible on your website platform.
        </p>
        </AnimatedText4>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Image src="/example1.webp" width={400} height={280} alt="example"/>
            <div className={styles.card_info}>
            <div className={styles.author}>Open Editor</div>
            <p className={styles.name}>Beautiful cube</p>
            <p className={styles.price}>$1.00 Each</p>
            <p className={styles.descr}>42 Editions Minted</p>
            <button>
              Sold out
            </button>
          </div>
          </div>
          <div className={styles.card}>
            <Image src="/example1.webp" width={400} height={280} alt="example"/>
            <div className={styles.card_info}>
            <div className={styles.author}>Open Editor</div>
            <p className={styles.name}>Beautiful cube</p>
            <p className={styles.price}>$1.00 Each</p>
            <p className={styles.descr}>42 Editions Minted</p>
            <button>
              Sold out
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
