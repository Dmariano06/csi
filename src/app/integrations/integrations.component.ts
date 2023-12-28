import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { ImageloaderService } from '../imageloader.service';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';


@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.scss'
})
export class IntegrationsComponent implements OnInit {
  activeSection = 1;
  constructor(private el: ElementRef, private imagePreloaderService: ImageloaderService, @Inject(DOCUMENT) private document: Document, private pageScrollService: PageScrollService) {}

  scrollParallax(event: WheelEvent, section: number): void {
    event.preventDefault(); 

    const deltaY = event.deltaY;
    const nextSection = section + (deltaY > 0 ? 1 : -1);

    if (nextSection > 0 && nextSection <= 3) {
      console.log(nextSection);
      console.log(deltaY);
      const nextElement = document.querySelector(`.parallax${nextSection}`) as HTMLElement;
      if (nextElement) {
        nextElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  fullPageScroll(e: HTMLElement, i:any) {
    this.pageScrollService.scroll({
      scrollTarget: e,
      document: this.document,
    });
    this.activeSection = i;
  }



  scrollDown() {
    this.document.documentElement.scrollTop += window.innerHeight;
  }
  scrollTop() {
    this.document.documentElement.scrollTop -= window.innerHeight;
  }

  ngOnInit() {
    this.imagePreloaderService.preloadImage('assets/img/illustrations/template.png')
      .then(() => {
        console.log('L\'image a été préchargée avec succès.');
      })
      .catch((error) => {
        console.error('Erreur lors du préchargement de l\'image :', error);
      });
      this.imagePreloaderService.preloadImage('assets/img/illustrations/services2.webp');
      this.imagePreloaderService.preloadImage('assets/img/illustrations/template1.png');
      this.imagePreloaderService.preloadImage('assets/img/illustrations/services1.png');
      this.imagePreloaderService.preloadImage('assets/img/illustrations/services5.png');
  }
}
