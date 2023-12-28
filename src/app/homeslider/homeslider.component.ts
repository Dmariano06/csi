import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-homeslider',
  templateUrl: './homeslider.component.html',
  styleUrl: './homeslider.component.scss'
})
export class HomesliderComponent {

  sections = [
    {
      title: 'CraftedWebSite',
      subtitle: 'Applications Web - Puissance et Adaptabilité',
      content: [
        { heading: 'Consultation Personnalisée', description: 'Nous entamons chaque projet par une consultation approfondie pour garantir une solution parfaitement adaptée' },
        { heading: 'Tests et Assurance Qualité', description: 'Chaque projet subit des tests rigoureux pour assurer la qualité, la compatibilité et la sécurité' },
        { heading: 'Développement Backend avec Spring Boot', description: 'Spring Boot assure la stabilité et la performance du côté serveur. Nous mettons en œuvre des fonctionnalités avancées tout en garantissant la sécurité et l\'évolutivité' },
      ],
      imageUrl: '../../assets/img/illustrations/template1.png',
    },
    {
      title: 'ShowCaseHub',
      subtitle: 'Site Vitrine - Impact Visuel, Coût Abordable',
      content: [
        { heading: 'Design Élégant', description: 'Des designs épurés et élégants qui captent l\'essence de votre entreprise' },
        { heading: 'Rapidité de Mise en Place', description: 'Obtenez votre présence en ligne rapidement sans compromettre la qualité' },
        { heading: 'Adapté aux Petites Entreprises', description: 'Parfait pour les petites entreprises cherchant une solution abordable et efficace' },
      ],
      imageUrl: '../../assets/img/illustrations/template.png',
    },
    {
      title: 'CommerceDigitalXcellence',
      subtitle: 'E-commerce - Vendez en Ligne avec Style',
      content: [
        { heading: 'Conception Intuitive', description: 'Interface utilisateur conviviale pour une expérience d\'achat sans tracas' },
        { heading: 'Performance Maximale', description: 'Utilisation de technologies modernes pour une navigation rapide et une gestion simplifiée des produits' },
        { heading: 'Sécurité Renforcée', description: 'Protégez vos clients avec des solutions e-commerce sécurisées' },
      ],
      imageUrl: '../../assets/img/illustrations/template7.png',
    },
  ];
  constructor(private footerService: FooterService) {}

  ngOnInit(): void {
 
    this.footerService.toggleFooter(true);
  }
 
  @ViewChildren('page')
  pages!: QueryList<ElementRef>;
  @ViewChild('prev')
  prev!: ElementRef;
  @ViewChild('next')
  next!: ElementRef;

idlePeriod = 100;
animationDuration = 1050;
lastAnimation = 0;
index = 0;

togglePageContent(index: number, state: string) {
  const page = this.pages.toArray()[index];
  if (page) {
    const pageContent = page.nativeElement.querySelector('.page-content');
    if (pageContent) {
      if (state === 'show') {
        pageContent.classList.add('show');
      } else {
        pageContent.classList.remove('show');
      }
    }
  }
}

ngAfterViewInit() {
  this.togglePageContent(0, 'show');
}

clickPrev() {
  if (this.index < 1 || !this.pages) return;

  this.togglePageContent(this.index, 'hide');
  this.index--;

  this.pages.forEach((page, i) => {
    if (i === this.index) {
      this.togglePageContent(i, 'show');

      const pageElement = page?.nativeElement;
      if (pageElement) {
        pageElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

clickNext() {
  if (this.index > 1 || !this.pages) return;

  this.togglePageContent(this.index, 'hide');
  this.index++;

  this.pages.forEach((page, i) => {
    if (i === this.index) {
      this.togglePageContent(i, 'show');

      const pageElement = page?.nativeElement;
      if (pageElement) {
        pageElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

@HostListener('wheel', ['$event'])
onMouseWheel(event: WheelEvent) {
  const delta = event.deltaY;
  const timeNow = new Date().getTime();

  if (timeNow - this.lastAnimation < this.idlePeriod + this.animationDuration) {
    event.preventDefault();
    return;
  }

  if (delta > 0 && this.next) {
    this.next.nativeElement.click();
  } else if (delta < 0 && this.prev) {
    this.prev.nativeElement.click();
  }

  this.lastAnimation = timeNow;
}
}