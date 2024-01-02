import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-homeslider',
  templateUrl: './homeslider.component.html',
  styleUrl: './homeslider.component.scss'
})
export class HomesliderComponent {

  rights = [
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
      image:'assets/img/illustrations/template8.png'
    }
  ]
  headers = [
    {text: "Explorez le potentiel du", text1:"digital"}
  ]
  faqs = [
    {question:"Comment puis-je contacter le support technique en cas de problème avec le site ou l'application ?", answer:"Vous pouvez contacter notre support technique 24h/24 et 7j/7 via notre formulaire de contact en ligne ou en envoyant un e-mail à "},
    {question:"Quelle est la différence entre un site internet et une application web, et comment choisir la meilleure option pour mes besoins ?", answer:"Un site internet est idéal pour une présence en ligne statique, tandis qu'une application web offre une interactivité avancée. Le choix dépend de vos objectifs spécifiques. Nous pouvons vous guider pour prendre la meilleure décision en fonction de vos besoins."},
    {question:"Quel est le délai de création pour un site web ou une application personnalisée ?", answer:"Les délais de création varient en fonction de la complexité du projet. Cependant, nous travaillons efficacement pour respecter des échéanciers raisonnables. Une fois que nous aurons discuté de vos besoins spécifiques, nous pourrons vous fournir une estimation plus précise du délai de livraison."}
  ]

  developpements = [
    {title:"Réception du projet", text:"À cette étape cruciale, nous écoutons attentivement les exigences du client, établissant ainsi une base solide pour le succès à venir."},
    {title:"Design", text:"Nous donnons vie à la vision digitale tout en intégrant pleinement l'identité que le client souhaite transmettre à ses utilisateurs."},
  ]

  sections = [
    {
      title: 'CraftedWebSite',
      subtitle: 'Applications Web - Puissance et Adaptabilité',
      content: [
        { heading: 'Application Web Angular', description: "Utilisant la puissance d'Angular, nous transformons les conceptions en interfaces interactives, réactives et esthétiques. Conception réactive pour une expérience uniforme sur tous les appareils et tailles d'écrans" },
        { heading: ' Personnalisation Totale', description: "Une application web réalisé avec Angular offre une flexibilité sans égale, permettant une personnalisation complète. Qu'il s'agisse de fonctionnalités spécifiques ou d'un design unique, l'adaptabilité d'Angular répond précisément à vos exigences" },
        { heading: 'Performance Angular', description: "Excellence dans la création d'expériences dynamiques. Le système de routing fluide permet une navigation instantanée, offrant une expérience utilisateur sans heurts. Cette approche dynamique, associée à une gestion efficace de l'état, garantit des performances optimales, surpassant la simplicité des sites vitrines classiques." }
      ],
      imageUrl: '../../assets/img/illustrations/template8.png',
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
      imageUrl: '../../assets/img/illustrations/template7.jpg',
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
animationDuration = 1500;
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