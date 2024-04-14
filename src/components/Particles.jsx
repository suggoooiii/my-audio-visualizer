/* eslint-disable react/no-unknown-property */
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points } from "@react-three/drei";
import * as THREE from "three";

const Particles = () => {
  const points = useRef();
  const count = 1000;

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      colors[i] = Math.random();
    }

    return {
      positions: positions,
      colors: colors,
    };
  }, []);

  const onHover = (e) => {
    const positions = points.current.geometry.attributes.position.array;
    const colors = points.current.geometry.attributes.color.array;

    for (let i = 0; i < count * 3; i++) {
      positions[i] += (Math.random() - 0.5) * 0.1;
      colors[i] = Math.random();
    }

    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.geometry.attributes.color.needsUpdate = true;
  };

  useFrame(() => {
    points.current.rotation.x += 0.001;
    points.current.rotation.y += 0.001;
  });

  return (
    <Points
      ref={points}
      positions={particles.positions}
      colors={particles.colors}
      stride={3}
      onPointerOver={onHover}
    >
      <pointsMaterial
        vertexColors
        size={0.1}
        sizeAttenuation
        depthWrite={false}
        transparent={true}
        opacity={0.8}
      />
    </Points>
  );
};

export default Particles;
