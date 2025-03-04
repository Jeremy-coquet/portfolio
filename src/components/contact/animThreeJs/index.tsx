import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import earth from '../../../assets/imgs/terre06.jpg';

const AnimThreeJs: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);
    const sphereRef = useRef<THREE.Mesh | null>(null);

    useEffect(() => {
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;


        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Fond transparent

        const mountNode = mountRef.current;

        if (mountNode) {
            mountNode.appendChild(renderer.domElement);
        }

        const geometry = new THREE.SphereGeometry(1.6, 32, 32);
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(earth.src);

        const material = new THREE.MeshStandardMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        sphereRef.current = sphere;

        scene.add(sphere);

        // Ajouter une lumière directionnelle
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(7, 7, 7).normalize();
        scene.add(light);

        // Ajouter une lumière ambiante
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        const animate = () => {
            requestAnimationFrame(animate);
            if (sphereRef.current) {
                sphereRef.current.rotation.y += 0.005;
            }
            renderer.render(scene, camera);
        };

        animate();

        // Fonction de nettoyage
        return () => {
            if (mountNode) {
                mountNode.removeChild(renderer.domElement); // Utiliser la variable locale
            }
        };
    }, []); // Dépendances vides pour n'exécuter l'effet qu'une seule fois

    return <div ref={mountRef} />;
};

export default AnimThreeJs;
