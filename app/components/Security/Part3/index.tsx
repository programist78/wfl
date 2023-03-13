import AnimatedShield from 'hooks/AnimatedShield'
import AnimatedText4 from 'hooks/AnimatedText4'
import Image from 'next/image'
import styles from './Part3.module.scss'


export default function Part3() {
  return (
    <div className={styles.back}>
        <p className={styles.title}>
        {/* <AnimatedShield> */}
            Why is it easy with us?     
            {/* </AnimatedShield> */}
            </p>
        <div className={styles.part2}>
            <div className={styles.grid_group}>
                <div className={styles.grid1}>
                    <AnimatedText4>
                    <div className={styles.card1}>
                        <div className={styles.image_group}>
                            <Image width={50} height={50} src="/encoding.svg" alt="image"/>
                        </div>
                        <div className={styles.card_title}>ENCODING</div>
                        <div className={styles.card_text}>Encryption of sensitive data both in transit and at rest</div>
                    </div>
                    </AnimatedText4>
                </div>
                <div className={styles.grid2}>
                <AnimatedText4>
                <div className={styles.card}>
                        <div className={styles.image_group}>
                            <Image width={50} height={50} src="/regulary.svg" alt="image"/>
                        </div>
                        <div className={styles.card_title}>REGULARY TESTMENT</div>
                        <div className={styles.card_text}>Regular security assessments and testing of our systems </div>
                    </div>
                    </AnimatedText4>
                    <AnimatedText4>
                    <div className={styles.card}>
                        <div className={styles.image_group}>
                            <Image width={50} height={50} src="/modern.svg" alt="image"/>
                        </div>
                        <div className={styles.card_title}>MODERN TECHNOLOGIES</div>
                        <div className={styles.card_text}>Use of secure coding practices and frameworks</div>
                    </div>
                    </AnimatedText4>
                </div>
                <div className={styles.grid3}>
                <AnimatedText4>
                <div className={styles.card}>
                        <div className={styles.image_group}>
                            <Image width={50} height={50} src="/against.svg" alt="image"/>
                        </div>
                        <div className={styles.card_title}>AGAINST HACKERS</div>
                        <div className={styles.card_text}>Implementation of firewalls and intrusion detection systems</div>
                    </div>
                    </AnimatedText4>
                    <AnimatedText4>
                    <div className={styles.card}>
                        <div className={styles.image_group}>
                            <Image width={50} height={50} src="/data.svg" alt="image"/>
                        </div>
                        <div className={styles.card_title}>DATA PROTECTION</div>
                        <div className={styles.card_text}>Regular backups and disaster recovery planning</div>
                    </div>
                    </AnimatedText4>
                </div>
                <div className={styles.grid4}>
                <AnimatedText4>
                <div className={styles.card}>
                        <div className={styles.image_group}>
                            <Image width={50} height={50} src="/upgrading.svg" alt="image"/>
                        </div>
                        <div className={styles.card_title}>UPGRADING</div>
                        <div className={styles.card_text}>Continual monitoring and improvement of our security procedures</div>
                    </div>
                </AnimatedText4>
                </div>
            </div>
            {/* <Image src="/" width={1150} height={1400} /> */}
        </div>
    </div>
  )
}
