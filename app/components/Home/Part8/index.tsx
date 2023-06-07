import AnimatedLeft from 'hooks/AnimatedLeft'
import styles from './Part8.module.scss'
import AnimatedRight from 'hooks/AnimatedRight'
import AnimatedText4 from 'hooks/AnimatedText4'
import { useQuery } from '@apollo/client'
import { GET_COUNT } from 'apollo/auth'
import { useEffect, useState } from 'react'

export default function Part8() {
  const [join, setJoin] = useState("")
  const {data, loading, error} = useQuery(GET_COUNT)
  useEffect(() => {
    setJoin(data?.getCount)
  }, [data?.getCount])
  
  return (
    <div className={styles.back}>
      <AnimatedLeft>
        <p className={styles.title}>Limited Time Offer</p>
        </AnimatedLeft>
        <AnimatedRight>
        <p className={styles.text}>Don't miss out on this exclusive opportunity to achieve financial freedom with recurring passive income. Join now and secure your spot as one of the first 1,000 members. Take control of your financial future and start your journey towards wealth and abundance today!</p>
        </AnimatedRight>
        <AnimatedText4>
        <div className={styles.box}>
            {/* <div className={styles.number}>903/1000</div> */}
            <div className={styles.number}>{join}/1000</div>
            <p className={styles.box_text}>have already joined</p>
        </div>
        <p className={styles.text2}>Claim your FREE account now and secure your spot on the early access waiting list. Don't miss out on this opportunity to change your life forever!</p>
        </AnimatedText4>
    </div>
  )
}
