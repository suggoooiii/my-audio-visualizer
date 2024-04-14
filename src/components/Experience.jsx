/* eslint-disable react/no-unknown-property */

import { MeshDistortMaterial } from "@react-three/drei";
import Particles from "./Particles";

function Experience() {
  return (
    <>
      <mesh>
        <Particles />
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.2} />
        <sphereGeometry args={[2, 2, 2]} />
        <MeshDistortMaterial distort={0.5} speed={10} />
      </mesh>
    </>
  );
}

export default Experience;
