import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import earth from '../../assets/imgs/terre06.jpg';

const SphereLanguage = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);
    let sphere: THREE.Mesh;

    useEffect(() => {
        // Créer la scène
        const scene = new THREE.Scene();

        // Créer une caméra
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

       // Créer le rendu avec un fond transparent
       const renderer = new THREE.WebGLRenderer({ alpha: true });
       renderer.setSize(window.innerWidth, window.innerHeight);
       renderer.setClearColor(0x000000, 0); // Fond transparent
       if (mountRef.current) {
           mountRef.current.appendChild(renderer.domElement);
       }

        // Créer une sphère
        const geometry = new THREE.SphereGeometry(0.5, 32, 32);
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(earth.src);
        
        // Utiliser un matériau standard
        const material = new THREE.MeshStandardMaterial({ map: texture });
        sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // Ajouter une lumière directionnelle
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(7, 7, 7).normalize();
        scene.add(light);

        // Ajouter une lumière ambiante
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        // Fonction d'animation
        const animate = () => {
            requestAnimationFrame(animate);
            // sphere.rotation.y += 0.005; // Rotation de la sphère
            renderer.render(scene, camera);
        };

        animate();

        // Nettoyage à la destruction du composant
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} />;
};

export default SphereLanguage;