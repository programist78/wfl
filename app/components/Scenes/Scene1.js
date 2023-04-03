import { Canvas } from '@react-three/fiber'
import React, { useEffect, Suspense, useRef, memo } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh, MathUtils } from 'three'
import {Environment,useAnimations,Html, Stars, useGLTF } from "@react-three/drei";

import HeroPage from './HeroPage'

const Big_Earth = memo(() => {
    const ref = useRef();
    const gltf = useLoader(
      GLTFLoader,
      // "/three/animation_earth/scene.gltf"
      "/three/Big_Earth/scene.gltf"
      // "/three/Poly_earth/scene.gltf"
      // "/three/Earth/scene.gltf"
    )

    // const { actions } = useAnimations(gltf.animations, ref)

    // console.log(actions)


      // useEffect(() => {
      //   console.log(actions)

      //   actions["Earth Turn"].play()
      //   return () => actions.Animation.stop()
      // }, [actions.Animation])


    useEffect(() => {
      gltf.scene.scale.set(.03,.03, .03)
      gltf.scene.position.set(2, 2, -1)
      gltf.scene.traverse((object) => {
        if (object instanceof Mesh) {
          // object.castShadow = true;
          // object.receiveShadow = true;
          object.material.envMapIntensity = 5
        }
      })
    }, [gltf])

    useFrame(() => {
        ref.current.rotation.y += 0.005;
      });
    
  return <primitive object={gltf.scene} ref={ref}/>
})
const Laptop = memo((props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/three/Laptop/mac-draco.glb')
    useFrame((state) => {
      const t = state.clock.getElapsedTime()
      group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
      group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1)
      group.current.rotation.z = MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
      group.current.position.y = MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1)
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
              <Html className="content" rotation-x={-Math.PI / 2} position={[-3, 0.65, -2]}  transform occlude>
                <div className="wrapper" >
                  {/* <HeroPage /> */}
                  <img src="/logo.svg"/>
                  <p>Wealth Freedom Life -  Only better techologies!</p>
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
  })
  


export default memo(function Scene1() {
  return (
    <div style={{height: "900px", width: "1440px", position: "absolute", zIndex: "5"}}>
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
    <pointLight color="yellow" intensity={1} position={[0, 0, 1]} /> 
    <Suspense fallback={null}>
    <group dispose={null} scale={0.35} position={[-3, 0.15, -1]} rotation-y={0.625}>
    <Laptop rotation={[0, Math.PI, 0]} />
    </group>
        <Environment preset="city" />
      <Big_Earth />
    </Suspense>
  </Canvas>
  </div>
  )
})