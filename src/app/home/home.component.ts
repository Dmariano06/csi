import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  headers = [
    {text: "Explorez le potentiel du", text1:"digital"}
  ]
  presentations = [
    {text: "Découvrez notre site e-commerce innovant, offrant une gamme exceptionnelle de produits/services.", title:"E-commerce"},
    {text:"Explorez notre application web révolutionnaire, alliant simplicité d'utilisation et fonctionnalités avancées.", title:"Application Web"},
    {text:"Nos sites sur mesure sont conçu avec expertise pour répondre à vos besoins spécifiques.", title:"Site sur mesure"}
  ];

scrollOffset = 0;
lastScrollTop = 0;

constructor(private renderer: Renderer2, private el: ElementRef) {}

@HostListener('window:scroll', [])
onWindowScroll() {
  const scrollPosition = window.scrollY;
  const blurValue = Math.min(scrollPosition / 10, 20);
  this.renderer.setStyle(this.el.nativeElement.querySelector('.scroll-blur'), 'filter', `blur(${blurValue}px)`);
}

}

