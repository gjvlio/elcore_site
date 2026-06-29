"use client"

import * as THREE from "three"
import { useShapeLifecycle } from "./use-shape-lifecycle"

interface Shape {
  id: number
  x: number
  y: number
  type: number
  isCapybara?: boolean
}

interface GeometricShapesProps {
  shapes: Shape[]
  theme: "dark" | "light"
}

const shapeColor = (theme: "dark" | "light") =>
  theme === "dark" ? new THREE.Color(0x55dd88) : new THREE.Color(0xffaa66)

const shapePosition = (shape: Shape): [number, number, number] => [shape.x * 5, shape.y * 3, 0]

function CapybaraShape({ shape, theme }: { shape: Shape; theme: "dark" | "light" }) {
  const groupRef = useShapeLifecycle<THREE.Group>((g) => {
    g.rotation.y += 0.01
  })

  const color = shapeColor(theme)
  const mat = <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />

  return (
    <group ref={groupRef} position={shapePosition(shape)}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 0.7, 0.8]} />
        {mat}
      </mesh>
      {/* Head */}
      <mesh position={[0.7, 0.1, 0]}>
        <boxGeometry args={[0.6, 0.5, 0.6]} />
        {mat}
      </mesh>
      {/* Ears */}
      <mesh position={[0.8, 0.4, -0.15]}>
        <tetrahedronGeometry args={[0.12]} />
        {mat}
      </mesh>
      <mesh position={[0.8, 0.4, 0.15]}>
        <tetrahedronGeometry args={[0.12]} />
        {mat}
      </mesh>
      {/* Legs */}
      {(
        [
          [-0.3, -0.5, -0.3],
          [-0.3, -0.5, 0.3],
          [0.3, -0.5, -0.3],
          [0.3, -0.5, 0.3],
        ] as const
      ).map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.2, 0.4, 0.2]} />
          {mat}
        </mesh>
      ))}
    </group>
  )
}

function AnimatedShape({ shape, theme }: { shape: Shape; theme: "dark" | "light" }) {
  const meshRef = useShapeLifecycle<THREE.Mesh>((m) => {
    m.rotation.x += 0.02
    m.rotation.y += 0.02
  })

  return (
    <mesh ref={meshRef} position={shapePosition(shape)}>
      {shape.type === 0 && <boxGeometry args={[0.7, 0.7, 0.7]} />}
      {shape.type === 1 && <tetrahedronGeometry args={[0.6]} />}
      {shape.type === 2 && <octahedronGeometry args={[0.6]} />}
      {shape.type === 3 && <torusGeometry args={[0.4, 0.15, 16, 32]} />}
      {shape.type === 4 && <icosahedronGeometry args={[0.5]} />}
      <meshStandardMaterial color={shapeColor(theme)} wireframe transparent opacity={0.3} />
    </mesh>
  )
}

export function GeometricShapes({ shapes, theme }: GeometricShapesProps) {
  return (
    <>
      {shapes.map((shape) =>
        shape.isCapybara ? (
          <CapybaraShape key={shape.id} shape={shape} theme={theme} />
        ) : (
          <AnimatedShape key={shape.id} shape={shape} theme={theme} />
        ),
      )}
    </>
  )
}
