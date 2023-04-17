import Image from 'next/image'
import styles from './Part6.module.scss'
import AnimatedText4 from 'hooks/AnimatedText4'
import AnimatedLeft from 'hooks/AnimatedLeft'
import AnimatedRight from 'hooks/AnimatedRight'

export default function Part6() {
  return (
    <div className={styles.back}>
        <div className={styles.part1}>
          <AnimatedText4><p className={styles.title}>What does the WFL provide?</p></AnimatedText4>
          <button>View more</button>
        </div>
        <div className={styles.part2}>
          <div className={styles.small_part}>
            <AnimatedLeft>
            <div className={styles.feature}>
              <div className={styles.feature_header}>
                <Image src="/contract.svg" alt='.' width={50} height={50}/>
                <p>Smart contracts</p>
              </div>
              <p className={styles.feature_text}>
              Computer program that controls the transfer of digital assets between parties based on certain conditions
              </p>
            </div>
            </AnimatedLeft>
            <AnimatedLeft>
            <div className={styles.feature}>
              <div className={styles.feature_header}>
                <Image src="/referral.svg" alt='.' width={50} height={50}/>
                <p className={styles.feature_title}>Referral Program</p>
              </div>
              <p className={styles.feature_text}>Wealth Free life referral program allows you to earn passive income by inviting friends to join our platform</p>
            </div>
            </AnimatedLeft>
            <AnimatedLeft>
            <div className={styles.feature}>
              <div className={styles.feature_header}>
                <Image src="/nft.svg" alt='.' width={50} height={50}/>
                <p className={styles.feature_title}>NFT Marketplace</p>
              </div>
              <p className={styles.feature_text}>Wealth Free Life users can create, sell, and profit from NFT art or collectibles</p>
            </div>
            </AnimatedLeft>
          </div>
          <div className={styles.small_part}>
            <AnimatedRight>
            <div className={styles.feature}>
              <div className={styles.feature_header}>
                <Image src="/stacking.svg" alt='.' width={50} height={50}/>
                <p className={styles.feature_title}>Stacking pool</p>
              </div>
              <p className={styles.feature_text}>Allows multiple stakeholders to combine their computing resources, increasing their chances of receiving rewards</p>
            </div>
            </AnimatedRight>
            <AnimatedRight>

            <div className={styles.feature}>
              <div className={styles.feature_header}>
                <Image src="/e_commerce.svg" alt='.' width={50} height={50}/>
                <p className={styles.feature_title}>E-Commerce</p>
              </div>
              <p className={styles.feature_text}>
              Marketplace where users can buy and sell goods and services while making money using the WFL coin for transactions.
              </p>
            </div>
            </AnimatedRight>
            <AnimatedRight>
            <div className={styles.feature}>
              <div className={styles.feature_header}>
                <Image src="/yield.svg" alt='.' width={50} height={50}/>
                <p className={styles.feature_title}>Yield Farming</p>
              </div>
              <p className={styles.feature_text}>Yield nodes are able to generate profits for their owners</p>
            </div>
            </AnimatedRight>
          </div>
        </div>
        <div className={styles.more}>
          <p>more</p>
          <Image src="/link.svg" alt='.' width={44} height={44}/>
        </div>
    </div>
  )
}
