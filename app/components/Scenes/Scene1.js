import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef, memo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'
import { Environment, Html, useGLTF } from "@react-three/drei";
import Image from 'next/image'

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

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
                <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
                    <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
                    <mesh geometry={nodes['Cube008_2'].geometry}>
                        <Html className="content" rotation-x={-Math.PI / 2} position={[-3, 0.65, -2]} transform occlude>
                            <div className="wrapper">
                                <Image src="/logo.svg" alt="*" width={150} height={150} />
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

const Scene1 = memo(() => {
    return (
        <div style={{ height: "900px", width: "1440px", position: "absolute", zIndex: "5", opacity: "1" }}>
            <Canvas shadows>
                <pointLight color="yellow" intensity={1} position={[0, 0, 1]} />
                <Suspense fallback={null}>
                    <group dispose={null} scale={0.4} position={[-1, 0.5, -1]} rotation-y={0.425}>
                        <Laptop rotation={[0, Math.PI, 0]} />
                    </group>
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    )
})

export default Scene1
