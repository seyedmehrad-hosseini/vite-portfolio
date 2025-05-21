

import React, { useRef } from "react";
import { useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";
export default function Office(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("models/office.gltf");
  const texture = useTexture("textures/officeTexture.jpg");
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });

  const textureVSCode = useVideoTexture("textures/vscode.mp4");
  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: textureVSCode,
    transparent: true,
    opacity: 0.9,
  });
  const textureFigma = useVideoTexture("textures/figma.mp4");
  const textureGlassMaterialFigma = new THREE.MeshStandardMaterial({
    map: textureFigma,
    transparent: true,
    opacity: 2,
  });

  const textureBlender = useVideoTexture("textures/blender.mp4");
  const textureGlassMaterialBlender = new THREE.MeshStandardMaterial({
    map: textureBlender,
    transparent: true,
    opacity: 0.9,
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Wall" position={[0.32, 0.01, 0]} scale={[0.94, 1, 1]}>
          <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={textureMaterial} />
          <mesh name="Plane002_1" geometry={nodes.Plane002_1.geometry} material={textureMaterial} />
        </group>
        <mesh
          name="NurbsPath"
          geometry={nodes.NurbsPath.geometry}
          material={textureMaterial}
          position={[1.66, -1.98, 0.61]}
          rotation={[0, Math.PI / 2, 0]}
          scale={4.35}
        />
        <group name="keyboard" position={[1.66, -0.06, -2.45]} rotation={[0, Math.PI / 2, 0]} scale={1.83}>
          <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={textureMaterial} />
          <mesh name="Cylinder002_1" geometry={nodes.Cylinder002_1.geometry} material={textureMaterial} />
          <mesh name="Cylinder002_2" geometry={nodes.Cylinder002_2.geometry} material={textureMaterial} />
          <mesh name="Cylinder002_3" geometry={nodes.Cylinder002_3.geometry} material={textureMaterial} />
        </group>
        <group name="boxs" position={[3.24, -0.06, -2.45]} rotation={[0, Math.PI / 2, 0]} scale={1.83}>
          <mesh name="Cube018" geometry={nodes.Cube018.geometry} material={textureMaterial} />
          <mesh name="Cube018_1" geometry={nodes.Cube018_1.geometry} material={textureMaterial} />
          <mesh name="Cube018_2" geometry={nodes.Cube018_2.geometry} material={textureMaterial} />
          <mesh name="Cube018_3" geometry={nodes.Cube018_3.geometry} material={textureMaterial} />
          <mesh name="Cube018_4" geometry={nodes.Cube018_4.geometry} material={textureMaterial} />
          <mesh name="Cube018_5" geometry={nodes.Cube018_5.geometry} material={textureMaterial} />
          <mesh name="Cube018_6" geometry={nodes.Cube018_6.geometry} material={textureMaterial} />
          <mesh name="Cube018_7" geometry={nodes.Cube018_7.geometry} material={textureMaterial} />
          <mesh name="Cube018_8" geometry={nodes.Cube018_8.geometry} material={textureMaterial} />
        </group>
        <group name="sofa" position={[3.28, -0.06, -2.45]} rotation={[0, Math.PI / 2, 0]} scale={1.83}>
          <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={textureMaterial} />
          <mesh name="Cube010_1" geometry={nodes.Cube010_1.geometry} material={textureMaterial} />
          <mesh name="Cube010_2" geometry={nodes.Cube010_2.geometry} material={textureMaterial} />
          <mesh name="Cube010_3" geometry={nodes.Cube010_3.geometry} material={textureMaterial} />
          <mesh name="Cube010_4" geometry={nodes.Cube010_4.geometry} material={textureMaterial} />
          <mesh name="Cube010_5" geometry={nodes.Cube010_5.geometry} material={textureMaterial} />
          <mesh name="Cube010_6" geometry={nodes.Cube010_6.geometry} material={textureMaterial} />
          <mesh name="Cube010_7" geometry={nodes.Cube010_7.geometry} material={textureMaterial} />
          <mesh name="Cube010_8" geometry={nodes.Cube010_8.geometry} material={textureMaterial} />
          <mesh name="Cube010_9" geometry={nodes.Cube010_9.geometry} material={textureMaterial} />
          <mesh name="Cube010_10" geometry={nodes.Cube010_10.geometry} material={textureMaterial} />
          <mesh name="Cube010_11" geometry={nodes.Cube010_11.geometry} material={textureMaterial} />
        </group>
        <group name="monitorNoTexture" position={[1.66, -0.06, -2.45]} rotation={[0, Math.PI / 2, 0]} scale={1.83}>
          <mesh name="Cube019" geometry={nodes.Cube019.geometry} material={materials['Material.017']}  />
          <mesh name="Cube019_1" geometry={nodes.Cube019_1.geometry} material={textureGlassMaterial} />
          <mesh name="Cube019_2" geometry={nodes.Cube019_2.geometry} material={textureGlassMaterialBlender} />
          <mesh name="Cube019_3" geometry={nodes.Cube019_3.geometry} material={textureGlassMaterialFigma} />
        </group>
        <group name="table" position={[1.66, -0.06, -2.45]} rotation={[0, Math.PI / 2, 0]} scale={1.83}>
          <mesh name="Cube014" geometry={nodes.Cube014.geometry} material={textureMaterial} />
          <mesh name="Cube014_1" geometry={nodes.Cube014_1.geometry} material={textureMaterial} />
          <mesh name="Cube014_2" geometry={nodes.Cube014_2.geometry} material={textureMaterial} />
          <mesh name="Cube014_3" geometry={nodes.Cube014_3.geometry} material={textureMaterial} />
          <mesh name="Cube014_4" geometry={nodes.Cube014_4.geometry} material={textureMaterial} />
        </group>
        <group name="ligths" position={[3.24, -0.06, -2.45]} rotation={[0, Math.PI / 2, 0]} scale={1.83}>
          <mesh name="Circle022" geometry={nodes.Circle022.geometry} material={textureMaterial} />
          <mesh name="Circle022_1" geometry={nodes.Circle022_1.geometry} material={textureMaterial} />
          <mesh name="Circle022_2" geometry={nodes.Circle022_2.geometry} material={textureMaterial} />
        </group>
        <group name="chair" position={[1.56, -0.05, -2.44]} rotation={[0, Math.PI / 2, 0]} scale={1.52}>
          <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={textureMaterial} />
          <mesh name="Cylinder001_1" geometry={nodes.Cylinder001_1.geometry} material={textureMaterial} />
        </group>
        <group
          name="lightNoTexture"
          position={[0.32, 5.31, -4.94]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-4.71, -0.02, -0.06]}>
          <mesh name="Cube" geometry={nodes.Cube.geometry}  />
          <mesh name="Cube_1" geometry={nodes.Cube_1.geometry}  />
          <mesh name="Cube_2" geometry={nodes.Cube_2.geometry} />
        </group>
        <group name="telewisionTable" position={[-4.06, -0.01, -0.74]} scale={1.51}>
          <mesh
            name="uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply"
            geometry={nodes['uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply'].geometry}
            material={textureMaterial}
          />
          <mesh
            name="uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply_1"
            geometry={nodes['uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply_1'].geometry}
            material={textureMaterial}
          />
          <mesh
            name="uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply_2"
            geometry={nodes['uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply_2'].geometry}
            material={textureMaterial}
          />
          <mesh
            name="uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply_3"
            geometry={nodes['uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply_3'].geometry}
            material={textureMaterial}
          />
          <mesh
            name="uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply_4"
            geometry={nodes['uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply_4'].geometry}
            material={materials['02 - Default.002']}          />
          <mesh
            name="uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply_5"
            geometry={nodes['uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply_5'].geometry}
            material={textureMaterial}
          />
          <mesh
            name="uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply_6"
            geometry={nodes['uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply_6'].geometry}
            material={textureMaterial}
          />
          <mesh
            name="uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply_7"
            geometry={nodes['uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply_7'].geometry}
            material={textureMaterial}
          />
          <mesh
            name="uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply_8"
            geometry={nodes['uploads_files_2672859_AlphaB2B+TV+SNOW+-+Tv+Unit_ply_8'].geometry}
            material={textureMaterial}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/office.gltf");
