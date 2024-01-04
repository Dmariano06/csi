import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-blackhole',
  templateUrl: './blackhole.component.html',
  styleUrl: './blackhole.component.scss'
})
export class BlackholeComponent{
  cells = [1, 2, 3, 4,5 ,6];
  currentRotation = 0;
  activeCellIndex = 0;
  carouselTransform = 'translateZ(-804px) rotateY(0deg)';

  ngOnInit() {
    this.startAutomaticRotation();
  }

  getCellTransform(index: number): string {
    const rotationY = index * 60;
    const translateZ = window.innerWidth < 600 ? 354 : 654;
    return `rotateY(${rotationY}deg) translateZ(${translateZ}px)`;
  }

  getImageUrl(index: number): string {
    return `assets/img/illustrations/template${index}.png`;
  }

  startAutomaticRotation() {
    setInterval(() => {
      this.currentRotation += 60;
      this.activeCellIndex = (this.activeCellIndex + 1) % this.cells.length;
      this.carouselTransform = `translateZ(-954px) rotateY(${this.currentRotation}deg)`;
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
    this.carouselTransform = `translateZ(-954px) rotateY(${this.currentRotation}deg)`;
  }
}
