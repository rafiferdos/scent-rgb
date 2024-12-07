/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/model.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          (
            nodes[
              "tripo_node_f870011f-d2cd-4fc6-a54d-b7d07be8025b"
            ] as THREE.Mesh
          ).geometry
        }
        material={
          materials["tripo_material_f870011f-d2cd-4fc6-a54d-b7d07be8025b"]
        }
      />
    </group>
  );
}

useGLTF.preload("/model.glb");
