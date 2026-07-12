"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function buildAShape() {
  const shape = new THREE.Shape();
  shape.moveTo(-1.55, 0);
  shape.lineTo(-0.02, 3.05);
  shape.lineTo(1.55, 0);
  shape.lineTo(0.92, 0);
  shape.lineTo(-0.02, 1.55);
  shape.lineTo(-0.92, 0);
  shape.closePath();
  return shape;
}

function buildAccentShape() {
  const shape = new THREE.Shape();
  shape.moveTo(-0.85, 0.05);
  shape.lineTo(-0.55, 0.05);
  shape.lineTo(0.95, 1.95);
  shape.lineTo(0.62, 1.95);
  shape.closePath();
  return shape;
}

const extrudeSettings: THREE.ExtrudeGeometryOptions = {
  depth: 0.62,
  bevelEnabled: true,
  bevelThickness: 0.05,
  bevelSize: 0.045,
  bevelSegments: 6,
  curveSegments: 24
};

function Logo() {
  const group = useRef<THREE.Group>(null);
  const idle = useRef(0);
  const { viewport } = useThree();

  const aGeo = useMemo(() => {
    const g = new THREE.ExtrudeGeometry(buildAShape(), extrudeSettings);
    g.center();
    return g;
  }, []);

  const accentGeo = useMemo(() => {
    const g = new THREE.ExtrudeGeometry(buildAccentShape(), {
      ...extrudeSettings,
      depth: 0.72,
      bevelSize: 0.03,
      bevelThickness: 0.03
    });
    g.center();
    return g;
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    idle.current += delta;
    const t = state.clock.elapsedTime;
    const mx = state.pointer.x;
    const my = state.pointer.y;

    const targetY = mx * 0.55 + (idle.current > 1.5 ? Math.sin(t * 0.18) * 0.25 : 0);
    const targetX = -my * 0.28;

    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.06;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.06;
    group.current.position.y = 0.15 + Math.sin(t * 0.6) * 0.06;
  });

  const scale = Math.min(1, viewport.width / 8);

  return (
    <group ref={group} scale={scale}>
      <mesh geometry={aGeo}>
        <meshPhysicalMaterial
          color="#e7e7e7"
          metalness={1}
          roughness={0.22}
          clearcoat={0.6}
          clearcoatRoughness={0.25}
          envMapIntensity={1.4}
        />
      </mesh>
      <mesh geometry={accentGeo} position={[0, -0.02, 0.05]}>
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={1}
          roughness={0.08}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.9}
        />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.15, 13], fov: 32 }}
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.05 }}
      className="!absolute inset-0"
    >
      <color attach="background" args={["#000000"]} />
      <fogExp2 attach="fog" args={["#000000", 0.012]} />

      <directionalLight position={[4, 6, 6]} intensity={3.2} />
      <directionalLight position={[-6, 2, -4]} intensity={2.2} color="#9fb4ff" />
      <pointLight position={[-3, -2, 4]} intensity={1.1} distance={20} />
      <pointLight position={[0, -4, 2]} intensity={0.6} distance={15} color="#c9c9c9" />
      <ambientLight intensity={0.6} color="#202020" />

      <Environment preset="city" environmentIntensity={0.4} />
      <Logo />
      <Sparkles count={200} scale={[14, 10, 8]} size={2.5} speed={0.15} color="#bfc6cf" opacity={0.5} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.05, 0]}>
        <circleGeometry args={[3.4, 64]} />
        <meshBasicMaterial color="#2a2a2a" transparent opacity={0.35} />
      </mesh>
    </Canvas>
  );
}
