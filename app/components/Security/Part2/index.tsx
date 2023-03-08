import AnimatedShield from 'hooks/AnimatedShield'
import styles from './Part2.module.scss'

export default function Part2() {
  return (
    <div className={styles.preback}>
        <AnimatedShield>
    <div className={styles.back}>
        <div className={styles.part1}>
            <iframe width="1078" height="609" src="https://www.youtube.com/embed/byNNauAJrKI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={styles.video}></iframe>
        </div>
    </div>
    </AnimatedShield>
    </div>
  )
}

