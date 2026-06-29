"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface MovingGridProps {
  theme: "dark" | "light"
}

export function MovingGrid({ theme }: MovingGridProps) {
  const gridRef = useRef<THREE.GridHelper>(null)

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.3) * 1
    }
  })

  const gridColor = theme === "dark" ? new THREE.Color(0x22cc66) : new THREE.Color(0xff7744)
  const centerColor = theme === "dark" ? new THREE.Color(0x44ff88) : new THREE.Color(0xffaa66)

  return (
    <>
      <gridHelper
        ref={gridRef}
        args={[50, 50, centerColor, gridColor]}
        position={[0, -2, -3]}
        material-opacity={0.25}
        material-transparent={true}
      />
    </>
  )
}
