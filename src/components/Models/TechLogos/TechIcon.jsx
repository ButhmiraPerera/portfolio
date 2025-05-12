import { useGLTF, Environment, OrbitControls, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import * as THREE from 'three';

const TechIcon = ({ model }) => {  // Receive model as prop
    const { scene } = useGLTF(model.modelPath);

    useEffect(() => {
        if(model.name === 'Interactive Developer') {
            scene.traverse((child) => {
                if(child.isMesh && child.name === 'object_5'){
                    child.material = new THREE.MeshStandardMaterial({ color: 'white' })
                }
            });
        }
    }, [model.name, scene]);  // Add dependencies

    return (
        <Canvas>
            <ambientLight intensity={0.3}/>  {/* Fixed typo */}
            <directionalLight position={[5, 5, 5]} intensity={1}/>
            <Environment preset="city"/>
            <OrbitControls enableZoom={false}/>

            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={scene}/>
                </group>
            </Float>
        </Canvas>
    );
}

export default TechIcon;