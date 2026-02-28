import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import gsap from "gsap";
import { useRef } from "react";
import * as THREE from "three";

type GLTFResult = {
  nodes: {
    Sphere: THREE.Mesh;
    Ring: THREE.Mesh;
    Sphere2: THREE.Mesh;
  };
  materials: {
    "Material.002": THREE.Material;
    "Material.001": THREE.Material;
  };
};

export function Planet(props: ThreeElements["group"]) {
  const shapeContainerRef = useRef<THREE.Group>(null);
  const spheresContainerRef = useRef<THREE.Group>(null);
  const ringContainerRef = useRef<THREE.Mesh>(null);
  const { nodes, materials } = useGLTF(
    "/models/Planet.glb",
  ) as unknown as GLTFResult;

  useGSAP(() => {
    if (!shapeContainerRef.current || !spheresContainerRef.current || !ringContainerRef.current) return;
    const tl = gsap.timeline();
    tl.from(shapeContainerRef.current.position, {
      y: 5,
      duration: 3,
      ease: "circ.out",
    });
    tl.from(
      spheresContainerRef.current.rotation,
      {
        x: 0,
        y: Math.PI,
        z: -Math.PI,
        duration: 10,
        ease: "power1.inOut",
      },
      "-=25%",
    );
    tl.from(
      ringContainerRef.current.rotation,
      {
        x: 0.8,
        y: 0,
        z: 0,
        duration: 9,
        ease: "power1.inOut",
      },
      "<",
    );
  }, []);
  return (
    <group ref={shapeContainerRef} {...props} dispose={null}>
      <group ref={spheresContainerRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.002"]}
          rotation={[0, 0, 0.741]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere2.geometry}
          material={materials["Material.001"]}
          position={[0.647, 1.03, -0.724]}
          rotation={[0, 0, 0.741]}
          scale={0.223}
        />
      </group>

      <mesh
        ref={ringContainerRef}
        castShadow
        receiveShadow
        geometry={nodes.Ring.geometry}
        material={materials["Material.001"]}
        rotation={[-0.124, 0.123, -0.778]}
        scale={2}
      />
    </group>
  );
}

useGLTF.preload("/models/Planet.glb");
