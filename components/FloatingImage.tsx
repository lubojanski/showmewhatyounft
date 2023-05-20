"use client";

import React, { memo, useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Mesh } from "three";

const FloatingImage = ({
  imageUrl,
  position,
  id,
  selected,
}: {
  imageUrl: string;
  position: [x: number, y: number, z: number];
  id: string;
  selected: boolean;
}) => {
  const meshRef = useRef<Mesh>(null!);
  const texture = useLoader(TextureLoader, imageUrl);

  const opacityRef = useRef(0);

  const randomTime = useRef(Math.random() * 1e4); // random start time

  useFrame((state) => {
    if (opacityRef.current <= 1) {
      const newOpacity =
        // @ts-ignore
        meshRef.current.material.opacity + 0.04;
      // @ts-ignore
      meshRef.current.material.opacity = newOpacity;
      opacityRef.current = newOpacity;
    }

    const elapsedTime = state.clock.getElapsedTime();
    const t = randomTime.current + elapsedTime;

    meshRef.current.rotation.set(
      Math.cos(t / 4) / 8,
      Math.sin(t / 4) / 8,
      -(1 + Math.sin(t / 1.5)) / 25
    );
    selected
      ? (meshRef.current.position.y = 0)
      : (meshRef.current.position.y =
          position[1] + (1 + Math.sin(t / 1.5)) / 10);
  });

  const aspectRatio = texture.image.width / texture.image.height;

  return (
    <mesh ref={meshRef} position={selected ? [0, 0, 3] : position} name={id}>
      <planeGeometry args={[1, 1 / aspectRatio]} />
      <meshBasicMaterial
        attach="material"
        map={texture}
        transparent
        toneMapped={false}
        opacity={opacityRef.current}
      />
    </mesh>
  );
};

export default memo(FloatingImage);
