import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { ImageloaderService } from '../imageloader.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.scss'
})
export class IntegrationsComponent implements OnInit {
  constructor(private el: ElementRef, private imagePreloaderService: ImageloaderService, @Inject(DOCUMENT) private document: Document) {}

  scrollParallax(event: WheelEvent, section: number): void {
    event.preventDefault(); // Empêche le défilement par défaut

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



  scrollDown() {
    this.document.documentElement.scrollTop += window.innerHeight;
  }
  scrollTop() {
    this.document.documentElement.scrollTop -= window.innerHeight;
  }

  ngOnInit() {
    // Remplacez 'path/to/image.jpg' par le chemin réel de votre image
    this.imagePreloaderService.preloadImage('assets/img/illustrations/template.png')
      .then(() => {
        console.log('L\'image a été préchargée avec succès.');
      })
      .catch((error) => {
        console.error('Erreur lors du préchargement de l\'image :', error);
      });
      this.imagePreloaderService.preloadImage('assets/img/illustrations/services2.png');
      this.imagePreloaderService.preloadImage('assets/img/illustrations/services1.png');
      this.imagePreloaderService.preloadImage('assets/img/illustrations/services5.png');
  }
}
