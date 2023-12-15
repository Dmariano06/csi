import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [ {name:"ShowCaseHub", name1title:"Design Épuré et Attrayant", name1:"Des sites qui captivent votre audience dès la première impression", name2title:"Performance Optimale" ,name2:"Des pages qui se chargent rapidement pour une expérience utilisateur fluide.",name3title:"Contenu Impactant", name3:"Mettez en avant votre entreprise de manière convaincante et professionnelle avec votre entrerpise"},
  {name:"CraftedWebSite", name1title:"Personnalisable à Souhait", name1:"Un site entièrement personnalisable, ajusté à l'image de votre marque.", name2title:"Fonctionnalités Adaptées",name2:" Des fonctionnalités sur mesure répondant exactement à vos besoins.",name3title:"Évolutivité Potentielle", name3:"Des solutions conçues pour s'adapter et évoluer avec la croissance de votre entreprise."},
   {name:"CommerceDigitalXcellence", name1title:"Boutiques en Ligne Convaincantes",name1:"Des sites qui captivent votre audience dès la première impression.", name2title:"Solutions de Paiement Sécurisées", name2:"Des pages qui se chargent rapidement pour une expérience utilisateur fluide.",name3title:"Gestion Simplifiée", name3:"Mettez en avant votre entreprise de manière convaincante et professionnelle.  entreprise de manière convaincante et professionnelle."},
   {name:"Applications Web Personnalisées - Puissance Technique et Adaptabilité", name1:"Design Épuré et Attrayant: Des sites qui captivent votre audience dès la première impression.", name2:"Performance Optimale: Des pages qui se chargent rapidement pour une expérience utilisateur fluide.", name3:"Contenu Impactant: Mettez en avant votre entreprise de manière convaincante et professionnelle."}
  ]
}