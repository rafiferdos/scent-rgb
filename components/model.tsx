import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/model.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["tripo_node_f870011f-d2cd-4fc6-a54d-b7d07be8025b"].geometry
        }
        material={
          materials["tripo_material_f870011f-d2cd-4fc6-a54d-b7d07be8025b"]
        }
      />
    </group>
  );
}

useGLTF.preload("/model.glb");
