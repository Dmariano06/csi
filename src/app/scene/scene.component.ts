import { Component, ElementRef, HostListener, Input, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent{
  @ViewChild('canvas', { static: true }) private canvasRef!: ElementRef;

  //* Stage Properties
  @Input() public fieldOfView: number = 1;
  @Input('nearClipping') public nearClippingPane: number = 1;
  @Input('farClipping') public farClippingPane: number = 1000;

  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;
  private model: any;
  private loaderGLTF = new GLTFLoader();
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef!.nativeElement;
  }



  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
    this.createControls();
  }

  private animateModel() {
    if (this.model) {
      this.model.rotation.x += 0.0003;
      this.model.rotation.z += 0.0003;
      this.model.rotation.y += 0.00003;
    }
  }

  private createControls = () => {
    const renderer = new CSS2DRenderer();
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0px';
    document.body.appendChild(renderer.domElement);
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.enableRotate = false;
    this.controls.enablePan = false;
    this.controls.enableZoom = false;
    this.controls.update();
  };
  private directionalLight!: THREE.DirectionalLight;
  private createScene() {
    this.scene = new THREE.Scene();
    this.loaderGLTF.load('assets/img/illustrations/shield_sphere/scene.gltf', (gltf: GLTF) => {
      this.model = gltf.scene.children[0];
      var box = new THREE.Box3().setFromObject(this.model);
      box.getCenter(this.model.position);
      this.model.position.multiplyScalar(-1);
      this.scene.add(this.model);
    });

    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );
    this.camera.position.z = 90;

    this.scene.add(new THREE.AmbientLight(0xFFFFF, 1.5));


    this.createPointLight(0xFFFFF, 0, 200, 0);
    this.createPointLight(0x00e7a7, 500, 500, 0);
    this.createPointLight(0x00e7a7, 0, 100, -500);
    this.createPointLight(0x00e7a7, -500, 300, 500);
    const spotLight = new THREE.SpotLight(0xffffff, 1, 100);
spotLight.position.set(0, 10, 0);
spotLight.target.position.set(0, 0, 0);
    this.scene.add(spotLight);
this.scene.add(spotLight.target);
  }

  private createPointLight(color: number, x: number, y: number, z: number) {
    const light = new THREE.PointLight(color, 10);
    light.position.set(x, y, z);
    this.scene.add(light);
  }


  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }
  

  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    let component: SceneComponent = this;
    (function render() {
      component.renderer.render(component.scene, component.camera);
      component.animateModel();
      requestAnimationFrame(render);
    })();
  }
 
}
