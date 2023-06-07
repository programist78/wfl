import { useSpring, animated, useInView } from '@react-spring/web';
import { NextPage } from 'next';

const AnimatedRoad  = ({ children }) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0.25,
        x: -250
      },
      to: {
        opacity: 1,
        delay: 200,
        x: 0
      }
    }),
    {
      rootMargin: '-30% 0%',
      once: false
    }
  )
  return (
    <animated.div style={springs} ref={ref} >
     {children}
    </animated.div>
  );
};

export default AnimatedRoad;
