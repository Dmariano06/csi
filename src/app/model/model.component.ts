import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  @ViewChild('blobContainer', { static: true }) blobContainer!: ElementRef;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private particles: THREE.Points;

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1);
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.particles = this.createParticles();
  }

  ngOnInit() {
    this.setupRenderer();
    this.setupCamera();

    this.scene.add(this.particles);

    this.animate();
  }

  private setupRenderer() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.blobContainer.nativeElement.appendChild(this.renderer.domElement);
    this.renderer.setClearColor(0x000000, 0);
  }

  private setupCamera() {
    this.camera.position.z = 1;
  }

  private animate() {
    const animate = () => {
      requestAnimationFrame(animate);

      this.updateParticles();

      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }

  private updateParticles() {
    this.particles.rotation.x += 0.000005;
    this.particles.rotation.y += 0.000005;

    const positions = this.particles.geometry.getAttribute('position') as THREE.BufferAttribute;
    const speeds = this.particles.geometry.getAttribute('speed') as THREE.BufferAttribute;

    for (let i = 0; i < positions.array.length; i += 3) {
      positions.array[i] += speeds.array[i];
      positions.array[i + 1] += speeds.array[i + 1];
      positions.array[i + 2] += speeds.array[i + 2];

      this.wrapAround(positions, i);
    }

    positions.needsUpdate = true;
  }

  private wrapAround(positions: THREE.BufferAttribute, index: number) {
    let range = 5;

    positions.array[index] = this.wrapCoordinate(positions.array[index], range);
    positions.array[index + 1] = this.wrapCoordinate(positions.array[index + 1], range);
    positions.array[index + 2] = this.wrapCoordinate(positions.array[index + 2], range);
  }

   private wrapCoordinate(coord: number, range: number): number {
    if (coord > range) {
      return -range;
    } else if (coord < -range) {
      return range;
    }
    return coord;
  }

  private createParticles(): THREE.Points {
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
    });

    const particlesCount = 500;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const speeds = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const radius = 0.02; // Rayon de la sphère
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const speed = this.assignSpeed();

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      colors[i * 3] = 0x00 / 255;
      colors[i * 3 + 1] = 0xe7 / 255;
      colors[i * 3 + 2] = 0xa7 / 255;

      speeds[i * 3] = speed.x;
      speeds[i * 3 + 1] = speed.y;
      speeds[i * 3 + 2] = speed.z;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 3));

    return new THREE.Points(particlesGeometry, particlesMaterial);
  }

  private assignSpeed(): THREE.Vector3 {
    const speed = new THREE.Vector3(
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01
    );

    return speed;
  }
}
