import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [ {name:"ShowCaseHub", subtitle:"Site Vitrine - Impact Visuel, Coût Abordable", name1title:"Design Épuré et Attrayant", name1:"Des sites qui captivent votre audience dès la première impression", name2title:"Performance Optimale" ,name2:"Des pages qui se chargent rapidement pour une expérience utilisateur fluide.",name3title:"Contenu Impactant", name3:"Mettez en avant votre entreprise de manière convaincante et professionnelle avec votre entrerpise"},
  {name:"CraftedWebSite", subtitle:"Applications Web - Puissance et Adaptabilité",name1title:"Personnalisable à Souhait", name1:"Un site entièrement personnalisable, ajusté à l'image de votre marque.", name2title:"Fonctionnalités Adaptées",name2:" Des fonctionnalités sur mesure répondant exactement à vos besoins.", name3title:"Évolutivité Potentielle", name3:"Des solutions conçues pour s'adapter et évoluer avec la croissance de votre entreprise."},
   {name:"CommerceDigitalXcellence",subtitle:"E-commerce - Vendez en Ligne avec Style", name1title:"Solutions de Paiement Sécurisées",name1:"Assurez la confiance de vos clients avec des transactions sécurisées.", name2title:"Solutions de Paiement Sécurisées", name2:"Instaurez la confiance avec des solutions de paiement sûres et conformes aux normes de sécurité.",name3title:"Optimisation de l'Expérience", name3:"Des processus d'achat fluides et intuitifs pour maximiser les conversions visiteurs."},
   {name:"FullStackCrafters",subtitle:"Application Web Full Stack - Un Monde d'Innovations",name1title:"Développement Complet (Full Stack)", name1:" Des applications web personnalisées, du front-end esthétique au back-end puissant", name2title:"Fonctionnalités sur mesure", name2:"Des fonctionnalités développées spécifiquement pour répondre à vos exigences uniques.", name3title:"Données Dynamiques : ",name3:" Découvrir comment notre expertise full stack peut redéfinir l'interaction client."}
  ]
}