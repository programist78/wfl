import styles from './Features.module.scss'
import Part1 from './Part1'
import Part10 from './Part10'
import Part11 from './Part11'
import Part2 from './Part2'
import Part3 from './Part3'
import Part4 from './Part4'
import Part5 from './Part5'
import Part6 from './Part6'
import Part7 from './Part7'
import Part8 from './Part8'
import Part9 from './Part9'

export default function FeaturesCom() {
  return (
    <div className={styles.back}>
      <Part1 />
      <Part2 />
      <p className={styles.title}>Our approach</p>
      <Part3 />
      {/* <Part4 /> */}
      <p className={styles.title}>Capabilities</p>
      <Part5 />
      <Part6 />
      <Part7 />
      <p className={styles.title}>Earnings</p>
      {/* <Part8 /> */}
      {/* <Part9 /> */}
      <Part10 />
      <Part11 />
    </div>
  )
}
