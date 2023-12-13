import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
texts = [ {name:"Bienvenue chez CSI", name1:"votre partenaire de confiance pour des solutions web robustes et performantes."}];
@ViewChild('monElement') monElement: ElementRef | undefined;
isTextTransparent : boolean = true;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (offset > 300) {
      this.isTextTransparent = false;
    } else {
      this.isTextTransparent = true;
    }
  }
}
