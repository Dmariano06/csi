import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FooterService } from '../footer.service';
import { ImageloaderService } from '../imageloader.service';
import { NavigationEnd, Router } from '@angular/router';

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
      right:[
        {
          title:' Sécurité Renforcé',
          text:'Angular intègre des fonctionnalités de sécurité robustes, offrant un contrôle total. Protégez vos données sensibles et assurez-vous une application sécurisée avec les standards de sécurité Angular',
        },
        {
          title:'Intégration Simplifiée du Backend',
          text:"L'intégration transparente d'Angular avec un backend assure une cohérence totale. La synergie entre les parties frontend et backend offre une expérience utilisateur homogène et performante"
        },
        {
          title:' Évolutivité Continue',
          text:'Adaptation Agile: Votre application Angular grandit avec votre entreprise. Des mises à jour régulières garantissent une adaptation constante, alignée sur les évolutions rapides des besoins de votre entreprise.',
        }
      ],
      content: [
        { heading: 'Application Web Angular', description: "Utilisant la puissance d'Angular, nous transformons les conceptions en interfaces interactives, réactives et esthétiques. Conception réactive pour une expérience uniforme sur tous les appareils et tailles d'écrans" },
        { heading: ' Personnalisation Totale', description: "Une application web réalisé avec Angular offre une flexibilité sans égale, permettant une personnalisation complète. Qu'il s'agisse de fonctionnalités spécifiques ou d'un design unique, l'adaptabilité d'Angular répond précisément à vos exigences" },
        { heading: 'Performance Angular', description: "Excellence dans la création d'expériences dynamiques. Le système de routing fluide permet une navigation instantanée, offrant une expérience utilisateur sans heurts. Cette approche dynamique, garantit des performances optimales, surpassant la simplicité des sites vitrines classiques." }
      ],
      imageUrl: '../../assets/img/illustrations/template3.webp',
    },
    {
      title: 'ShowCaseHub',
      subtitle: 'Site Vitrine - Impact Visuel, Coût Abordable',
      content: [
        { heading: 'Visuel Rapide et Efficace', description: 'Choisissez un template rapidement déployable, offrant une flexibilité de design pour répondre à des besoins spécifiques. Assurez-vous que la conception est à la fois esthétique et fonctionnelle.' },
        { heading: 'Rapidité de Mise en Place', description: "Assurez-vous de la facilité et de la rapidité avec lesquelles votre site vitrine peut être mis en place. La simplicité d'accès à votre plateforme est un atout supplémentaire, rendant votre solution attractive et conviviale pour tous." },
        { heading: 'Adapté aux Petites Entreprises', description: 'Soulignez que le site vitrine est parfaitement adapté aux petites entreprises. Son coût abordable, sa gestion facile et son impact visuel en font une solution idéale pour les entreprises de petite envergure.' },
      ],
      imageUrl: '../../assets/img/illustrations/template4.webp',
    },
    {
      title: 'CommerceDigitalXcellence',
      subtitle: 'E-commerce - Vendez en Ligne avec Style',
      right:[
        {
          title:' Sécurité Renforcé',
          text:'Angular intègre des fonctionnalités de sécurité robustes, offrant un contrôle total. Protégez vos données sensibles et assurez-vous une application sécurisée avec les standards de sécurité Angular',
        },
        {
          title:"Simplicité d'Utilisation et Accessibilité",
          text:"L'intégration transparente d'Angular avec un backend assure une cohérence totale. La synergie entre les parties frontend et backend offre une expérience utilisateur homogène et performante"
        },
        {
          title:"Possibilité d'Expansion Fonctionnelle",
          text:"Explorez les possibilités d'expansion fonctionnelle de votre application e-commerce. Intégrez des fonctionnalités évolutives pour permettre une croissance continue de l'entreprise."
        }
      ],
      content: [
        { heading: "Sélection d'un Modèle E-commerce Performant", description: "Choisissez un modèle d'application e-commerce qui offre une performance optimale et une mise en place rapide. Priorisez la convivialité et l'efficacité du design pour une expérience utilisateur exceptionnelle." },
        { heading: "Adapté à Toutes les Tailles d'Entreprises", description: "Soulignez l'adaptabilité de l'application e-commerce à toutes les tailles d'entreprises, des petites et moyennes aux plus grandes. Proposez une solution abordable, facile à gérer et personnalisable" },
        { heading: 'Optimisation des Performances E-commerce', description: "Mettez l'accent sur l'optimisation des performances de votre application e-commerce. Un chargement rapide des pages, une navigation fluide et des transactions sécurisées sont essentiels pour fidéliser la clientèle" }
      ],
      imageUrl: '../../assets/img/illustrations/template5.png',
    },
    
  ];
  constructor(private footerService: FooterService, private imagePreloaderService: ImageloaderService, private router: Router) {}

 
  @ViewChildren('page')
  pages!: QueryList<ElementRef>;
  @ViewChild('prev')
  prev!: ElementRef;
  @ViewChild('next')
  next!: ElementRef;

idlePeriod = 100;
animationDuration = 800;
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

      const pageElement = page.nativeElement;
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

      const pageElement = page.nativeElement;
      if (pageElement) {
        pageElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}
ngOnInit(): void {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      window.scrollTo(0, 0);
    }
  });
  
  this.footerService.toggleFooter(true);
  this.imagePreloaderService.preloadImage('assets/img/illustrations/template5.png');
  this.imagePreloaderService.preloadImage('assets/img/illustrations/template4.png');
  this.imagePreloaderService.preloadImage('assets/img/illustrations/template3.png');
  this.imagePreloaderService.preloadImage('assets/img/illustrations/services.png');
  this.imagePreloaderService.preloadImage('assets/img/illustrations/services2.png');
  this.imagePreloaderService.preloadImage('assets/img/illustrations/services5.png');
}
scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
getRouterLink(index: number): string {
  if (index === 0) {
    return '/craftedwebsite';
  } else if (index === 1) {
    return '/showcasehub';
  } else {
    return '/commerce-digital';
  }
}

}
