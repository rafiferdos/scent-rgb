/* eslint-disable react/no-unknown-property */
"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import { PlaneGeometry } from "three";

import { Model } from "@/components/model";

// Extend the THREE namespace to include PlaneGeometry
extend({ PlaneGeometry });

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Canvas shadows>
        <Environment preset="studio" />
        <OrbitControls />
        <directionalLight
          castShadow
          intensity={1}
          position={[5, 5, 5]}
          shadow-camera-bottom={-10}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-mapSize-height={1024}
          shadow-mapSize-width={1024}
        />
        <Model />
        <mesh
          receiveShadow
          position={[0, -1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[100, 100]} attach="geometry" />
          <shadowMaterial attach="material" opacity={0.5} />
        </mesh>
      </Canvas>
    </div>
  );
}
