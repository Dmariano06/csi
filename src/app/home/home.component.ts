import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  headers = [
    {text: "Explorez le potentiel du", text1:"digital"}
  ]
  presentations = [
    {text: "Découvrez notre site e-commerce innovant, offrant une gamme exceptionnelle de produits/services.", title:"E-commerce"},
    {text:"Explorez notre application web révolutionnaire, alliant simplicité d'utilisation et fonctionnalités avancées.", title:"Application Web"},
    {text:"Nos sites sur mesure sont conçu avec expertise pour répondre à vos besoins spécifiques.", title:"Site sur mesure"}
  ];
 

scrollOffset = 0;

@HostListener('window:scroll', ['$event'])
onScroll(event: Event): void {
  this.scrollOffset = window.scrollY;
}

}
