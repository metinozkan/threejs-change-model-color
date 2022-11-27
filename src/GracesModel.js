/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: 3DLadnik (https://sketchfab.com/3DLadnik)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/3d-printable-the-three-graces-58e0ae19e2984b86883edc41bf43415a
title: 3D Printable The Three Graces
*/

import React, { useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useGLTF, Html } from "@react-three/drei";
import model from "./3d_printable_the_three_graces.glb";

export function Model(props) {
  const { nodes, materials } = useGLTF(model);
  const [color, setColor] = useState("#000000");

  return (
    <group {...props} dispose={null} rotation={[0, 0.8, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["Scene_-_Root"]}
          material-color={color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
      <Html position={[10, 10, 2.75]} scale={10} transform>
        <HexColorPicker className="picker" color={color} onChange={setColor} />
      </Html>
    </group>
  );
}

useGLTF.preload("/3d_printable_the_three_graces.glb");
