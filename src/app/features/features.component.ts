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
        animate('2.5s ease-in-out')
      ]),
    ]),
  ],
})
export class FeaturesComponent {
texts = [ {name:"Bienvenue chez CSI", name1:"votre partenaire de confiance pour des solutions web robustes et performantes."}];
services = [{name:'Application web', name1:"Votre entreprise est unique, et votre présence en ligne devrait l'être aussi. Notre service d'application web sur mesure offre une personnalisation inégalée par rapport aux sites vitrines traditionnels"},{name:'ATOUTS', name1:" Là où un site vitrine offre une présentation standard, notre application web sur mesure va bien au-delà, offrant une expérience unique à vos visiteurs.",img:""}];
webapps = [{name:'Title', name1:"Imaginez un site qui évolue avec votre entreprise, qui s'adapte à vos besoins spécifiques, et qui reflète véritablement votre identité."},{name:'Title', name1:"Vous ne serez pas limité par des modèles prédéfinis. Chaque aspect de votre application est pensé et adapté à vos exigences uniques."}];
others=[{name:'Title', name1:'description',img:"assets/img/illustrations/feature5.png"},{name:'Title', name1:'description',img:"assets/img/illustrations/feature2.png"},{name:'Title', name1:'description',img:"assets/img/illustrations/features.png"}]

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
    const triggerPosition = 500;

    if (scrollPosition > triggerPosition) {
      this.animationState = 'in';
    } else {
      this.animationState = 'void';
    }
  }
}
