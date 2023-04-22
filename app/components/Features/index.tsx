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
import AnimatedOpacity from 'hooks/AnimatedOpacity'

export default function FeaturesCom() {
  return (
    <div className={styles.back}>
         <Part1 />
      <AnimatedOpacity>
      {/* <Part2 /> */}
      </AnimatedOpacity>
      <AnimatedOpacity>
      <p className={styles.title}>Our approach</p>
      </AnimatedOpacity>
      <AnimatedOpacity>
      <Part3 />
      </AnimatedOpacity>
      <Part4 />
      <AnimatedOpacity>
      <p className={styles.title}>Capabilities</p>
      </AnimatedOpacity>
      <AnimatedOpacity>
      <Part5 />
      </AnimatedOpacity>
      <AnimatedOpacity>
      <Part6 />
      </AnimatedOpacity>
      <Part7 />
      <AnimatedOpacity>
      <p className={styles.title}>Earnings</p>
      </AnimatedOpacity>
      <AnimatedOpacity>
      <Part8 />
      </AnimatedOpacity>
      <AnimatedOpacity>
      <Part9 />
      </AnimatedOpacity>
      <AnimatedOpacity>
      <Part10 />
      </AnimatedOpacity>
      <Part11 />
    </div>
  )
}
