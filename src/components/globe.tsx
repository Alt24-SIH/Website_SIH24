'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(750, 750)
    containerRef.current.appendChild(renderer.domElement)

    // Create globe
    const geometry = new THREE.SphereGeometry(2, 64, 64)
    const material = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
    const globe = new THREE.Mesh(geometry, material)
    scene.add(globe)

    camera.position.z = 5

    // Animation
    function animate() {
      requestAnimationFrame(animate)
      globe.rotation.y += 0.002
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="absolute right-0 top-1/2 -translate-y-1/2" />
}

