import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';
import { ImageloaderService } from '../imageloader.service';

@Component({
  selector: 'app-blackhole',
  templateUrl: './blackhole.component.html',
  styleUrl: './blackhole.component.scss'
})
export class BlackholeComponent{
  constructor( private imagePreloaderService: ImageloaderService) {}

  cells = [1, 2, 3, 4,5 ,6];
  currentRotation = 0;
  activeCellIndex = 0;
  carouselTransform = 'translateZ(-804px) rotateY(0deg)';

  ngOnInit() {

      this.imagePreloaderService.preloadImage('assets/img/illustrations/template5.png');
      this.imagePreloaderService.preloadImage('assets/img/illustrations/template4.png');
      this.imagePreloaderService.preloadImage('assets/img/illustrations/template3.png');
      this.imagePreloaderService.preloadImage('assets/img/illustrations/template2.png');
      this.imagePreloaderService.preloadImage('assets/img/illustrations/template1.png');
      this.imagePreloaderService.preloadImage('assets/img/illustrations/template0.png');
      this.imagePreloaderService.preloadImage('assets/img/illustrations/passioncode.png');
    
    this.startAutomaticRotation();
  }

  getCellTransform(index: number): string {
    const rotationY = index * 60;
    const translateZ = window.innerWidth < 600 ? 404 : 804;
    return `rotateY(${rotationY}deg) translateZ(${translateZ}px)`;
  }
  getImageUrl(index: number): string {
    return `assets/img/illustrations/template${index}.png`;
  }
  

  startAutomaticRotation() {
    setInterval(() => {
      this.currentRotation += 60;
      this.activeCellIndex = (this.activeCellIndex + 1) % this.cells.length;
      this.carouselTransform = `translateZ(-804px) rotateY(${this.currentRotation}deg)`;
    }, 3000);
  }
  nextCell() {
    this.activeCellIndex = (this.activeCellIndex + 1) % this.cells.length;
    this.currentRotation += 60;
    this.carouselTransform = ` rotateY(${this.currentRotation}deg)`;
  }

  prevCell() {
    this.activeCellIndex = (this.activeCellIndex - 1 + this.cells.length) % this.cells.length;
    this.currentRotation -= 60;
    this.carouselTransform = `translateZ(-904px) rotateY(${this.currentRotation}deg)`;
  }
}
