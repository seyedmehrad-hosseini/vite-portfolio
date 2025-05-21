

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Laboratory(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("models/laboratory.gltf");

  const texture = useTexture("textures/laboratory.jpg");
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="light" position={[3.26, 5.82, -4.5]} rotation={[0, -0.8, 0]}>
          <mesh name="Circle002" geometry={nodes.Circle002.geometry} material={textureMaterial} />
          <mesh name="Circle002_1" geometry={nodes.Circle002_1.geometry}  />
        </group>
        <group name="tools" position={[-1.7, 9.16, -0.01]} rotation={[0, -0.8, 0]}>
          <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={textureMaterial} />
          <mesh name="Cylinder001_1" geometry={nodes.Cylinder001_1.geometry} material={textureMaterial} />
        </group>
        <mesh
          name="capsole"
          geometry={nodes.capsole.geometry}
          material={materials.Material}
          position={[-1.7, 5.05, -0.01]}
          rotation={[0, -0.8, 0]}
        />
        <group name="monitors" position={[4.82, 2.08, 6.38]} rotation={[0, -0.8, 0]}>
          <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={textureMaterial} />
          <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={textureMaterial} />
        </group>
        <group name="table" position={[2.97, 1.46, 0.05]} rotation={[0, -0.8, 0]}>
          <mesh name="Cylinder007" geometry={nodes.Cylinder007.geometry} material={textureMaterial} />
          <mesh name="Cylinder007_1" geometry={nodes.Cylinder007_1.geometry} material={textureMaterial} />
        </group>
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={textureMaterial}
          position={[15.68, 0.21, 0.22]}
          rotation={[0, -0.8, 0]}
          scale={12.3}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/laboratory.gltf");
