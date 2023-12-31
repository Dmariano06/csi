import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements AfterViewInit,OnInit{

  ngOnInit() {
    this.checkBrowser();
  }
  
  constructor( private renderer1: Renderer2,private el: ElementRef) { }
  checkBrowser() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      this.renderer1.setStyle(this.el.nativeElement.querySelector('.barnav'), 'height', '60px');
      this.renderer1.setStyle(this.el.nativeElement.querySelector('.barnav'), 'width', '100%');
    }
  }
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
  @ViewChild('canvas', { static: true }) private canvasRef!: ElementRef;

  @Input() public fieldOfView: number = 1;

  @Input('nearClipping') public nearClippingPane: number = 1;

  @Input('farClipping') public farClippingPane: number = 1000;

  private camera!: THREE.PerspectiveCamera;

  private controls!: OrbitControls;

  private ambientLight!: THREE.AmbientLight;

  private light1!: THREE.PointLight;

  private light2!: THREE.PointLight;

  private light3!: THREE.PointLight;

  private light4!: THREE.PointLight;

  private model: any;

  private directionalLight!: THREE.DirectionalLight;



  private get canvas(): HTMLCanvasElement {
    return this.canvasRef!.nativeElement;
  }

  private loaderGLTF = new GLTFLoader();

  private renderer!: THREE.WebGLRenderer;

  private scene!: THREE.Scene;
  
  private animateModel() {
    let i = 0;
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
    this.renderer.setClearColor('red', 1);
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.enableRotate = false;
    this.controls.enablePan = false;
    this.controls.enableZoom = true;

    this.controls.update();
  };

  private createScene() {
    this.scene = new THREE.Scene();
 this.scene.background = new THREE.Color(0x000000);
    this.scene.background.setScalar(0);
    this.loaderGLTF.load('assets/img/illustrations/shield_sphere/scene.gltf', (gltf: GLTF) => {
      this.model = gltf.scene.children[0];
      console.log(this.model);
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
    )

    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 90;
  
    this.ambientLight = new THREE.AmbientLight(0xFFFFF, 0.005);
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
  private vert = 0x00ff00;
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
    }());
  }


  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
    this.createControls();
  }
}
