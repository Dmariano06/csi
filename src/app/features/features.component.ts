import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
  animations: [
    trigger('slideAnimation', [
      state('in', style({transform:'translateX(0%)', opacity: 1})),
      transition('void => *', [
        style({ transform:'translateX(150%)',opacity: 0 }),
        animate('1s ease-in-out')
      ]),
    ]),
  ],
})
export class FeaturesComponent {
texts = [ {name:"Bienvenue chez CSI", name1:"votre partenaire de confiance pour des solutions web robustes et performantes."}];
services = [{name:'Quel site pour vous?', name1:"Chaque solution a ses avantages distincts, et notre équipe est prête à vous guider dans le choix qui correspond le mieux à vos objectifs, en mettant en avant les forces de chaque approche pour garantir le succès de votre projet"},{name:'Site Web Statique', name1:"Principalement axé sur la présentation d'informations et la représentation de l'entreprise en ligne. Il vise à informer les visiteurs sur les produits ou services.",img:""},];
webapps = [{name:'Application web', name1:"Orientée vers l'interaction et l'engagement des utilisateurs. Elle offre une expérience plus dynamique et souvent personnalisée, mettant l'accent sur l'interaction utilisateur."},{name:'E-Commerce', name1:"Centré sur la vente en ligne de produits ou services. L'accent est mis sur la création d'une expérience d'achat fluide et sécurisée."}];
others=[{name:'Site Vitrine - Impact Visuel, Coût Abordable', name1:"Création d'une première impression mémorable en toute simplicité. Optez pour la rapidité et la simplicité avec des designs élégants qui captent l'essence de votre entreprise dès le premier regard. Un moyen efficace d'être en ligne rapidement sans sacrifier l'esthétique.",img:"assets/img/illustrations/feature5.png", subtitle:"ShowCaseHub"},{name:'Applications Web - Puissance et Adaptabilité', name1:'Pour ceux qui cherchent à se démarquer avec une expérience utilisateur totalement personnalisée, nos applications web avec Angular sont la solution idéale. Bien que le processus puisse être plus complexe, chaque étape est minutieusement orchestrée pour répondre à vos besoins spécifiques. La personnalisation à 100% garantit que votre application reflète exactement votre vision, offrant une expérience utilisateur unique et sur mesure.',img:"assets/img/illustrations/feature2.png", subtitle:"CraftedWebSite"},{name:'E-commerce - Vendez en Ligne avec Style', name1:"Commerce en ligne sans compromis. Pour les sites e-commerce, nous proposons une solution qui allie rapidité de conception avec Bootstrap Studio et une technologie comme Rebflo pour maximiser la performance. Vous bénéficiez d'une interface intuitive et d'une gestion simplifiée des produits, créant ainsi une expérience d'achat en ligne sans compromis entre la facilité et la performance.",img:"assets/img/illustrations/features.png", subtitle:"CommerceDigitalXcellence"}]

isTextTransparent : boolean = true;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (offset > 0) {
      this.isTextTransparent = false;
    } else {
      this.isTextTransparent = true;
    }
  }
  animationState = 'in';

  @HostListener('window:scroll', [])
  onWindowSrcroll() {
    const scrollPosition = window.scrollY;
    // Ajustez la valeur de défilement à partir de laquelle l'image doit apparaître
    const triggerPosition =300;

    if (scrollPosition > triggerPosition) {
      this.animationState = 'in';
    }
     else {
      this.animationState = 'void';
    }
  }
}
