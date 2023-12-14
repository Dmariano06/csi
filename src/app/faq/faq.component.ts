import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs = [
    {question:"Comment puis-je contacter le support technique en cas de problème avec le site ou l'application ?", answer:"Vous pouvez contacter notre support technique 24h/24 et 7j/7 via notre formulaire de contact en ligne ou en envoyant un e-mail à "},
    {question:"Quelle est la différence entre un site internet et une application web, et comment choisir la meilleure option pour mes besoins ?", answer:"Un site internet est idéal pour une présence en ligne statique, tandis qu'une application web offre une interactivité avancée. Le choix dépend de vos objectifs spécifiques. Nous pouvons vous guider pour prendre la meilleure décision en fonction de vos besoins."},
    {question:"Quel est le délai de création pour un site web ou une application personnalisée ?", answer:"Les délais de création varient en fonction de la complexité du projet. Cependant, nous travaillons efficacement pour respecter des échéanciers raisonnables. Une fois que nous aurons discuté de vos besoins spécifiques, nous pourrons vous fournir une estimation plus précise du délai de livraison."}
  ]
}
