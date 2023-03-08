import Part1 from 'components/Security/Part1'
import Part2 from 'components/Security/Part2'
import Part3 from 'components/Security/Part3'
import Part4 from 'components/Security/Part4'
import Part42 from 'components/Security/Part42'
import Image from 'next/image'
import styles from '../styles/security.module.scss'

export default function Security() {
  return (
    <>
    <div className={styles.back}>
        <Part1 />
    </div>
    <div className={styles.back}>
    <Image src="/Vector5.svg" width={240} height={240} alt="line" className={styles.arrow_custom}/>
    <Image src="/Vector6.svg" width={90} height={90} alt="line" className={styles.lines_custom}/>
    </div>
    <Part2 />
    <div className={styles.back}>
    <Image src="/Vector32.svg" width={1440} height={2700} alt="line" className={styles.lines}/>
    </div>
    <div className={styles.back}>
        <Part3 />
    </div>
    {/* <div className={styles.back1}> */}
      <Part42 />
    {/* </div>     */}
    </>
  )
}
