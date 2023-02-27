import Part1 from 'components/Security/Part1'
import Part2 from 'components/Security/Part2'
import styles from '../styles/security.module.scss'

export default function Security() {
  return (
    <div className={styles.back}>
        <Part1 />
        <Part2 />
    </div>
  )
}
