import { useSpring, animated, useInView } from '@react-spring/web';
import styles from '../styles/animations.module.scss'
const AnimatedText21 = ({ children }) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        // opacity: 0,
        x: 0,
        y: 25,
        word: "150%",
      },
      to: {
        opacity: 1,
        x:0,
        // delay: 250,
        y: 0,
      }
    }),
    {
      // once: true
    }
  )
  return (
    <animated.div style={springs} ref={ref} className={styles.animation_text2}>
     {children}
    </animated.div>
  );
};

export default AnimatedText21;
