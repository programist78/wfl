import { useSpring, animated, useInView } from '@react-spring/web';
import { NextPage } from 'next';

const AnimatedShield = ({ children }) => {
  const [ref, inView] = useInView({once:true}
    )
  // const [ props, api ] = useSpring(
  //   () => ({
  //     from: { opacity: 0, y: 25 },
  //     to: { opacity: 1, y:0 },
  //     config: { duration: 300 },
  //   })
  // );
  const { x } = useSpring({
    from: { x: 0, y: "-100px" },
    x: inView ? 1 : 0,
    config: { duration: 500, reset: false },
  })

  return (
    <animated.div ref={ref} id="animated-text" style={{
      opacity: x.to({ range: [0.5, 1], output: [0.3, 1] }),
      scale: x.to({
        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
        output: [1.1, 0.9, 1.1,1],
      }),
      marginTop: x.to({ range: [0, 1], output: ["0px", "0px"] }),
    }}>
     {children}
    </animated.div>
  );
};

export default AnimatedShield;
