import { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";

type GLTFResult = {
  nodes: {
    polySurface1_lambert8_0: THREE.Mesh;
    polySurface2_lambert9_0: THREE.Mesh;
    polySurface3_lambert12_0: THREE.Mesh;
    polySurface14_lambert7_0: THREE.Mesh;
    polySurface15_lambert5_0: THREE.Mesh;
    polySurface16_lambert4_0: THREE.Mesh;
    polySurface17_lambert5_0: THREE.Mesh;
    polySurface19_lambert7_0: THREE.Mesh;
    polySurface20_lambert6_0: THREE.Mesh;
    polySurface21_lambert6_0: THREE.Mesh;
    polySurface22_lambert1_0: THREE.Mesh;
    polySurface23_lambert3_0: THREE.Mesh;
    polySurface24_lambert11_0: THREE.Mesh;
    polySurface25_lambert10_0: THREE.Mesh;
    polySurface26_lambert13_0: THREE.Mesh;
  };
  materials: {
    lambert8: THREE.MeshStandardMaterial;
    lambert9: THREE.MeshStandardMaterial;
    lambert12: THREE.MeshStandardMaterial;
    lambert7: THREE.MeshStandardMaterial;
    lambert5: THREE.MeshStandardMaterial;
    lambert4: THREE.MeshStandardMaterial;
    lambert6: THREE.MeshStandardMaterial;
    lambert1: THREE.MeshStandardMaterial;
    lambert3: THREE.MeshStandardMaterial;
    lambert11: THREE.MeshStandardMaterial;
    lambert10: THREE.MeshStandardMaterial;
    lambert13: THREE.MeshStandardMaterial;
  };
};

export function HaloSword(props: ThreeElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    "/models/halo.glb",
  ) as unknown as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0, -4.041, 6.49]}
          rotation={[1.572, 0, 0]}
        >
          <group
            name="a6fb2fc7ec3a41289d608fb139f16672fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="group2"
                  position={[-32.542, 0, 0]}
                  scale={[2.116, 1, 1]}
                >
                  <group
                    name="polySurface1"
                    position={[28.981, 0.215, 0]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[104.296, 65.436, 104.296]}
                  >
                    <mesh
                      name="polySurface1_lambert8_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface1_lambert8_0.geometry}
                      material={materials.lambert8}
                    />
                  </group>
                  <group
                    name="polySurface2"
                    position={[29.082, 0.042, 0]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[104.296, 74.471, 104.296]}
                  >
                    <mesh
                      name="polySurface2_lambert9_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface2_lambert9_0.geometry}
                      material={materials.lambert9}
                    />
                  </group>
                  <group
                    name="polySurface3"
                    position={[29.049, 0, 0.13]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={104.296}
                  >
                    <mesh
                      name="polySurface3_lambert12_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface3_lambert12_0.geometry}
                      material={materials.lambert12}
                    />
                  </group>
                  <group
                    name="group1"
                    position={[29.149, -1.945, -8.539]}
                    rotation={[0.003, -0.002, -0.007]}
                    scale={0.961}
                  >
                    <group name="polySurface8" position={[0.118, 0, 0]}>
                      <group
                        name="polySurface14"
                        position={[-28.34, 2.272, 18.153]}
                      >
                        <mesh
                          name="polySurface14_lambert7_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface14_lambert7_0.geometry}
                          material={materials.lambert7}
                        />
                      </group>
                      <group
                        name="polySurface15"
                        position={[-0.118, -1.194, -0.079]}
                      >
                        <mesh
                          name="polySurface15_lambert5_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface15_lambert5_0.geometry}
                          material={materials.lambert5}
                        />
                      </group>
                      <group
                        name="polySurface16"
                        position={[-0.058, 0.161, 0.07]}
                      >
                        <mesh
                          name="polySurface16_lambert4_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface16_lambert4_0.geometry}
                          material={materials.lambert4}
                        />
                      </group>
                      <group
                        name="polySurface17"
                        position={[-0.118, 1.194, 0.079]}
                      >
                        <mesh
                          name="polySurface17_lambert5_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface17_lambert5_0.geometry}
                          material={materials.lambert5}
                        />
                      </group>
                      <group
                        name="polySurface19"
                        position={[-28.34, 2.272, 18.153]}
                      >
                        <mesh
                          name="polySurface19_lambert7_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface19_lambert7_0.geometry}
                          material={materials.lambert7}
                        />
                      </group>
                      <group
                        name="polySurface20"
                        position={[-28.34, 2.272, 18.153]}
                      >
                        <mesh
                          name="polySurface20_lambert6_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface20_lambert6_0.geometry}
                          material={materials.lambert6}
                        />
                      </group>
                      <group
                        name="polySurface21"
                        position={[-28.34, 2.272, 18.153]}
                      >
                        <mesh
                          name="polySurface21_lambert6_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface21_lambert6_0.geometry}
                          material={materials.lambert6}
                        />
                      </group>
                      <group
                        name="polySurface22"
                        position={[-0.192, 0.161, 0.07]}
                      >
                        <mesh
                          name="polySurface22_lambert1_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface22_lambert1_0.geometry}
                          material={materials.lambert1}
                        />
                      </group>
                    </group>
                    <group
                      name="polySurface23"
                      position={[-0.001, 0.159, 0.282]}
                    >
                      <mesh
                        name="polySurface23_lambert3_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface23_lambert3_0.geometry}
                        material={materials.lambert3}
                      />
                    </group>
                  </group>
                  <group
                    name="polySurface24"
                    position={[29.401, -4.249, 0]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={[104.296, 65.436, 104.296]}
                  >
                    <mesh
                      name="polySurface24_lambert11_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface24_lambert11_0.geometry}
                      material={materials.lambert11}
                    />
                  </group>
                  <group
                    name="polySurface25"
                    position={[29.279, -4.08, 0]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={[104.296, 74.471, 104.296]}
                  >
                    <mesh
                      name="polySurface25_lambert10_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface25_lambert10_0.geometry}
                      material={materials.lambert10}
                    />
                  </group>
                  <group
                    name="polySurface26"
                    position={[29.267, -4.253, 0.091]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={104.296}
                  >
                    <mesh
                      name="polySurface26_lambert13_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface26_lambert13_0.geometry}
                      material={materials.lambert13}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/halo.glb");
