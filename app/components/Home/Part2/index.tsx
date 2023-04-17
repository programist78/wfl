import Image from 'next/image'
import styles from './Part2.module.scss'
import AnimatedText4 from 'hooks/AnimatedText4'

export default function Part2() {
  return (
    <div className={styles.back}>
      <AnimatedText4>
            <iframe width="1078" height="609" src="https://www.youtube.com/embed/byNNauAJrKI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={styles.video}></iframe>
            </AnimatedText4>
    </div>
  )
}
