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

  //? Scene properties
  private camera!: THREE.PerspectiveCamera;

  private controls!: OrbitControls;

  private ambientLight!: THREE.AmbientLight;

  private light1!: THREE.PointLight;

  private light2!: THREE.PointLight;

  private light3!: THREE.PointLight;

  private light4!: THREE.PointLight;

  private model: any;

  private directionalLight!: THREE.DirectionalLight;

  //? Helper Properties (Private Properties);

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef!.nativeElement;
  }

  private loaderGLTF = new GLTFLoader();

  private renderer!: THREE.WebGLRenderer;

  private scene!: THREE.Scene;

  /**
   *Animate the model
   *
   * @private
   * @memberof ModelComponent
   */
  private animateModel() {
    let i = 0;
    if (this.model) {
     
      this.model.rotation.x += 0.0003;
      this.model.rotation.z += 0.0003;
      this.model.rotation.y += 0.00003;
      
      }
   
  
      
    }
  
  /**
   *create controls
   *
   * @private
   * @memberof ModelComponent
   */
  private createControls = () => {
    const renderer = new CSS2DRenderer();
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0px';
    document.body.appendChild(renderer.domElement);
    this.renderer.setClearColor('red', 1);
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.enableRotate = false;
    this.controls.enablePan = false;
    this.controls.enableZoom = true;

    this.controls.update();
  };

  /**
   * Create the scene
   *
   * @private
   * @memberof CubeComponent
   */
  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
 this.scene.background = new THREE.Color(0x000000);
    this.scene.background.setScalar(0);
    this.loaderGLTF.load('assets/img/illustrations/shield_sphere/scene.gltf', (gltf: GLTF) => {
      this.model = gltf.scene.children[0];
      console.log(this.model);
      var box = new THREE.Box3().setFromObject(this.model);
      box.getCenter(this.model.position); // this re-sets the mesh position
      this.model.position.multiplyScalar(-1);
      this.scene.add(this.model);
    });
    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    )
    // Vous pouvez ajuster cette valeur selon vos besoins

    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 80;
  
    this.ambientLight = new THREE.AmbientLight(0xFFFFF, 0.05);
    this.scene.add(this.ambientLight);
    this.directionalLight = new THREE.DirectionalLight(0x00e7a7, 8);
    this.directionalLight.position.set(0, 1, 0);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
    this.light1 = new THREE.PointLight(0x00e7a7, 10);
    this.light1.position.set(0, 200, 400);
    this.scene.add(this.light1);
    this.light2 = new THREE.PointLight(0x00e7a7, 10);
    this.light2.position.set(500, 100, 0);
    this.scene.add(this.light2);
    this.light3 = new THREE.PointLight(0x00e7a7, 10);
    this.light3.position.set(0, 100, -500);
    this.scene.add(this.light3);
    this.light4 = new THREE.PointLight(0x00e7a7, 10);
    this.light4.position.set(-500, 300, 500);
    this.scene.add(this.light4);
  }
  private vert = 0x00ff00; // Couleur verte

  // ... (le reste de vos méthodes)

  private changeModelColor() {
    const material = new THREE.MeshStandardMaterial({ color: this.vert });

    this.model.traverse((child: any) => {
      if (child instanceof THREE.Mesh) {
        child.material = material;
      }
    });
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
 * Start the rendering loop
 *
 * @private
 * @memberof CubeComponent
 */
  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    let component: SceneComponent = this;
    (function render() {
      component.renderer.render(component.scene, component.camera);
      component.animateModel();
      requestAnimationFrame(render);
    }());
  }

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
    this.createControls();
  }
}
