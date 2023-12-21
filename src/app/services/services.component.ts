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
  constructor(private imagePreloaderService: ImageloaderService) { }

  ngOnInit() {
    // Remplacez 'path/to/image.jpg' par le chemin réel de votre image
    this.imagePreloaderService.preloadImage('path/to/image.jpg')
      .then(() => {
        console.log('L\'image a été préchargée avec succès.');
      })
      .catch((error) => {
        console.error('Erreur lors du préchargement de l\'image :', error);
      });
  }
  services = [
    {
      title: 'ShowCaseHub',
      subtitle: 'Site Vitrine - Impact Visuel, Coût Abordable',
      price: '$399',
      bestValue: false,
      bgClass: 'bg',
      designTitle: 'Conception Web & Contenu',
      designFeatures: [
        "Porte d'entrée Digital",
        'UI/UX Design',
        'Responsive et polyvalent',
      ],
      seoTitle: 'SEO Features',
      seoFeatures: [
        'Référencement naturel SEO',
        'Fiche Google My Business',
        'Indice de perofrmance Google',
        'Référencement local'
      ],
      supportTitle: 'Accompagnement & Suivi',
      supportFeatures: [
        '24/7 Support',
        'Bug Fixes',
        'Security Updates',
        'Content Updates'
      ]
    },
    {
      title: 'CraftedWebSite',
      subtitle: 'Applications Web - Puissance et Adaptabilité',
      price: '$1 499',
      bestValue: false,
      bgClass: '1',
      designTitle: 'Design Features',
      designFeatures: [
        "Porte d'entrée Digitale",
        'UI/UX Design',
        'Responsive et polyvalent',
        'Un site entièrement personnalisable (sur mesure)',
        'Nombre de pages sur demande'
      ],
      seoTitle: 'SEO Features',
      seoFeatures: [
        'Référencement naturel SEO',
        'Fiche Google My Business',
        'Indice de perofrmance Google',
        'Référencement local'
      ],
      supportTitle: 'Support Features',
      supportFeatures: [
        '24/7 Support',
        'Bug Fixes',
        'Security Updates',
        'Content Updates'
      ]
    },
    {
      title: 'CommercialDigital',
      subtitle: 'E-commerce - Vendez en Ligne avec Style',
      price: '$1 499',
      bestValue: false,
      bgClass: '2',
      designTitle: 'Design Features',
      designFeatures: [
        'Responsive Design',
        'UI/UX Design',
        'Custom Graphics',
        'Animations'
      ],
      seoTitle: 'SEO Features',
      seoFeatures: [
        'Référencement naturel SEO',
        'Fiche Google My Business',
        'Indice de perofrmance Google',
        'Référencement local'
      ],
      supportTitle: 'Support Features',
      supportFeatures: [
        '24/7 Support',
        'Bug Fixes',
        'Security Updates',
        'Content Updates'
      ]
    }
  ];

}