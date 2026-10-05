"use client"

import { Suspense, useEffect, useRef } from "react"
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import * as THREE from "three"

type SceneProps = {
  progress: React.RefObject<{ value: number }>
  onReady: () => void
}

const smooth = (value: number) => {
  const t = THREE.MathUtils.clamp(value, 0, 1)
  return t * t * (3 - 2 * t)
}

const mix = (a: number, b: number, t: number) => THREE.MathUtils.lerp(a, b, smooth(t))

const cameraStops = [
  { at: 0, position: [-8.2, 2.2, 7.7], target: [0, 0, 0], fov: 36 },
  { at: 0.11, position: [-6.8, 1.5, 5.9], target: [0, 0.1, 0], fov: 36 },
  { at: 0.22, position: [-2.75, 1.55, 2.35], target: [0.2, 1.05, -0.4], fov: 34 },
  { at: 0.33, position: [-2.75, 1.55, 2.35], target: [0.2, 1.05, -0.4], fov: 34 },
  { at: 0.44, position: [-2.85, -0.15, 1.85], target: [0.15, -0.43, -0.35], fov: 34 },
  { at: 0.57, position: [-2.85, -0.15, 1.85], target: [0.15, -0.43, -0.35], fov: 34 },
  { at: 0.7, position: [-2.65, 1.45, 1.45], target: [-0.15, 1.15, -0.45], fov: 28 },
  { at: 0.82, position: [-2.65, 1.45, 1.45], target: [-0.15, 1.15, -0.45], fov: 28 },
  { at: 0.96, position: [-8.2, 2.2, 7.7], target: [0, 0, 0], fov: 36 },
  { at: 1, position: [-8.2, 2.2, 7.7], target: [0, 0, 0], fov: 36 },
] as const

const configureLoader = (loader: GLTFLoader) => {
  const decoder = new DRACOLoader()
  decoder.setDecoderPath("/draco/")
  loader.setDRACOLoader(decoder)
}

function Computer({ onReady }: Pick<SceneProps, "onReady">) {
  const { scene } = useLoader(GLTFLoader, "/custom_gaming_pc.draco.glb", configureLoader)
  const ready = useRef(false)

  useFrame(() => {
    if (ready.current) return
    ready.current = true
    onReady()
  })

  useEffect(() => {
    // The Sketchfab export includes a wide display plinth outside the PC case.
    const plinth = scene.getObjectByName("Cube_12")
    if (plinth) plinth.visible = false
    // The dark glass mesh obscures the internal components at close range.
    const sideGlass = scene.getObjectByName("Cube.154_380")
    if (sideGlass) sideGlass.visible = false
    const brightenedMaterials = new Set<THREE.Material>()
    scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return
      const materials = Array.isArray(object.material) ? object.material : [object.material]
      for (const material of materials) {
        if (material instanceof THREE.MeshStandardMaterial && material.emissiveMap && !brightenedMaterials.has(material)) {
          material.emissiveIntensity *= 1.3
          brightenedMaterials.add(material)
        }
      }
    })
  }, [scene])

  return <group position={[-8.5, 0.31, -0.7]}>
    <primitive object={scene} />
  </group>
}

function CameraJourney({ progress }: Pick<SceneProps, "progress">) {
  const { size } = useThree()
  const target = useRef(new THREE.Vector3())
  const desiredPosition = useRef(new THREE.Vector3())
  const desiredTarget = useRef(new THREE.Vector3())

  useFrame((state, delta) => {
    const p = progress.current.value
    const compact = size.width < 640
    const nextIndex = cameraStops.findIndex((stop) => stop.at > p)
    const index = nextIndex < 0 ? cameraStops.length - 2 : Math.max(0, nextIndex - 1)
    const from = cameraStops[index]
    const to = cameraStops[Math.min(index + 1, cameraStops.length - 1)]
    const phase = smooth((p - from.at) / Math.max(0.001, to.at - from.at))
    const offset = compact ? 0.85 : 0
    desiredPosition.current.set(
      mix(from.position[0], to.position[0], phase) - offset,
      mix(from.position[1], to.position[1], phase),
      mix(from.position[2], to.position[2], phase) + offset,
    )
    desiredTarget.current.set(
      mix(from.target[0], to.target[0], phase),
      mix(from.target[1], to.target[1], phase),
      mix(from.target[2], to.target[2], phase),
    )
    const ease = 1 - Math.exp(-delta * 4.5)
    state.camera.position.lerp(desiredPosition.current, ease)
    target.current.lerp(desiredTarget.current, ease)
    state.camera.lookAt(target.current)
    if (state.camera instanceof THREE.PerspectiveCamera) {
      state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, mix(from.fov, to.fov, phase), ease)
      state.camera.updateProjectionMatrix()
    }
  })

  return null
}

function FocusLights({ progress }: Pick<SceneProps, "progress">) {
  const ram = useRef<THREE.PointLight>(null)
  const gpu = useRef<THREE.PointLight>(null)
  const cpu = useRef<THREE.PointLight>(null)
  useFrame(() => {
    const p = progress.current.value
    const bell = (start: number, end: number) =>
      smooth((p - start) / 0.07) * (1 - smooth((p - end) / 0.07))
    if (ram.current) ram.current.intensity = 10 + 34 * bell(0.15, 0.34)
    if (gpu.current) gpu.current.intensity = 8 + 30 * bell(0.37, 0.59)
    if (cpu.current) cpu.current.intensity = 4 + 5 * bell(0.64, 0.84)
  })
  return <>
    <pointLight ref={ram} position={[-1.45, 1.28, 0.35]} color="#b8dcff" distance={5} decay={2} />
    <pointLight ref={gpu} position={[-1.5, -0.35, 0.7]} color="#fff0ce" distance={5} decay={2} />
    <pointLight ref={cpu} position={[-0.7, 1.3, 0.25]} color="#b4d9ff" distance={5} decay={2} />
  </>
}


export default function GamingPcScene({ progress, onReady }: SceneProps) {
  return <Canvas
    camera={{ position: [-8.2, 2.2, 7.7], fov: 36, near: 0.1, far: 100 }}
    dpr={[1, 1.5]}
    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    performance={{ min: 0.5 }}
    style={{ filter: "brightness(1.24) saturate(1.42)" }}
    onCreated={({ gl }) => { gl.toneMappingExposure = 1.16 }}
  >
    <ambientLight intensity={2.5} />
    <hemisphereLight args={["#d4e5ff", "#263449", 2.8]} />
    <directionalLight position={[-5, 7, 7]} intensity={5.0} color="#e2efff" />
    <directionalLight position={[5, 3, -5]} intensity={2.3} color="#fca311" />
    <pointLight position={[-2, 1, 3]} intensity={45} color="#a9d3ff" distance={12} />
    <CameraJourney progress={progress} />
    <FocusLights progress={progress} />
    <Suspense fallback={null}><Computer onReady={onReady} /></Suspense>
  </Canvas>
}
