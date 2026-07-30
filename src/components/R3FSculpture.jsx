import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function R3FSculpture() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Torus Wireframe Ring Geometry
    const ringGeometry = new THREE.TorusGeometry(1.8, 0.22, 16, 64);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x6CA8A7,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      roughness: 0.2,
      metalness: 0.8,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    scene.add(ringMesh);

    // Inner Octahedron Crystal Geometry
    const crystalGeometry = new THREE.OctahedronGeometry(0.9, 0);
    const crystalMaterial = new THREE.MeshStandardMaterial({
      color: 0xBFA36A,
      wireframe: false,
      flatShading: true,
      transparent: true,
      opacity: 0.25,
      roughness: 0.3,
    });
    const crystalMesh = new THREE.Mesh(crystalGeometry, crystalMaterial);
    scene.add(crystalMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xB8D8D3, 1);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xBFA36A, 0.5);
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();

      ringMesh.rotation.x += delta * 0.2;
      ringMesh.rotation.y += delta * 0.35;

      crystalMesh.rotation.y -= delta * 0.25;
      crystalMesh.rotation.z += delta * 0.15;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative flex items-center justify-center select-none pointer-events-none"
    />
  );
}
