import { Component, ElementRef } from '@angular/core';
import { ImageloaderService } from '../imageloader.service';


@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.scss'
})
export class IntegrationsComponent {
  constructor(private el: ElementRef, private imagePreloaderService: ImageloaderService) {}

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


  ngOnInit() {
    // Remplacez 'path/to/image.jpg' par le chemin réel de votre image
    this.imagePreloaderService.preloadImage('assets/img/illustrations/template.png')
      .then(() => {
        console.log('L\'image a été préchargée avec succès.');
      })
      .catch((error) => {
        console.error('Erreur lors du préchargement de l\'image :', error);
      });
      this.imagePreloaderService.preloadImage('assets/img/illustrations/services2.webp');
      this.imagePreloaderService.preloadImage('assets/img/illustrations/services1.webp');
      this.imagePreloaderService.preloadImage('assets/img/illustrations/services.webp');
  }
}
