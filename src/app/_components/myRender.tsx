"use client";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { CameraControls, FlyControls, OrbitControls, Text } from "@react-three/drei";

import { StrawHat } from "./Strawhat";
export default function MyRender() {
  const hatRef = useRef(null);
  const canvas = useRef(null);

  return (
    <div className="h-96 w-96">
      <Canvas
        className="bg-transparent"
        gl={{ alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0); // Set background color to transparent
        }}
        ref={canvas}
      >
       
          <CameraControls makeDefault />
          <Suspense fallback={null}>
            <ambientLight intensity={5} />

            <StrawHat ref={hatRef} />
            <OrbitControls />
          </Suspense>
          <Text color="white" anchorX={1} anchorY={0} position={[0, 1, 3]}>
            hello world!
          </Text>
        
      </Canvas>
    </div>
  );
}
