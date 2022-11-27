import * as THREE from "three";
import { useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  Center,
  PresentationControls,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { RGBELoader } from "three-stdlib";
import { Model } from "./GracesModel";

export default function App() {
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr"
  );
  texture.mapping = THREE.EquirectangularReflectionMapping;
  return (
    <Canvas
      shadows
      camera={{ position: [10, 1, 10], fov: 40, near: 1, far: 30 }}
    >
      <color attach="background" args={["#f0f0f0"]} />
      <ambientLight />
      <Environment map={texture} />
      <PresentationControls
        global
        config={{ mass: 1, tension: 250, friction: 25 }}
        snap={{ mass: 2, tension: 250, friction: 50 }}
        zoom={1.25}
        // rotation={[0, 0.8, 0]}
        polar={[-Math.PI / 5, Math.PI / 4]}
        azimuth={[-Math.PI / 1.75, Math.PI / 4]}
      >
        <group position={[0, -3, 0]}>
          <Center top>
            <Model scale={0.05} />
          </Center>
          <AccumulativeShadows
            temporal
            frames={100}
            alphaTest={0.95}
            opacity={1}
            scale={20}
          >
            <RandomizedLight
              amount={8}
              radius={10}
              ambient={0.5}
              position={[0, 10, -2.5]}
              bias={0.001}
              size={3}
            />
          </AccumulativeShadows>
        </group>
      </PresentationControls>
      <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={0.85} levels={9} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
