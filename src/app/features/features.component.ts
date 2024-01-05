import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ImageloaderService } from '../imageloader.service';



@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent  {
  
  constructor( private imagePreloaderService: ImageloaderService) {}

  ngOnInit(): void {
 
    this.imagePreloaderService.preloadImage('assets/img/illustrations/coder.png');
    this.imagePreloaderService.preloadImage('assets/img/illustrations/coder1.png');
  }
}
