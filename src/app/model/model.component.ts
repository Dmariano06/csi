import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as THREE from "three";
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrl: './model.component.scss'
})
export class ModelComponent {
  
  @ViewChild('blobContainer', { static: true }) blobContainer!: ElementRef;

  private scene: THREE.Scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ alpha: true });
  private particles: THREE.Points;

  private mouse = new THREE.Vector2();
  private raycaster = new THREE.Raycaster();

  private readonly PARTICLE_COUNT = 1000;
  private readonly SPHERE_RADIUS = 1.5;

  private isMouseOverSphere = false;

  constructor() {
    this.particles = this.createParticles();
  }

  ngOnInit() {
    this.initRenderer();
    this.initCamera();
    this.initScene();
    this.addEventListeners();
    this.animate();
  }

  ngOnDestroy() {
    window.removeEventListener('mousemove', this.onMouseMove);
  }

  private initRenderer() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.blobContainer.nativeElement.appendChild(this.renderer.domElement);
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.domElement.style.pointerEvents = 'none';
  }

  private initCamera() {
    this.camera.position.z = 5;
  }

  private initScene() {
    this.scene.add(this.particles);
  }

  private createParticles(): THREE.Points {
    const particleGeometry = new THREE.BufferGeometry();
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
    });

    const positions = new Float32Array(this.PARTICLE_COUNT * 3);
    const colors = new Float32Array(this.PARTICLE_COUNT * 3);
    const speeds = new Float32Array(this.PARTICLE_COUNT * 3);

    for (let i = 0; i < this.PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      const x = this.SPHERE_RADIUS * Math.sin(phi) * Math.cos(theta);
      const y = this.SPHERE_RADIUS * Math.sin(phi) * Math.sin(theta);
      const z = this.SPHERE_RADIUS * Math.cos(phi);

      const index = i * 3;
      positions[index] = x;
      positions[index + 1] = y;
      positions[index + 2] = z;

      const colorIndex = i % 4;
      colors[index] = [0x67, 0x0b, 0xd9, 0xe1][colorIndex] / 255;  // R
      colors[index + 1] = [0xe4, 0x80, 0xf7, 0xcc][colorIndex] / 255;  // G
      colors[index + 2] = [0x6f, 0x9c, 0xfe, 0x06][colorIndex] / 255;  // B

      speeds[index] = 0; // Vitesse X (initialement à 0)
      speeds[index + 1] = 0; // Vitesse Y (initialement à 0)
      speeds[index + 2] = 0; // Vitesse Z (initialement à 0)
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 3));

    return new THREE.Points(particleGeometry, particleMaterial);
  }

  private addEventListeners() {
    window.addEventListener('mousemove', this.onMouseMove);
  }

  private onMouseMove = (event: MouseEvent) => {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Utiliser le raycaster pour détecter si la souris survole la sphère
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObject(this.particles);

    this.isMouseOverSphere = intersects.length > 0;
  };

  private animate() {
   // let resetTimer: NodeJS.Timeout;
   let resetTimer: any;
    const resetSphere = () => {
      // Réinitialiser la position des particules en sphère
      const positions = this.particles.geometry.attributes['position'].array as Float32Array;
      for (let i = 0; i < this.PARTICLE_COUNT; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;

        const x = this.SPHERE_RADIUS * Math.sin(phi) * Math.cos(theta);
        const y = this.SPHERE_RADIUS * Math.sin(phi) * Math.sin(theta);
        const z = this.SPHERE_RADIUS * Math.cos(phi);

        const index = i * 3;
        positions[index] = x;
        positions[index + 1] = y;
        positions[index + 2] = z;
      }

      this.particles.geometry.attributes['position'].needsUpdate = true;

      // Redémarrer le timer pour la prochaine réinitialisation
      resetTimer = setTimeout(resetSphere, 5000);
    };

    // Démarrer le premier timer pour la réinitialisation initiale
    resetTimer = setTimeout(resetSphere, 5000);

    const animate = () => {
      requestAnimationFrame(animate);

      this.particles.rotation.x += 0.005;
      this.particles.rotation.y += 0.005;

      const positions = this.particles.geometry.attributes['position'].array as Float32Array;
      const speeds = this.particles.geometry.attributes['speed'].array as Float32Array;

      if (this.isMouseOverSphere) {
        // Si la souris survole la sphère, disperser les particules
        for (let i = 0; i < positions.length; i += 3) {
          speeds[i] += (Math.random() - 0.5) * 0.01;
          speeds[i + 1] += (Math.random() - 0.5) * 0.01;
          speeds[i + 2] += (Math.random() - 0.5) * 0.01;
        }
      } else {
        // Si la souris ne survole pas la sphère, ralentir les particules dispersées
        for (let i = 0; i < speeds.length; i++) {
          speeds[i] *= 0.98; // Ajustez ce facteur pour contrôler la vitesse de décélération
        }
      }

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += speeds[i];
        positions[i + 1] += speeds[i + 1];
        positions[i + 2] += speeds[i + 2];

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
}
