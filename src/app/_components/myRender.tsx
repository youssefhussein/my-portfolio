"use client";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, Camera } from "@react-three/fiber";

import { OrbitControls, SpotLight } from "@react-three/drei";
import { StrawHat } from "./Strawhat";

export default function MyRender() {
  const hatRef = useRef(null);

  return (
    <div className="h-40 w-40 bg-zinc-50">
      <Canvas className="bg-transparent">
        <Suspense fallback={null}>
         <ambientLight intensity={3} />
         <StrawHat />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
