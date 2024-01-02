import { Component, ElementRef } from '@angular/core';
import { ImageloaderService } from '../imageloader.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  lis=[,{name:"Adaptatif et multi-plateformes"},
,{name:"Nombres de pages sur demande"},{}
]
uls=[{name:"Porte d'Entrée Digitale"},];
 /* services = [ {name:"ShowCaseHub", subtitle:"Site Vitrine - Impact Visuel, Coût Abordable", name1title:"Conception Web & Contenu", name1:"Porte d'Entrée Digitale", name2title:"Référencement & Visibilité" ,name2:"Responsive et polyvalent",name3title:"Accompagnement & Suivi:", name3:"Contenu optimisé pour votre activité et performant", name4:"Référencement naturel SEO contrôlé",name5:"Fiche Google My Business", name6:"Indice de perofrmance Google controlé", name7:"Référencement local contrôlé", name8:"Hébergement inclus et stockage illimité",name9:"Contact Disponible 7j/7",name10:"Réponse sous 12h",name11:"Actualisations par e-mail", name12:"Point/Bilan tout les mois"},
  {name:"CraftedWebSite", subtitle:"Applications Web - Puissance et Adaptabilité",name1title:"Conception Web & Contenu", name1:"Porte d'entrée Digitale ", name2title:"Référencement & Visibilité",name2:"Des fonctionnalités sur mesure", name3title:"Évolutivité Potentielle", name3:"Des solutions conçues pour s'adapter et évoluer", nom3:"Nombre de pages sur demande (4 comprises)", nom4:"Optimisation intégrale des contenus ( média, développement, fonctionnalités...)", name6:"Un site entièrement personnalisable"},
   {name:"CommerceDigitalXcellence",subtitle:"E-commerce - Vendez en Ligne avec Style", name1title:"Solutions de Paiement Sécurisées",name1:"Assurez la confiance de vos clients avec des transactions sécurisées.", name2title:"Solutions de Paiement Sécurisées", name2:"Instaurez la confiance avec des solutions de paiement sûres et conformes aux normes de sécurité.",name3title:"Optimisation de l'Expérience", name3:"Des processus d'achat fluides et intuitifs pour maximiser les conversions visiteurs."},
  ]*/

  services = [
    {
      title: 'ShowCaseHub',
      subtitle: 'Site Vitrine',
      price: '$399',
      bestValue: false,
      bgClass: 'bg',
      designTitle: 'Conception Web & Contenu',
      designFeatures: [
        'Landing Page',
        'UI/UX Design',
        'Responsive sur tout les supports',
        'Optimisation des performances'
      ],
      seoTitle: 'Référencement SEO',
      seoFeatures: [
        'Référencement naturel SEO',
        'Fiche Google My Business',
        'Indice de performance Google',
        'Référencement local'
      ],
      supportTitle: 'Accompagnement & Suivi',
      supportFeatures: [
        '24/7 Support',
        'Bug Fixes',
        'Hébergement inclus',
        'Mise à Jour Sécurité',
        'Mise à Jour du Contenu'
      ]
    },
    {
      title: 'CraftedWebSite',
      subtitle: 'Applications Web',
      price: '$1 499',
      bestValue: false,
      bgClass: '1',
      designTitle: 'Conception Web & Contenu',
      designFeatures: [
        'Nombre de page sur demande',
        'Un site entièrement personnalisable (sur mesure)',
        'UI/UX Design',
        'Responsive sur tout les supports',
        'Optimisation de performance'
      ],
      seoTitle: 'Référencement SEO',
      seoFeatures: [
        'Référencement naturel SEO',
        'Fiche Google My Business',
        'Indice de performance Google',
        'Référencement local'
      ],
      supportTitle: 'Accompagnement & Suivi',
      supportFeatures: [
        '24/7 Support',
        'Bug Fixes',
        'Hébergement inclus',
        'Mise à Jour Sécurité',
        'Mise à Jour du Contenu'
      ],
      securityTitle: 'Sécurité en Ligne',
      securityFeatures: [
        '24/7 Support',
        "Assistance Technique en Cas d'Urgence",
        'Protocoles de Communication Sécurisés',
        'Infrastructure Robuste',
        "Contrôles d'Accès"
      ]
    },
    {
      title: 'CommerceDigital',
      subtitle: 'Applications Web',
      price: '$1 499',
      bestValue: false,
      bgClass: '2',
      designTitle: 'Conception Web & Contenu',
      designFeatures: [
        'Personnalisation du nombre de produits',
        'Adaptation à votre gamme',
        'UI/UX Design',
        'Responsive sur tout les supports',
        'Optimisation de performance',
      ],
      seoTitle: 'Référencement SEO',
      seoFeatures: [
        'Référencement naturel SEO',
        'Fiche Google My Business',
        'Indice de performance Google',
        'Référencement local'
      ],
      supportTitle: 'Accompagnement & Suivi',
      supportFeatures: [
        '24/7 Support',
        'Bug Fixes',
        'Hébergement inclus',
        'Mise à Jour Sécurité',
        'Mise à Jour du Contenu',
        "Maintenance continue de votre catalogue"
      ],
      securityTitle: 'Sécurité en Ligne',
      securityFeatures: [
        '24/7 Support',
        "Assistance Technique en Cas d'Urgence",
        'Protocoles de Communication Sécurisés',
        'Infrastructure Robuste',
        "Contrôles d'Accès"
      ]
    }
  ];

}