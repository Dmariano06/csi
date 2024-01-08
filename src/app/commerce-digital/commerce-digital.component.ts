import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-commerce-digital',
  templateUrl: './commerce-digital.component.html',
  styleUrl: './commerce-digital.component.scss'
})
export class CommerceDigitalComponent {
  public mainHeight = 'auto';

  public onToggleDetails(): void {
    this.mainHeight = 'auto';
    setTimeout(() => {
      this.mainHeight = '100%';
    }, 0);
  }
  public businessStrategies = [
    {
      title: "Simplicité d'Utilisation et Accessibilité",
      content: `Soulignez l'adaptabilité de l'application e-commerce à toutes les tailles d'entreprises, des petites et moyennes aux plus grandes. Proposez une solution abordable, facile à gérer et personnalisable`
    },
    {
      title: "Possibilité d'Expansion Fonctionnelle",
      content: `Explorez les possibilités d'expansion fonctionnelle de votre application e-commerce. Intégrez des fonctionnalités évolutives pour permettre une croissance continue de l'entreprise.`
    },
    {
      title: 'Sécurité Renforcé',
      content: `Explorez la puissance de la sécurité intégrée avec Angular, offrant des fonctionnalités robustes qui assurent un contrôle total sur la protection de vos données sensibles. En collaboration avec Spring Boot, Angular établit des normes de sécurité inégalées pour garantir une application impénétrable.`
    },
  ];
  public isScreenWidthAbove1000px: boolean = window.innerWidth > 1000;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isScreenWidthAbove1000px = window.innerWidth > 1000;
  }
 
}
