import { useSpring, animated, useInView } from '@react-spring/web';

const AnimatedText2 = ({ children }) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 0,
        y: 25
      },
      to: {
        opacity: 1,
        x:0,
        delay: 250,
        y: 0
      }
    }),
    {
      once: true
    }
  )
  return (
    <animated.div style={springs} ref={ref}>
     {children}
    </animated.div>
  );
};

export default AnimatedText2;
