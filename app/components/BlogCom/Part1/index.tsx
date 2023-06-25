import { useEffect, useState } from 'react'
import styles from './Part1.module.scss'

interface LastPost {
  images: string[]
  title: string
  text: string
}

interface Props {
  lastpost: LastPost
}

export default function Part1({ lastpost }: Props) {
  const [lastPostArray, setLastPostArray] = useState<LastPost>(lastpost)
  useEffect(() => {
    setLastPostArray(lastpost)
  }, [lastpost])
  return (
    <div className={styles.preback}>
      <div className={styles.back}>
        <div className={styles.part1}>
          <div className={styles.onhover}>Read more</div>
          <img
            src={lastPostArray?.images[0]}
            alt="Last post"
            className={styles.last_post}
          />
          <div className={styles.color_back} />
          <div className={styles.info}>
            <p className={styles.info_title}>{lastPostArray.title}</p>
            <p className={styles.info_text}>{lastPostArray.text}</p>
          </div>
        </div>
        <div className={styles.part2}>
          <p className={styles.title}>
            Wealth Free Life <span>Blog</span>
          </p>
          <p className={styles.text}>
            Here, we strive to provide you with insightful and informative
            content that will help you learn something new and, most
            importantly, useful.
          </p>
        </div>
      </div>
    </div>
  )
}
