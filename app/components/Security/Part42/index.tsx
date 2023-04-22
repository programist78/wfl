import AnimatedText from 'hooks/AnimatedText'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Part4.module.scss'
import AnimatedText2 from 'hooks/AnimatedText2'
import AnimatedText3 from 'hooks/AnimatedText3'

export default function Part42() {
    const [paragraph, setParagraph] = useState('1')
  return (
    <div className={styles.back}>
                <div className={styles.part1}>
           <p className={styles.sup_title}>
        <AnimatedText>Your funds and personal information secured stronger than a bank</AnimatedText></p>
        </div>
        <div className={styles.preback2}>
        <div className={styles.part2}>
            <div className={styles.titles}>
                {(paragraph == "1") &&
                 <>
                    <div>
                    <AnimatedText3>
                    <div className={styles.title_active}>
                    <p >Our philosophy</p>
                    </div>
                    <div className={styles.active_gold_back} />
                    </AnimatedText3>
                    </div>
                     <div>
                     <p className={styles.title} onClick={() => {setParagraph("2")}}>Security</p>
                     </div>
                     <div>
                     <p className={styles.title} onClick={() => {setParagraph("3")}}>Our protection</p>
                     </div>
                     <div>
                     <p className={styles.title} onClick={() => {setParagraph("4")}}>Our approach</p>
                     </div>
                     </>}
                     {(paragraph == "2") &&
                 <>
                    
                     <div>
                     <p className={styles.title} onClick={() => {setParagraph("1")}}>Our philosophy</p>
                     </div>
                     <div>
                     <AnimatedText3>
                     <div className={styles.title_active}>
                    <p >Security</p>
                    </div>
                    <div className={styles.active_gold_back} />
                    </AnimatedText3>
                    </div>
                    
                     <div>
                     <p className={styles.title} onClick={() => {setParagraph("3")}}>Our protection</p>
                     </div>
                     <div>
                     <p className={styles.title} onClick={() => {setParagraph("4")}}>Our approach</p>
                     </div>
                     </>}
                     {(paragraph == "3") &&
                 <>
                    
                   <div>
                     <p className={styles.title} onClick={() => {setParagraph("1")}}>Our philosophy</p>
                     </div>
                     <div>
                     <p className={styles.title} onClick={() => {setParagraph("2")}}>Security</p>
                     </div>
                     <div>
                         <AnimatedText3>
                     <div className={styles.title_active}>
                    <p>Our protection</p>
                    </div>
                    <div className={styles.active_gold_back} />
                    </AnimatedText3>
                    </div>
                     <div>
                     <p className={styles.title} onClick={() => {setParagraph("4")}}>Our approach</p>
                     </div>
                     </>}
                     {(paragraph == "4") &&
                 <>
                    
                     <div>
                     <p className={styles.title} onClick={() => {setParagraph("1")}}>Our philosophy</p>
                     </div>
                     <div>
                     <p className={styles.title} onClick={() => {setParagraph("2")}}>Security</p>
                     </div>
                     <div>
                     <p className={styles.title} onClick={() => {setParagraph("3")}}>Our protection</p>
                     </div>
                     <div>
                     <AnimatedText3>
                     <div className={styles.title_active}>
                    <p>Our approach</p>
                    </div>
                    <div className={styles.active_gold_back} />
                    </AnimatedText3>
                    </div>
                     </>}
                
            </div>
            <div className={styles.texts}>

                    <p className={(paragraph == "1") ? styles.text_active : styles.text}><AnimatedText2>We also require our users to use strong passwords and enable two-factor authentication to further protect their accounts.
<br />
Our goal is to keep your funds safe and easily accessible at your convenience. You can trust us to maintain the highest level of security standards, so you can focus on what really matters - growing your wealth.
</AnimatedText2>      </p>
            <p className={(paragraph == "2") ? styles.text_active : styles.text}><AnimatedText2>Wealth Free Life has implemented a 3-layer security system for our platform. This system combines an in-house proprietary profit-scoring methodology with WFL Coin and real-economy assets as collateral, as well as a WEB3 security module.
<br />
<br />
Wealth Free Life will implement a decentralized governance and operation model via our governance Coin WFL and gradually increase community involvement in the profitable process.</AnimatedText2></p>
<p className={(paragraph == "3") ? styles.text_active : styles.text}><AnimatedText2>Security is integrated into our coding lifecycle. Our software undergoes peer review and uses a combination of static and dynamic source code analysis tools.
<br />
<br />
We employ Multi-Factor Authentication (MFA) to secure transactions, which includes password, email, phone, and authentication verification.
<br />
<br />
We prioritize withdrawal protection by requiring external addresses to be whitelisted through email verification.
<br />
<br />
At Wealthfreelife.com, we are committed to helping you make the most Wealth of your experience.
<br />
<br />
Our goal is to keep your funds safe and easily accessible at your convenience. You can trust us to maintain the highest level of security standards, so you can focus on what really matters - growing your wealth.</AnimatedText2></p>
<p className={(paragraph == "4") ? styles.text_active : styles.text}><AnimatedText2>Wealth Free Life has implemented a 3-layer security system for our platform. This system combines an in-house proprietary profit-scoring methodology with WFL Coin and real-economy assets as collateral, as well as a WEB3 security module.
<br />
<br />
Wealth Free Life will implement a decentralized governance and operation model via our governance Coin WFL and gradually increase community involvement in the profitable process.
<br />
<br />
Security is integrated into our coding lifecycle. Our software undergoes peer review and uses a combination of static and dynamic source code analysis tools.
We employ Multi-Factor Authentication (MFA) to secure transactions, which includes password, email, phone, and authentication verification.
<br />
<br />
We prioritize withdrawal protection by requiring external addresses to be whitelisted through email verification.
<br />
<br />
WFL Blockchain is built on the same cryptographic technology as Ethereum. It uses a multi-signature approach, where 11 guardians independently verify each other's signatures. Because the Guardians operate in many different areas around the world, each region has its own security protocols that are difficult to breach.
<br />
<br />
We continually engage with industry leading security auditing firms to check our work. These audits help us ensure that what we do is secure and does not negatively affect users' privacy or financial well-being, but they also serve to provide transparency and confidence for users.</AnimatedText2></p>
           </div>

        </div>
        </div>
    </div>
  )
}
