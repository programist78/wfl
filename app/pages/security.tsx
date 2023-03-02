import Part1 from 'components/Security/Part1'
import Part2 from 'components/Security/Part2'
import Part3 from 'components/Security/Part3'
import Part4 from 'components/Security/Part4'
import Part42 from 'components/Security/Part42'
import styles from '../styles/security.module.scss'

export default function Security() {
  return (
    <>
    <div className={styles.back}>
        <Part1 />
    </div>
    {/* <div className={styles.back}> */}
        <Part2 />
    {/* </div> */}
    <div className={styles.back}>
        <Part3 />
    </div>
    {/* <div className={styles.back1}> */}
      <Part42 />
    {/* </div>     */}
    </>
  )
}
