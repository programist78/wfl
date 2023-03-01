import { useSpring, animated, useInView } from '@react-spring/web';

const AnimatedText2 = ({ children }) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0.3,
        x: 0,
      },
      to: {
        opacity: 1,
        x:0,
        delay: 100,
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
