import { useSpring, animated, useInView } from '@react-spring/web';

const AnimatedText3 = ({ children }) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        x: 0,
        y: 25,
        opacity: 0
      },
      to: {
        x:0,
        delay: 50,
        opacity: 1,
        y: 0,
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

export default AnimatedText3;
