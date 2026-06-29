import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

const LIFETIME = 60 // seconds
const FADE_OUT = 3 // last seconds
const FADE_IN = 0.5 // first seconds
const MAX_OPACITY = 0.3
const MAX_SCALE = 1.5

/**
 * Shared spawn/grow/fade animation for the wireframe shapes.
 * Drives an object3d (mesh or group): grows scale, eases opacity in then
 * out across LIFETIME, and applies opacity to every mesh material it owns.
 */
export function useShapeLifecycle<T extends THREE.Object3D>(rotate: (obj: T) => void) {
  const ref = useRef<T>(null)
  const startTime = useRef(Date.now())
  const opacityRef = useRef(0)

  useFrame(() => {
    const obj = ref.current
    if (!obj) return

    const elapsed = (Date.now() - startTime.current) / 1000

    obj.scale.setScalar(Math.min(MAX_SCALE, 1 + elapsed * 0.08))

    let targetOpacity = MAX_OPACITY
    if (elapsed < FADE_IN) {
      targetOpacity = MAX_OPACITY * (elapsed / FADE_IN)
    } else if (elapsed >= LIFETIME - FADE_OUT) {
      targetOpacity = MAX_OPACITY * (1 - (elapsed - (LIFETIME - FADE_OUT)) / FADE_OUT)
    }
    opacityRef.current += (targetOpacity - opacityRef.current) * 0.1
    const opacity = Math.max(0, opacityRef.current)

    obj.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
        child.material.opacity = opacity
      }
    })

    rotate(obj)
  })

  return ref
}
