import { Canvas } from '@react-three/fiber'
import React, { useEffect, Suspense, useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh,MeshStandardMaterial } from 'three'
import { OrbitControls, PerspectiveCamera, CubeCamera, Environment,useAnimations } from "@react-three/drei";
import { Bloom, ChromaticAberration, DepthOfField, EffectComposer} from "@react-three/postprocessing"
import {BlendFunction} from "postprocessing"

function Planet1() {
    const ref = useRef();
    const gltf = useLoader(
      GLTFLoader,
      "/three/Planet1/scene.gltf"
    )


    useEffect(() => {
      gltf.scene.scale.set(1, 1, 1)
      gltf.scene.position.set(3, 0, 0)
      gltf.scene.traverse((object) => {
        if (object instanceof Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
          object.material.envMapIntensity = 20
        }
      })
    }, [gltf])

    useFrame(() => {
        ref.current.rotation.y += 0.01;
        // ref.current.rotation.z += 0.01;
        ref.current.position.y += 0.01
        ref.current.position.y -= 0.01
      });
    
    
  return <primitive object={gltf.scene} ref={ref}/>
}

function Mars() {
    const ref = useRef();
    const gltf = useLoader(
      GLTFLoader,
      "/three/Mars/scene.gltf"
    )


    useEffect(() => {
      gltf.scene.scale.set(.6, .6, .6)
      gltf.scene.position.set(-2, 0, 0)
      gltf.scene.traverse((object) => {
        if (object instanceof Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
          object.material.envMapIntensity = 20
        }
      })
    }, [gltf])

    useFrame(() => {
        ref.current.rotation.y += 0.01;
        // ref.current.rotation.z += 0.01;
        ref.current.position.y += 0.01
        ref.current.position.y -= 0.01
      });
    
    
  return <primitive object={gltf.scene} ref={ref}/>
}

function Moon() {
    const ref = useRef();
    const gltf = useLoader(
      GLTFLoader,
      "/three/Moon/scene.gltf"
    )


    useEffect(() => {
      gltf.scene.scale.set(.1, .1, .1)
      gltf.scene.position.set(-3, 0, 0)
      gltf.scene.traverse((object) => {
        if (object instanceof Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
          object.material.envMapIntensity = 20
          object.material = new MeshStandardMaterial({ color: 0x000000 });

        }
      })
    }, [gltf])

    useFrame(() => {
        ref.current.rotation.y += 0.01;
      });
    
    
  return <primitive object={gltf.scene} ref={ref}/>
}


function Planet2() {
    const ref = useRef();
    const gltf = useLoader(
      GLTFLoader,
      "/three/Planet2/scene.gltf"
    )

    const { actions } = useAnimations(gltf.animations, ref)

    console.log(actions)

    useEffect(() => {
      gltf.scene.scale.set(1, 1, 1)
      gltf.scene.position.set(-3, 0, 0)
      gltf.scene.traverse((object) => {
        if (object instanceof Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
          object.material.envMapIntensity = 20
        }
      })
    }, [gltf])

    useFrame(() => {
        ref.current.rotation.y += 0.01;
      });

    //   useEffect(() => {
    //     console.log(actions)
    //     actions.Animation.play()
    //     return () => actions.Animation.stop()
    //   }, [actions.Animation])
    
  return <primitive object={gltf.scene} ref={ref}/>
}


function Astronaut() {
    const ref = useRef();
    const [time, setTime] = useState(0);
    const [amplitude, setAmplitude] = useState(0.2);
    const [frequency, setFrequency] = useState(1);
    const gltf = useLoader(GLTFLoader, "/three/Astronaut/scene.gltf");
  
    const { actions } = useAnimations(gltf.animations, ref);
  
    useEffect(() => {
      gltf.scene.scale.set(0.2, 0.2, 0.2);
      gltf.scene.position.set(-3, 0, 0);
  
      gltf.scene.traverse((object) => {
        if (object instanceof Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
          object.material = new MeshStandardMaterial({ color: 0x000000 });
          object.material.envMapIntensity = 100;
        }
      });
    }, [gltf]);
  
    useFrame((state, delta) => {
      setTime((time) => time + delta);
  
      // рассчитываем новый угол поворота на каждый кадр
      const rotationSpeed = 0.01;
      ref.current.rotateY(rotationSpeed);
  
      const radius = 1;
      const speed = 0.1;
      const x = radius * Math.sin(time * speed);
      const z = radius * Math.cos(time * speed);
  
      ref.current.position.set(x, 0, z);
    });
  
    return <primitive object={gltf.scene} ref={ref} />;
  }
  


export default function Scene1() {
  return (
    <div style={{height: "100vh", width: "100vw", position: "absolute", zIndex: "500"}}>
    <Canvas shadows >
    <ambientLight intensity={1} />
    <Suspense fallback={null}>
        <Mars />
      {/* <AnotherModel scroll={scroll} />
      <Environment preset="city" /> */}
      <Planet1 />
      {/* <Moon /> */}
      <Astronaut />
      {/* <Planet2 /> */}
      {/* <OrbitControls /> */}
      <EffectComposer>
            {/* <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480}/> */}
            <Bloom 
                blendFunction={BlendFunction.ADD}
                intensity={1.1}
                width={300}
                height={300}
                kernelSize={5}
                luminanceThreshold={0.5}    
                luminanceSmoothing={0.025}    
            />
            {/* <ChromaticAberration
                 blendFunction={BlendFunction.NORMAL}
                 offset={[0.0005, 0.0012]}
            /> */}
        </EffectComposer>
    </Suspense>
  </Canvas>
  </div>
  )
}
