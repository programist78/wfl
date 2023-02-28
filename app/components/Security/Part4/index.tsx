import Image from 'next/image'
import styles from './Part4.module.scss'

export default function Part4() {
  return (
    <div className={styles.back}>
        <p className={styles.title}>Security is important for us</p>
        <div className={styles.part2}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <p>Our philosophy</p>
                </div>
                <div className={styles.content}>
                    <p>
                    We also require our users to use strong passwords and enable two-factor authentication to further protect their accounts.
<br />
Our goal is to keep your funds safe and easily accessible at your convenience. You can trust us to maintain the highest level of security standards, so you can focus on what really matters - growing your wealth.
                    </p>
                    <div className={styles.card_image}>
                        <Image src="/psichology.svg" width={150} height={150} alt="icon"/>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.header}>
                    <p>Security</p>
                </div>
                <div className={styles.content}>
                    <p>Wealth Free Life has implemented a 3-layer security system for our platform. This system combines an in-house proprietary profit-scoring methodology with WFL Coin and real-economy assets as collateral, as well as a WEB3 security module.
<br />
<br />
Wealth Free Life will implement a decentralized governance and operation model via our governance Coin WFL and gradually increase community involvement in the profitable process.</p>
                    <div className={styles.card_image}>
                        <Image src="/security.svg" width={150} height={150} alt="icon"/>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.header}>
                    <p>Our protection</p>
                </div>
                <div className={styles.content}>
                    <p>Security is integrated into our coding lifecycle. Our software undergoes peer review and uses a combination of static and dynamic source code analysis tools.
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
Our goal is to keep your funds safe and easily accessible at your convenience. You can trust us to maintain the highest level of security standards, so you can focus on what really matters - growing your wealth.</p>
                    <div className={styles.card_image}>
                        <Image src="/protection.svg" width={150} height={150} alt="icon"/>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.header}>
                    <p>Our approach</p>
                </div>
                <div className={styles.content2}>
                    <p>Wealth Free Life has implemented a 3-layer security system for our platform. This system combines an in-house proprietary profit-scoring methodology with WFL Coin and real-economy assets as collateral, as well as a WEB3 security module.
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
We continually engage with industry leading security auditing firms to check our work. These audits help us ensure that what we do is secure and does not negatively affect users' privacy or financial well-being, but they also serve to provide transparency and confidence for users.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
