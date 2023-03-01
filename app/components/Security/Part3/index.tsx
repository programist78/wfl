import AnimatedText from 'hooks/AnimatedText'
import Image from 'next/image'
import styles from './Part3.module.scss'


export default function Part3() {
  return (
    <div className={styles.back}>
        <p className={styles.title}>
        {/* <AnimatedText> */}
            Why is it easy with us?     
            {/* </AnimatedText> */}
            </p>
        <div className={styles.part2}>
            <div className={styles.grid_group}>
                <div className={styles.grid1}>
                    <div className={styles.card1}>
                        <div className={styles.image_group}>
                            <Image width={50} height={50} src="/encoding.svg" alt="image"/>
                        </div>
                        <div className={styles.card_title}>ENCODING</div>
                        <div className={styles.card_text}>Encryption of sensitive data both in transit and at rest</div>
                    </div>
                </div>
                <div className={styles.grid2}>
                <div className={styles.card}>
                        <div className={styles.image_group}>
                            <Image width={50} height={50} src="/regulary.svg" alt="image"/>
                        </div>
                        <div className={styles.card_title}>REGULARY TESTMENT</div>
                        <div className={styles.card_text}>Regular security assessments and testing of our systems </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.image_group}>
                            <Image width={50} height={50} src="/modern.svg" alt="image"/>
                        </div>
                        <div className={styles.card_title}>MODERN TECHNOLOGIES</div>
                        <div className={styles.card_text}>Use of secure coding practices and frameworks</div>
                    </div>
                </div>
                <div className={styles.grid3}>
                <div className={styles.card}>
                        <div className={styles.image_group}>
                            <Image width={50} height={50} src="/against.svg" alt="image"/>
                        </div>
                        <div className={styles.card_title}>AGAINST HACKERS</div>
                        <div className={styles.card_text}>Implementation of firewalls and intrusion detection systems</div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.image_group}>
                            <Image width={50} height={50} src="/data.svg" alt="image"/>
                        </div>
                        <div className={styles.card_title}>DATA PROTECTION</div>
                        <div className={styles.card_text}>Regular backups and disaster recovery planning</div>
                    </div>
                </div>
                <div className={styles.grid4}>
                <div className={styles.card}>
                        <div className={styles.image_group}>
                            <Image width={50} height={50} src="/upgrading.svg" alt="image"/>
                        </div>
                        <div className={styles.card_title}>UPGRADING</div>
                        <div className={styles.card_text}>Continual monitoring and improvement of our security procedures</div>
                    </div>
                </div>
            </div>
            {/* <Image src="/" width={1150} height={1400} /> */}
        </div>
    </div>
  )
}
