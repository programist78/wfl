import Image from 'next/image'
import styles from './Part4.module.scss'
import AnimatedRoad from 'hooks/AnimatedRoad'
export default function Part4() {
  return (
    <div className={styles.back}>
        <p className={styles.title}>Our roadmap</p>
        <div className={styles.box}>
          <AnimatedRoad>
          <div className={styles.part}>
          <Image src="/road_2022.svg" width={273} height={273} alt='2022'/>
          <div className={styles.texts}>
            <p><span>Q1:</span>Concept development and architecture design</p>
            <p><span>Q2:</span>Prototype development and testing</p>
            <p><span>Q3:</span>Detailed planning and market research</p>
            <p><span>Q4:</span>Seed funding and team building</p>
          </div>
          </div>
          </AnimatedRoad>
          <AnimatedRoad>
          <div className={styles.part}>
          <Image src="/road_2023.svg" width={273} height={273} alt='2022'/>
          <div className={styles.texts}>
            <p><span>Q1:</span>Concept development and architecture design</p>
            <p><span>Q2:</span>Prototype development and testing</p>
            <p><span>Q3:</span>Detailed planning and market research</p>
            <p><span>Q4:</span>Seed funding and team building</p>
          </div>
          </div>
          </AnimatedRoad>
          <AnimatedRoad>
          <div className={styles.part}>
          <Image src="/road_2024.svg" width={273} height={273} alt='2022'/>
          <div className={styles.texts}>
            <p><span>Q1:</span>Concept development and architecture design</p>
            <p><span>Q2:</span>Prototype development and testing</p>
            <p><span>Q3:</span>Detailed planning and market research</p>
            <p><span>Q4:</span>Seed funding and team building</p>
          </div>
          </div>
          </AnimatedRoad>
          <AnimatedRoad>
          <div className={styles.part}>
          <Image src="/road_2025.svg" width={273} height={273} alt='2022'/>
          <div className={styles.texts}>
            <p><span>Q1:</span>Concept development and architecture design</p>
            <p><span>Q2:</span>Prototype development and testing</p>
            <p><span>Q3:</span>Detailed planning and market research</p>
            <p><span>Q4:</span>Seed funding and team building</p>
          </div>
          </div>
          </AnimatedRoad>
          <AnimatedRoad>
          <div className={styles.part}>
          <Image src="/road_2026.svg" width={273} height={273} alt='2022'/>
          <div className={styles.texts}>
            <p><span>Q1:</span>Concept development and architecture design</p>
            <p><span>Q2:</span>Prototype development and testing</p>
            <p><span>Q3:</span>Detailed planning and market research</p>
            <p><span>Q4:</span>Seed funding and team building</p>
          </div>
          </div>
          </AnimatedRoad>
        </div>
    </div>
  )
}
