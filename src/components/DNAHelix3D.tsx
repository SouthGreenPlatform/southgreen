import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function DNAStrand() {
  const groupRef = useRef<THREE.Group>(null);
  const [isSpinning, setIsSpinning] = useState(true);
  const initialRotation = useRef(0);

  // Stop spinning after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSpinning(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      if (isSpinning) {
        groupRef.current.rotation.y += delta * 0.5;
        initialRotation.current = groupRef.current.rotation.y;
      } else {
        // Smoothly decelerate to a stop
        const targetRotation = initialRotation.current;
        groupRef.current.rotation.y += (targetRotation - groupRef.current.rotation.y) * 0.02;
      }
    }
  });

  // Generate helix points
  const { spheres, connections } = useMemo(() => {
    const sphereData: { position: [number, number, number]; color: string }[] = [];
    const connectionData: { start: [number, number, number]; end: [number, number, number] }[] = [];
    
    const turns = 3;
    const pointsPerTurn = 12;
    const totalPoints = turns * pointsPerTurn;
    const height = 8;
    const radius = 1.2;

    for (let i = 0; i < totalPoints; i++) {
      const t = i / totalPoints;
      const angle = t * turns * Math.PI * 2;
      const y = (t - 0.5) * height;

      // First strand
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      sphereData.push({ position: [x1, y, z1], color: "#2d8a5b" }); // Primary green

      // Second strand (opposite side)
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;
      sphereData.push({ position: [x2, y, z2], color: "#d97706" }); // Accent orange

      // Connection between strands (base pairs)
      if (i % 2 === 0) {
        connectionData.push({
          start: [x1, y, z1],
          end: [x2, y, z2],
        });
      }
    }

    return { spheres: sphereData, connections: connectionData };
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Spheres */}
        {spheres.map((sphere, i) => (
          <mesh key={`sphere-${i}`} position={sphere.position}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial
              color={sphere.color}
              emissive={sphere.color}
              emissiveIntensity={0.3}
              roughness={0.3}
              metalness={0.6}
            />
          </mesh>
        ))}

        {/* Backbone connections (vertical) */}
        {spheres.map((sphere, i) => {
          if (i >= 2) {
            const prevSphere = spheres[i - 2];
            if (prevSphere) {
              const start = new THREE.Vector3(...sphere.position);
              const end = new THREE.Vector3(...prevSphere.position);
              const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
              const length = start.distanceTo(end);
              const direction = new THREE.Vector3().subVectors(end, start).normalize();
              const quaternion = new THREE.Quaternion().setFromUnitVectors(
                new THREE.Vector3(0, 1, 0),
                direction
              );

              return (
                <mesh key={`backbone-${i}`} position={mid} quaternion={quaternion}>
                  <cylinderGeometry args={[0.03, 0.03, length, 8]} />
                  <meshStandardMaterial
                    color={sphere.color}
                    emissive={sphere.color}
                    emissiveIntensity={0.2}
                    transparent
                    opacity={0.8}
                  />
                </mesh>
              );
            }
          }
          return null;
        })}

        {/* Base pair connections (horizontal) */}
        {connections.map((conn, i) => {
          const start = new THREE.Vector3(...conn.start);
          const end = new THREE.Vector3(...conn.end);
          const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
          const length = start.distanceTo(end);
          const direction = new THREE.Vector3().subVectors(end, start).normalize();
          const quaternion = new THREE.Quaternion().setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            direction
          );

          return (
            <mesh key={`connection-${i}`} position={mid} quaternion={quaternion}>
              <cylinderGeometry args={[0.02, 0.02, length, 8]} />
              <meshStandardMaterial
                color="#ffffff"
                emissive="#ffffff"
                emissiveIntensity={0.1}
                transparent
                opacity={0.4}
              />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

export function DNAHelix3D() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#2d8a5b" />
        <DNAStrand />
      </Canvas>
    </div>
  );
}
