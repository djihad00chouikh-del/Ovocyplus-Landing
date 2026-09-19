import { useEffect, useRef } from 'react'
import {
  AmbientLight,
  BoxGeometry,
  CanvasTexture,
  CapsuleGeometry,
  CircleGeometry,
  DirectionalLight,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  SRGBColorSpace,
  WebGLRenderer,
} from 'three'

type Props = {
  reduced?: boolean
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

function makePack(scene: Scene): Group {
  const group = new Group()

  const cartonMat = new MeshStandardMaterial({
    color: 0xf7efe4,
    roughness: 0.55,
    metalness: 0.03,
  })
  const box = new Mesh(new BoxGeometry(3.2, 4.4, 1.5), cartonMat)
  box.position.y = 0.2
  group.add(box)

  const labelMat = new MeshStandardMaterial({ color: 0xf8ddd2, roughness: 0.5 })
  const label = new Mesh(new PlaneGeometry(2.7, 3.7), labelMat)
  label.position.set(0, 0.2, 0.76)
  group.add(label)

  const bandMat = new MeshStandardMaterial({ color: 0xe7366b, roughness: 0.45 })
  const band = new Mesh(new PlaneGeometry(2.7, 0.58), bandMat)
  band.position.set(0, 1.68, 0.761)
  group.add(band)

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 128
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.clearRect(0, 0, 512, 128)
    ctx.fillStyle = '#fdf9f4'
    ctx.font = '600 52px Inter Variable, Arial, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('OVOCYPLUS®', 256, 62)
    const textTex = new CanvasTexture(canvas)
    textTex.colorSpace = SRGBColorSpace
    const textMat = new MeshBasicMaterial({ map: textTex, transparent: true })
    const textMesh = new Mesh(new PlaneGeometry(2.3, 0.58), textMat)
    textMesh.position.set(0, 1.68, 0.762)
    group.add(textMesh)
  }

  const capsuleMat = new MeshStandardMaterial({
    color: 0xf5b7b7,
    roughness: 0.35,
    metalness: 0.05,
  })
  const capsule = new Mesh(new CapsuleGeometry(0.42, 1.5, 6, 16), capsuleMat)
  capsule.position.set(2.5, 0.35, 0.4)
  capsule.rotation.y = -0.6
  group.add(capsule)

  const shadowMat = new MeshStandardMaterial({
    color: 0x271a20,
    transparent: true,
    opacity: 0.12,
  })
  const shadow = new Mesh(new CircleGeometry(2.4, 32), shadowMat)
  shadow.rotation.x = -Math.PI / 2
  shadow.position.y = -2.05
  group.add(shadow)

  group.position.y = 0
  group.rotation.x = -0.03
  group.rotation.y = -0.55
  scene.add(group)

  return group
}

export default function ViewerInner({ reduced = false }: Props) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    let renderer: WebGLRenderer
    try {
      renderer = new WebGLRenderer({ antialias: true, alpha: true })
    } catch {
      return
    }

    const setSize = () => {
      const w = mount.clientWidth || 320
      const h = mount.clientHeight || 420
      renderer.setSize(w, h)
    }
    setSize()
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.domElement.style.touchAction = 'none'
    renderer.domElement.style.cursor = 'grab'
    mount.appendChild(renderer.domElement)

    const scene = new Scene()
    const camera = new PerspectiveCamera(38, 1, 0.1, 50)
    const aspect = () => (mount.clientWidth || 320) / (mount.clientHeight || 420)
    camera.aspect = aspect()
    camera.position.set(2.2, 1.8, 7.5)
    camera.lookAt(0, 0.4, 0)
    camera.updateProjectionMatrix()

    scene.add(new AmbientLight(0xffffff, 1.15))
    const keyLight = new DirectionalLight(0xffffff, 1.8)
    keyLight.position.set(4, 6, 5)
    scene.add(keyLight)
    const rimLight = new DirectionalLight(0xf5b7b7, 0.9)
    rimLight.position.set(-5, 2, -4)
    scene.add(rimLight)

    const group = makePack(scene)

    const state = {
      dragging: false,
      lastX: 0,
      lastY: 0,
      velY: 0,
      lastPointerAt: 0,
    }

    const onPointerDown = (e: PointerEvent) => {
      state.dragging = true
      state.lastX = e.clientX
      state.lastY = e.clientY
      state.lastPointerAt = performance.now()
      state.velY = 0
      renderer.domElement.style.cursor = 'grabbing'
      renderer.domElement.setPointerCapture(e.pointerId)
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!state.dragging) return
      const dx = e.clientX - state.lastX
      const dy = e.clientY - state.lastY
      state.lastX = e.clientX
      state.lastY = e.clientY
      const now = performance.now()
      const dtMs = Math.max(now - state.lastPointerAt, 0)
      state.lastPointerAt = now
      group.rotation.y += dx * 0.006
      group.rotation.x = clamp(group.rotation.x + dy * 0.004, -0.9, 0.9)
      if (dtMs > 0) state.velY = -dx / dtMs
    }

    const onPointerUp = () => {
      if (!state.dragging) return
      state.dragging = false
      renderer.domElement.style.cursor = 'grab'
    }

    renderer.domElement.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)

    let raf = 0
    let lastFrame = performance.now()
    const start = performance.now()
    const render = () => renderer.render(scene, camera)
    const animate = () => {
      raf = requestAnimationFrame(animate)
      const now = performance.now()
      const dt = Math.min((now - lastFrame) / 1000, 0.05)
      lastFrame = now
      if (!reduced) {
        const t = (now - start) / 1000
        group.position.y = Math.sin(t * 1.1) * 0.14
        group.rotation.y += state.velY * 0.012
        state.velY *= 0.96
        const idleMs = now - state.lastPointerAt
        if (!state.dragging && idleMs > 1800) {
          group.rotation.y += dt * 0.12
        }
      }
      render()
    }
    animate()

    const onResize = () => {
      camera.aspect = aspect()
      camera.updateProjectionMatrix()
      setSize()
      render()
    }
    const ro = new ResizeObserver(onResize)
    ro.observe(mount)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      renderer.domElement.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      scene.traverse((obj) => {
        if (obj instanceof Mesh) {
          obj.geometry.dispose()
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
          mats.forEach((m) => {
            if (m.map) m.map.dispose()
            m.dispose()
          })
        }
      })
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [reduced])

  return <div ref={mountRef} className="size-full" aria-hidden="true" />
}