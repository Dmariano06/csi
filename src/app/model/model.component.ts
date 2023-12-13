import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent  {

  @ViewChild('blobContainer', { static: true }) blobContainer!: ElementRef;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private particles: THREE.Points;

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.particles = this.createParticles();
  }

  ngOnInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.blobContainer.nativeElement.appendChild(this.renderer.domElement);

    this.camera.position.z = 5;

    this.scene.add(this.particles);

    this.renderer.setClearColor(0x000000, 0);

    const animate = () => {
      requestAnimationFrame(animate);

      // Move particles around
      this.particles.rotation.x += 0.005;
      this.particles.rotation.y += 0.005;

      const positions = this.particles.geometry.attributes['position'].array as Float32Array;
      const speeds = this.particles.geometry.attributes['speed'].array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += speeds[i]; // Update X position
        positions[i + 1] += speeds[i + 1]; // Update Y position
        positions[i + 2] += speeds[i + 2]; // Update Z position

        // Wrap around if particles go beyond a certain range
        const range = 5;
        if (positions[i] > range) positions[i] = -range;
        if (positions[i] < -range) positions[i] = range;
        if (positions[i + 1] > range) positions[i + 1] = -range;
        if (positions[i + 1] < -range) positions[i + 1] = range;
        if (positions[i + 2] > range) positions[i + 2] = -range;
        if (positions[i + 2] < -range) positions[i + 2] = range;
      }

      this.particles.geometry.attributes['position'].needsUpdate = true;

      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }

  private createParticles(): THREE.Points {
    const particleGeometry = new THREE.BufferGeometry();
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true, // Activer les couleurs par sommet
    });

    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const speeds = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const radius = 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Assigner la couleur en fonction de l'ordre de quantité
      const colorIndex = i % 4;
      switch (colorIndex) {
        case 0:
          colors[i * 3] = 0x67 / 255;  // R
          colors[i * 3 + 1] = 0xe4 / 255;  // G
          colors[i * 3 + 2] = 0x6f / 255;  // B
          break;
        case 1:
          colors[i * 3] = 0x0b / 255;  // R
          colors[i * 3 + 1] = 0x80 / 255;  // G
          colors[i * 3 + 2] = 0x9c / 255;  // B
          break;
        case 2:
          colors[i * 3] = 0xd9 / 255;  // R
          colors[i * 3 + 1] = 0xf7 / 255;  // G
          colors[i * 3 + 2] = 0xfe / 255;  // B
          break;
        case 3:
          colors[i * 3] = 0xe1 / 255;  // R
          colors[i * 3 + 1] = 0xcc / 255;  // G
          colors[i * 3 + 2] = 0x06 / 255;  // B
          break;
      }

      // Assigner une vitesse aléatoire
      speeds[i * 3] = (Math.random() - 0.5) * 0.01; // Vitesse X
      speeds[i * 3 + 1] = (Math.random() - 0.5) * 0.01; // Vitesse Y
      speeds[i * 3 + 2] = (Math.random() - 0.5) * 0.01; // Vitesse Z
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 3));

    const particles = new THREE.Points(particleGeometry, particleMaterial);

    return particles;
  }
}
