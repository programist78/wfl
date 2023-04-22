
import { Canvas } from '@react-three/fiber';
import React, { useEffect, Suspense, useRef, memo, useState, useCallback } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh, MeshStandardMaterial } from 'three';
import { useAnimations } from '@react-three/drei';

const Planet1 = memo(({ containerSize }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, '/three/planet/scene.gltf');

  const { actions } = useAnimations(gltf.animations, ref);
  useEffect(() => {
    actions['Take 01'].play();
  }, [actions]);

  const memoizedCallback = useCallback(() => {
    const scale = containerSize < 768 ? 1.5 : 2.3;
    gltf.scene.scale.set(scale, scale, scale);
    gltf.scene.position.set(2, 0.1, -2);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material = new MeshStandardMaterial({ color: 'rgba(255, 255, 255, 1)' });
        object.material.transparent = true;
        object.material.opacity = 1;
      }
    });
  }, [gltf.scene, containerSize]);

  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);

  return <primitive object={gltf.scene} ref={ref} />;
});
const MemoizedPlanet1 = memo(Planet1);

export default function Scene1() {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const memoizedHandleResize = useCallback(() => {
    setContainerSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    memoizedHandleResize();
    window.addEventListener('resize', memoizedHandleResize);
    return () => window.removeEventListener('resize', memoizedHandleResize);
  }, [memoizedHandleResize]);

  return (
    <div style={{ height: '750px', width: '100vw', position: 'absolute', zIndex: '2', filter: 'blur(1px)'}} className="scene">
      <Canvas shadows style={{  background: 'none', height: '750px', width: '100vw' }}>
        <Suspense fallback={null}>
          <pointLight color="#26A69A" intensity={1} position={[-2, 15, 0]} />
          <MemoizedPlanet1 containerSize={containerSize.width} />
          <pointLight color="white" intensity={1} position={[-2, -15, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
