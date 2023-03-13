import { useSpring, animated, useInView } from '@react-spring/web';
import { NextPage } from 'next';

const AnimatedOpacity = ({ children }) => {
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
        mixBlendMode: "normal"
      }
    }),
    {
      rootMargin: '-30% 0%',
      once: true
    }
  )
  return (
    <animated.div style={springs} ref={ref} >
     {children}
    </animated.div>
  );
};

export default AnimatedOpacity;
