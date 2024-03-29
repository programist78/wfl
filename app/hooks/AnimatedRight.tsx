import { useSpring, animated, useInView } from '@react-spring/web';
import { NextPage } from 'next';

const AnimatedRight = ({ children }) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 250
      },
      to: {
        opacity: 1,
        delay: 250,
        x: 0
      }
    }),
    {
      rootMargin: '20% 0%',
      once: true
    }
  )
  return (
    <animated.div style={springs} ref={ref} >
     {children}
    </animated.div>
  );
};

export default AnimatedRight;
