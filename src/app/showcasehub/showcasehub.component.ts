import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ImageloaderService } from '../imageloader.service';

@Component({
  selector: 'app-showcasehub',
  templateUrl: './showcasehub.component.html',
  styleUrl: './showcasehub.component.scss'
})
export class ShowcasehubComponent {

  constructor(private imagePreloaderService: ImageloaderService,) {

  }
  ngOnInit() {
    this.imagePreloaderService.preloadImage('assets/img/illustrations/showcase.webp');
    this.imagePreloaderService.preloadImage('assets/img/illustrations/showcase.png');
    this.imagePreloaderService.preloadImage('assets/img/illustrations/engagement1.webp');
    this.imagePreloaderService.preloadImage('assets/img/illustrations/engagement1.png');
  }
  public mainHeight = 'auto';

  public onToggleDetails(): void {
    this.mainHeight = 'auto';
    setTimeout(() => {
      this.mainHeight = '100%';
    }, 0);
  }
  public businessStrategies = [
    {
      title: 'Intégration simplifiée du Back-End',
      content: `L'intégration transparente d'Angular avec un backend assure une cohérence totale. La synergie entre les parties frontend et backend offre une expérience utilisateur homogène et performante`
    },
    {
      title: 'Evolution Continue',
      content: `Adaptation Agile: Votre application Angular grandit avec votre entreprise. Des mises à jour régulières garantissent une adaptation constante, alignée sur les évolutions rapides des besoins de votre entreprise.`
    },
    {
      title: 'Sécurité Renforcé',
      content: `Angular intègre des fonctionnalités de sécurité robustes, offrant un contrôle total. Protégez vos données sensibles et assurez-vous une application sécurisée avec les standards de sécurité Angular`
    },
  ];
  public isScreenWidthAbove1000px: boolean = window.innerWidth > 1000;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isScreenWidthAbove1000px = window.innerWidth > 1000;
  }

  @ViewChild('elementCible') private elementCible: ElementRef | undefined;

  scrollToElement() {
    this.elementCible!.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
 
}
