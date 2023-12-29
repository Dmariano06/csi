import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-composant',
  templateUrl: './composant.component.html',
  styleUrl: './composant.component.scss'
})
export class ComposantComponent {
  headers = [
    {text: "Explorez le potentiel du", text1:"digital"}
  ]
  presentations = [
    {text: "Découvrez notre site e-commerce innovant, offrant une gamme exceptionnelle de produits/services.", title:"E-commerce"},
    {text:"Explorez notre application web révolutionnaire, alliant simplicité d'utilisation et fonctionnalités avancées.", title:"Application Web"},
    {text:"Nos sites sur mesure sont conçu avec expertise pour répondre à vos besoins spécifiques.", title:"Site sur mesure"}
  ];
  developpements = [
    {title:"Réception du projet", text:"À cette étape cruciale, nous écoutons attentivement les exigences du client, établissant ainsi une base solide pour le succès à venir."},
    {title:"Design", text:"Nous donnons vie à la vision digitale tout en intégrant pleinement l'identité que le client souhaite transmettre à ses utilisateurs."},
    {title:"Développement", text:"Du design au développement, chaque étape est soigneusement orchestrée pour donner vie à votre site web."},
    {title:"Déploiement", text:"Votre site se concrétise : le déploiement, étape cruciale, pour offrir une présence en ligne exceptionnelle."}
  ]
  features = [
    {number:"10+", text:"Diversité de technologies innovantes"},
    {number:"19+", text:"Modèles prêts à l'emploi pour une efficacité immédiate"}
  ]
  faqs = [
    {question:"Comment puis-je contacter le support technique en cas de problème avec le site ou l'application ?", answer:"Vous pouvez contacter notre support technique 24h/24 et 7j/7 via notre formulaire de contact en ligne ou en envoyant un e-mail à "},
    {question:"Quelle est la différence entre un site internet et une application web, et comment choisir la meilleure option pour mes besoins ?", answer:"Un site internet est idéal pour une présence en ligne statique, tandis qu'une application web offre une interactivité avancée. Le choix dépend de vos objectifs spécifiques. Nous pouvons vous guider pour prendre la meilleure décision en fonction de vos besoins."},
    {question:"Quel est le délai de création pour un site web ou une application personnalisée ?", answer:"Les délais de création varient en fonction de la complexité du projet. Cependant, nous travaillons efficacement pour respecter des échéanciers raisonnables. Une fois que nous aurons discuté de vos besoins spécifiques, nous pourrons vous fournir une estimation plus précise du délai de livraison."}
  ]
scrollOffset = 0;

@HostListener('window:scroll', ['$event'])
onScroll(event: Event): void {
  this.scrollOffset = window.scrollY;
}

}


