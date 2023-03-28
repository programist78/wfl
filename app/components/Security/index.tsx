import Part1 from 'components/Security/Part1'
import Part2 from 'components/Security/Part2'
import Part3 from 'components/Security/Part3'
import Part42 from 'components/Security/Part42'
import AnimatedOpacity from 'hooks/AnimatedOpacity'
import Image from 'next/image'
import styles from './Security.module.scss'
import { animated, useInView } from '@react-spring/web';

export default function SecurityCom() {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 250,
        mixBlendMode: "hard-light"
      },
      to: {
        opacity: 1,
        delay: 250,
        y: 0,
        mixBlendMode: "hard-light"
      }
    }),
    {
      rootMargin: '-30% 0%',
      once: true
    }
  )
  return (
    <>
    <div className={styles.back}>
      <AnimatedOpacity>
        <Part1 />
        </AnimatedOpacity>
    </div>
    <AnimatedOpacity>
    <div className={styles.back}>
    <Image src="/Vector5.svg" width={240} height={240} alt="line" className={styles.arrow_custom}/>
    <Image src="/Vector6.svg" width={90} height={90} alt="line" className={styles.lines_custom}/>
    </div>
    <Part2 />
    </AnimatedOpacity>
    <div className={styles.back}>
    </div>
    <animated.div style={springs} ref={ref} >
    <div className={styles.back}>
        <Part3 />
    </div>
    </animated.div>
    <AnimatedOpacity>
      <Part42 />
      </AnimatedOpacity>
    </>
  )
}
