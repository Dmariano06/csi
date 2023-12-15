import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent implements OnInit {
  offers = [
    { name: 'ShowcaseHub', price: '$400', features: ['Site vitrine responsive et design', '4 pages','Maintenance', 'Design standard','Hébergement','Référencement naturel SEO','Performance Optimame'  ]},
    { name: 'CraftedWebSite', price: '$400', features: ['Application Web sur mesure', 'Nombre de pages sur demande','Hébergement', 'Design illimité', 'fonctionnalités illimité', 'Possibilité devolution en appli web full stack'] },
    { name: 'CommerceDigitalXcellence', price: '$400', features: ['Site e-commerce', 'Design Standard', 'Personnalisation limitée', 'Possibilité dupgrade app web e-commerce full stack','MAJ','Maintenance'] }
    // Ajoutez d'autres offres ici
];

ngOnInit() {
    // Initialisation du composant
}
}
