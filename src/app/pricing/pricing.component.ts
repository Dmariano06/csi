import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent implements OnInit {
  offers = [
    { name: 'ShowcaseHub', price: '$400', features: ['Lectus ut nibh quam', 'Ante nec venenatis etiam lacinia', 'Porta suscipit netus ad ac'] },
    { name: 'CraftedWebSite', price: '$400', features: ['Lectus ut nibh quam', 'Ante nec venenatis etiam lacinia', 'Porta suscipit netus ad ac'] },
    { name: 'CommerceDigitalXcellence', price: '$400', features: ['Lectus ut nibh quam', 'Ante nec venenatis etiam lacinia', 'Porta suscipit netus ad ac'] }
    // Ajoutez d'autres offres ici
];

ngOnInit() {
    // Initialisation du composant
}
}
