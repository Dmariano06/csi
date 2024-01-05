import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ImageloaderService } from '../imageloader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  headers = [
    {text: "Explorez le potentiel du", text1:"digital"}
  ]
  presentations = [
    {text:"Découvrez nos sites sur mesure, alliant simplicité d'utilisation et fonctionnalités avancées.", title:"Application Web"},
    {text:"Nos sites web statiques sont conçu avec expertise pour répondre à vos besoins spécifiques.", title:"Site Vitrine"},
    {text: "Choisissez une plateforme e-commerce novatrice, offrant une gamme exceptionnelle de gestion de produits.", title:"Site E-commerce"}
  ];

scrollOffset = 0;
lastScrollTop = 0;

constructor(private renderer: Renderer2, private el: ElementRef, private imagePreloaderService: ImageloaderService) {}

ngOnInit() {
  this.imagePreloaderService.preloadImage('assets/img/illustrations/header.png');
  this.imagePreloaderService.preloadImage('assets/img/illustrations/header.webp');
}

@HostListener('window:scroll', [])
onWindowScroll() {
  const scrollPosition = window.scrollY;
  const blurValue = Math.min(scrollPosition / 20, 30);
  this.renderer.setStyle(this.el.nativeElement.querySelector('.scroll-blur'), 'filter', `blur(${blurValue}px)`);
}


}

