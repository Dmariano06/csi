import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ImageloaderService } from '../imageloader.service';
import { NavigationEnd, Router } from '@angular/router';



@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent  {

  constructor( private imagePreloaderService: ImageloaderService,private router: Router) {}
  navigateTo(route: string) {
    this.router.navigate([route]);
  this.scrollToTop();
}
scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    this.imagePreloaderService.preloadImage('assets/img/illustrations/coder.webp');
    this.imagePreloaderService.preloadImage('assets/img/illustrations/coder1.webp');
  }
  
}
