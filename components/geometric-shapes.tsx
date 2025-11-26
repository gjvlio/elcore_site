"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

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

function CapybaraShape({ shape, theme }: { shape: Shape; theme: "dark" | "light" }) {
  const groupRef = useRef<THREE.Group>(null)
  const startTime = useRef(Date.now())
  const opacityRef = useRef(0)

  useFrame(() => {
    if (groupRef.current) {
      const elapsed = (Date.now() - startTime.current) / 1000

      const lifetime = 60
      const fadeStart = lifetime - 3

      const growthFactor = Math.min(1.5, 1 + elapsed * 0.08)
      groupRef.current.scale.setScalar(growthFactor)

      let targetOpacity = 0.3
      if (elapsed < 0.5) {
        targetOpacity = 0.3 * (elapsed / 0.5)
      } else if (elapsed >= fadeStart) {
        const fadeProgress = (elapsed - fadeStart) / 3
        targetOpacity = 0.3 * (1 - fadeProgress)
      }

      opacityRef.current += (targetOpacity - opacityRef.current) * 0.1

      groupRef.current.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
          child.material.opacity = Math.max(0, opacityRef.current)
        }
      })

      groupRef.current.rotation.y += 0.01
    }
  })

  const color = theme === "dark" ? new THREE.Color(0x55dd88) : new THREE.Color(0xffaa66)

  const position: [number, number, number] = [shape.x * 5, shape.y * 3, 0]

  return (
    <group ref={groupRef} position={position}>
      {/* Body (elongated box) */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 0.7, 0.8]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />
      </mesh>
      {/* Head (rounded box) */}
      <mesh position={[0.7, 0.1, 0]}>
        <boxGeometry args={[0.6, 0.5, 0.6]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />
      </mesh>
      {/* Ears (small tetrahedrons) */}
      <mesh position={[0.8, 0.4, -0.15]}>
        <tetrahedronGeometry args={[0.12]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />
      </mesh>
      <mesh position={[0.8, 0.4, 0.15]}>
        <tetrahedronGeometry args={[0.12]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />
      </mesh>
      {/* Legs (small boxes) */}
      <mesh position={[-0.3, -0.5, -0.3]}>
        <boxGeometry args={[0.2, 0.4, 0.2]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />
      </mesh>
      <mesh position={[-0.3, -0.5, 0.3]}>
        <boxGeometry args={[0.2, 0.4, 0.2]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />
      </mesh>
      <mesh position={[0.3, -0.5, -0.3]}>
        <boxGeometry args={[0.2, 0.4, 0.2]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />
      </mesh>
      <mesh position={[0.3, -0.5, 0.3]}>
        <boxGeometry args={[0.2, 0.4, 0.2]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

function AnimatedShape({ shape, theme }: { shape: Shape; theme: "dark" | "light" }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const startTime = useRef(Date.now())
  const opacityRef = useRef(0)

  useFrame(() => {
    if (meshRef.current) {
      const elapsed = (Date.now() - startTime.current) / 1000

      const lifetime = 60 // 1 minute
      const fadeStart = lifetime - 3 // Start fading at 57 seconds

      const growthFactor = Math.min(1.5, 1 + elapsed * 0.08)
      meshRef.current.scale.setScalar(growthFactor)

      let targetOpacity = 0.3
      if (elapsed < 0.5) {
        // Fade in over first 0.5 seconds
        targetOpacity = 0.3 * (elapsed / 0.5)
      } else if (elapsed >= fadeStart) {
        // Fade out over last 3 seconds
        const fadeProgress = (elapsed - fadeStart) / 3
        targetOpacity = 0.3 * (1 - fadeProgress)
      }

      // Smooth interpolation for opacity
      opacityRef.current += (targetOpacity - opacityRef.current) * 0.1

      if (meshRef.current.material instanceof THREE.MeshStandardMaterial) {
        meshRef.current.material.opacity = Math.max(0, opacityRef.current)
      }

      // Rotate
      meshRef.current.rotation.x += 0.02
      meshRef.current.rotation.y += 0.02
    }
  })

  const color =
    theme === "dark"
      ? new THREE.Color(0x55dd88) // Green for dark mode
      : new THREE.Color(0xffaa66) // Light orange/coral for light mode

  const position: [number, number, number] = [shape.x * 5, shape.y * 3, 0]

  return (
    <mesh ref={meshRef} position={position}>
      {shape.type === 0 && <boxGeometry args={[0.7, 0.7, 0.7]} />}
      {shape.type === 1 && <tetrahedronGeometry args={[0.6]} />}
      {shape.type === 2 && <octahedronGeometry args={[0.6]} />}
      {shape.type === 3 && <torusGeometry args={[0.4, 0.15, 16, 32]} />}
      {shape.type === 4 && <icosahedronGeometry args={[0.5]} />}
      <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />
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
