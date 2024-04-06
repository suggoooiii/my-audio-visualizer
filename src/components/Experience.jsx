/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import fragmentshader from "../glsl/pso.fragment.glsl";
import vertexshader from "../glsl/pso.vertex.glsl";
import { MeshDistortMaterial } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";

function Experience() {
  const { camera } = useThree();
  const amblightref = useRef();
  console.log("🚀 ~ Experience ~ amblightref:", amblightref);
  return (
    <mesh>
      {/* <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight ref={amblightref} intensity={0.2} /> */}
      <sphereGeometry args={[2]} />
      <MeshDistortMaterial distort={0.5} speed={10} />
      <shaderMaterial
        vertexShader={vertexshader}
        fragmentShader={fragmentshader}
        uniforms={{
          lightPosition: new THREE.Vector3(5, 5, 5),
          viewPosition: camera.position,
          ambientColor: new THREE.Color(0x333333),
          diffuseColor: new THREE.Color(0xff0000),
          specularColor: new THREE.Color(0xffffff),
          shininess: 32,
        }}
      />
    </mesh>
  );
}

export default Experience;
