import React, { useRef } from 'react';
import * as THREE from 'three';

const HeroLights = () => {
  // Create RectAreaLight instance
  const rectLight = useRef(new THREE.RectAreaLight('#A259FF', 15, 3, 2));
  rectLight.current.position.set(0, 1, 0);
  rectLight.current.rotation.set(-Math.PI/4, Math.PI/4, 0);

  // Create PointLight instances
  const pointLight1 = useRef(new THREE.PointLight('#7209b7', 10, 0, 2));
  pointLight1.current.position.set(0, 1, 0);
  
  const pointLight2 = useRef(new THREE.PointLight('#0d00a4', 10, 0, 2));
  pointLight2.current.position.set(1, 2, -2);

  return (
    <>
      {/* Main white spotlight */}
      <spotLight
        position={[2, 5, 6]}
        angle={0.15}
        intensity={100}
        penumbra={0.2}
        color="white"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Blue accent light */}
      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        intensity={40}
        penumbra={0.5}
        color="#4cc9f0"
      />

      {/* Purple accent light */}
      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        intensity={60}
        penumbra={1}
        color="#9d4edd"
      />

      {/* RectAreaLight */}
      <primitive object={rectLight.current} />
      
      {/* Point Lights */}
      <primitive object={pointLight1.current} />
      <primitive object={pointLight2.current} />
    </>
  );
};

export default HeroLights;