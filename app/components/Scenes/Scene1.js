import { Canvas } from '@react-three/fiber'
import React, { useEffect, Suspense, useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh,MeshStandardMaterial } from 'three'
import { OrbitControls, PerspectiveCamera, CubeCamera, Environment,useAnimations,Html, Stars, useGLTF } from "@react-three/drei";
import { Bloom, ChromaticAberration, DepthOfField, EffectComposer} from "@react-three/postprocessing"
import {BlendFunction} from "postprocessing"
import * as THREE from 'three'

import HeroPage from './HeroPage'
function Planet1() {
    const ref = useRef();
    const gltf = useLoader(
      GLTFLoader,
      "/three/Planet1/scene.gltf"
    )


    useEffect(() => {
      gltf.scene.scale.set(1, 1, 1)
      gltf.scene.position.set(-5, 0, -2)
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


function Big_Earth() {
    const ref = useRef();
    const gltf = useLoader(
      GLTFLoader,
      "/three/Big_Earth/scene.gltf"
    )

    const { actions } = useAnimations(gltf.animations, ref)

    console.log(actions)

    useEffect(() => {
      gltf.scene.scale.set(0.025, 0.025, 0.025)
      gltf.scene.position.set(4, -0.5, -1)
      gltf.scene.traverse((object) => {
        if (object instanceof Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
          object.material.envMapIntensity = 20
        }
      })
    }, [gltf])

    useFrame(() => {
        ref.current.rotation.y += 0.005;
      });

    //   useEffect(() => {
    //     console.log(actions)
    //     actions.Animation.play()
    //     return () => actions.Animation.stop()
    //   }, [actions.Animation])
    
  return <primitive object={gltf.scene} ref={ref}/>
}
function Rocket() {
  const ref = useRef();
  const gltf = useLoader(
    GLTFLoader,
    "/three/Rocket/scene.gltf"
  )
  const [time, setTime] = useState(0);

  const { actions } = useAnimations(gltf.animations, ref);

  useEffect(() => {
    gltf.scene.scale.set(0.01, 0.01, 0.01)
    gltf.scene.position.set(0, -2.5, -1)
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20
      }
    })
  }, [gltf])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Изменяем время каждую секунду
    if (Math.floor(t) !== Math.floor(time)) {
      setTime(t);
      // Перемещаем ракету вперед или назад
      if (Math.floor(t) % 2 === 0) {
        ref.current.translateZ(-2);
      } else {
        ref.current.translateZ(2);
      }
      // Поворачиваем ракету в разные стороны
      if (Math.floor(t) % 4 === 0) {
        ref.current.rotateY(Math.PI / 2);
      } else if (Math.floor(t) % 4 === 2) {
        ref.current.rotateY(-Math.PI / 2);
      }
    }
  });

  return <primitive object={gltf.scene} ref={ref} />;
}



function Astronaut2() {
    const ref = useRef();
    const [time, setTime] = useState(0);
    const [amplitude, setAmplitude] = useState(0.2);
    const [frequency, setFrequency] = useState(1);
    const gltf = useLoader(GLTFLoader, "/three/Astronaut2/scene.gltf");
  
    const { actions } = useAnimations(gltf.animations, ref);
  
    useEffect(() => {
      gltf.scene.scale.set(0.4, 0.4, 0.4 );
      gltf.scene.position.set(-5, 0, 5);
  
      gltf.scene.traverse((object) => {
        if (object instanceof Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
          // object.material = new MeshStandardMaterial({ color: 0x000000 });
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
      const y = radius * Math.sin(time * speed);
      const z = radius * Math.cos(time * speed);
  
      ref.current.position.set(x, y, z);
    });
  
    return <primitive object={gltf.scene} ref={ref} />;
  }

  function Laptop(props) {
    const group = useRef()
    // Load model
    const { nodes, materials } = useGLTF('/three/Laptop/mac-draco.glb')
    // Make it float
    useFrame((state) => {
      const t = state.clock.getElapsedTime()
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1)
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1)
    })

    // group.current.rotation.y = Math.PI
    // The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx
    return (
      <group ref={group} {...props} dispose={null}>
        <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
          <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
            <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
            <mesh geometry={nodes['Cube008_2'].geometry}>
              {/* Drei's HTML component can "hide behind" canvas geometry */}
              <Html className="content" rotation-x={-Math.PI / 2} position={[0, 0.05, -0.09]} transform occlude>
                <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                  <HeroPage />
                </div>
              </Html>
            </mesh>
          </group>
        </group>
        <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
        <group position={[0, -0.1, 3.39]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
          <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
        </group>
        <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
      </group>
    )
  }
  


export default function Scene1() {
  return (
    <div style={{height: "80vh", width: "100vw", position: "absolute", zIndex: "5"}}>
    <Canvas shadows >
    <Stars
      radius={500}
      depth={10}
      count={10000}
      factor={4}
      opacity={1}
      size={1}
      spread={1000}
      randomness={0.5}
      color="#000"
      fading={true}
      noise={null}
      title="My 3D Scene"
      description="This is my awesome 3D scene"
    />
    <pointLight color="#ffffff" intensity={1} position={[0, 10, -1]} /> 
    {/* <ambientLight intensity={1} /> */}
    <Suspense fallback={null}>
    <group dispose={null} scale={0.5}>
    <Laptop rotation={[0, Math.PI, 0]} position={[-6, -2, -2]}/>
    </group>
        <Environment preset="city" />
        {/* <Mars /> */}
      {/* <AnotherModel scroll={scroll} />
      <Environment preset="city" /> */}
      <Planet1 />
      {/* <Rocket /> */}
      {/* <Moon /> */}
      {/* <Astronaut2 /> */}
      <Big_Earth />
      {/* <Planet2 /> */}
      {/* <OrbitControls /> */}
      {/* <EffectComposer>
            <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480}/>
            <Bloom 
                blendFunction={BlendFunction.ADD}
                intensity={1.1}
                width={300}
                height={300}
                kernelSize={5}
                luminanceThreshold={0.5}    
                luminanceSmoothing={0.025}    
            />
            <ChromaticAberration
                 blendFunction={BlendFunction.NORMAL}
                 offset={[0.0005, 0.0012]}
            />
        </EffectComposer> */}
    </Suspense>
  </Canvas>
  </div>
  )
}
