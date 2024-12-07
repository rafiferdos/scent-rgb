"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Model } from "@/components/model";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Canvas>
        <Environment preset="studio" />
        <OrbitControls />
        <Model />
      </Canvas>
    </div>
  );
}
