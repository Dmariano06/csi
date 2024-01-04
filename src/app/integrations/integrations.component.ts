import { Component } from '@angular/core';



@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.scss'
})
export class IntegrationsComponent {

  sections = [
    {
      title: 'CraftedWebSite',
      subtitle: 'Applications Web - Puissance et Adaptabilité',
      content: [
        { heading: 'Application Web Angular', description: "Utilisant la puissance d'Angular, nous transformons les conceptions en interfaces interactives, réactives et esthétiques. Conception réactive pour une expérience uniforme sur tous les appareils et tailles d'écrans" },
        { heading: ' Personnalisation Totale', description: "Une application web réalisé avec Angular offre une flexibilité sans égale, permettant une personnalisation complète. Qu'il s'agisse de fonctionnalités spécifiques ou d'un design unique, l'adaptabilité d'Angular répond précisément à vos exigences" },
        { heading: 'Performance Angular', description: "Excellence dans la création d'expériences dynamiques. Le système de routing fluide permet une navigation instantanée, offrant une expérience utilisateur sans heurts. Cette approche dynamique, associée à une gestion efficace de l'état, garantit des performances optimales, surpassant la simplicité des sites vitrines classiques." }
      ],
    },
    {
      content: [
        {heading:'Sécurité Renforcé', description: "Angular intègre des fonctionnalités de sécurité robustes, offrant un contrôle total. Protégez vos données sensibles et assurez-vous une application sécurisée avec les standards de sécurité Angular" },
        {heading:'Intégration Simplifiée du Backend', description: "L'intégration transparente d'Angular avec un backend assure une cohérence totale. La synergie entre les parties frontend et backend offre une expérience utilisateur homogène et performante" },
        {heading:'Évolutivité Continue', description: "Adaptation Agile: Votre application Angular grandit avec votre entreprise. Des mises à jour régulières garantissent une adaptation constante." }
      ],
      imageUrl: 'assets/img/illustrations/template3.png',
    },
    {
      title: 'ShowCaseHub',
      subtitle: 'Site Vitrine - Impact Visuel, Coût Abordable',
      content: [
        { heading: 'Visuel Rapide et Efficace', description: 'Choisissez un template rapidement déployable, offrant une flexibilité de design pour répondre à des besoins spécifiques. Assurez-vous que la conception est à la fois esthétique et fonctionnelle.' },
        { heading: 'Rapidité de Mise en Place', description: "Assurez-vous de la facilité et de la rapidité avec lesquelles votre site vitrine peut être mis en place. La simplicité d'accès à votre plateforme est un atout supplémentaire, rendant votre solution attractive et conviviale pour tous." },
        { heading: 'Adapté aux Petites Entreprises', description: 'Soulignez que le site vitrine est parfaitement adapté aux petites entreprises. Son coût abordable, sa gestion facile et son impact visuel en font une solution idéale pour les entreprises de petite envergure.' },
      ],
    imageUrl: 'assets/img/illustrations/template.png',
    },
    {
      title: 'CommerceDigitalXcellence',
      subtitle: 'E-commerce - Vendez en Ligne avec Style',
      right:[
        {
          title:' Sécurité Renforcé',
          text:'Angular intègre des fonctionnalités de sécurité robustes, offrant un contrôle total. Protégez vos données sensibles et assurez-vous une application sécurisée avec les standards de sécurité Angular',
        },
        {
          title:"Simplicité d'Utilisation et Accessibilité",
          text:"L'intégration transparente d'Angular avec un backend assure une cohérence totale. La synergie entre les parties frontend et backend offre une expérience utilisateur homogène et performante"
        },
        {
          title:"Possibilité d'Expansion Fonctionnelle",
          text:"Explorez les possibilités d'expansion fonctionnelle de votre application e-commerce. Intégrez des fonctionnalités évolutives pour permettre une croissance continue de l'entreprise."
        }
      ],
      content: [
        { heading: "Sélection d'un Modèle E-commerce Performant", description: "Choisissez un modèle d'application e-commerce qui offre une performance optimale et une mise en place rapide. Priorisez la convivialité et l'efficacité du design pour une expérience utilisateur exceptionnelle." },
        { heading: "Adapté à Toutes les Tailles d'Entreprises", description: "Soulignez l'adaptabilité de l'application e-commerce à toutes les tailles d'entreprises, des petites et moyennes aux plus grandes. Proposez une solution abordable, facile à gérer et personnalisable" },
        { heading: 'Optimisation des Performances E-commerce', description: "Mettez l'accent sur l'optimisation des performances de votre application e-commerce. Un chargement rapide des pages, une navigation fluide et des transactions sécurisées sont essentiels pour fidéliser la clientèle" }
      ],
      imageUrl: 'assets/img/illustrations/template5.png',
    },
    {
           content: [
        { heading: "Sécurité Renforcé", description: "Angular intègre des fonctionnalités de sécurité robustes, offrant un contrôle total. Protégez vos données sensibles et assurez-vous une application sécurisée avec les standards de sécurité Angular" },
        { heading: "Simplicité d'Utilisation et Accessibilité", description: "Soulignez l'adaptabilité de l'application e-commerce à toutes les tailles d'entreprises, des petites et moyennes aux plus grandes. Proposez une solution abordable, facile à gérer et personnalisable" },
        { heading: "Possibilité d'Expansion Fonctionnelle", description: "Explorez les possibilités d'expansion fonctionnelle de votre application e-commerce. Intégrez des fonctionnalités évolutives pour permettre une croissance continue de l'entreprise." }
      ],
      imageUrl: 'assets/img/illustrations/template5.png',
    },
  ];
}
