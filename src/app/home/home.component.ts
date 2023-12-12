import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  headers = [
    {text: "Explorez le potentiel du", text1:"digital"}
  ]
  presentations = [
    {text: "Découvrez notre site e-commerce innovant, offrant une gamme exceptionnelle de produits/services.", title:"E-commerce"},
    {text:"Explorez notre application web révolutionnaire, alliant simplicité d'utilisation et fonctionnalités avancées.", title:"Application Web"},
    {text:"Nos sites sur mesure sont conçu avec expertise pour répondre à vos besoins spécifiques.", title:"Site sur mesure"}
  ];
  developpements = [
    {title:"Réception du projet", text:"Réception professionnelle du projet."},
    {title:"Design", text:"Besoin client compris, prêts pour la conception.."},
    {title:"Développement", text:"Du design au développement, le site prend vie."},
    {title:"Déploiement", text:"Votre site se concrétise : le déploiement, étape cruciale, pour offrir une présence en ligne exceptionnelle."}
  ]
  features = [
    {number:"10+", text:"Diversité de technologies innovantes"},
    {number:"19+", text:"Modèles prêts à l'emploi pour une efficacité immédiate"}
  ]
  faqs = [
    {question:"Comment puis-je contacter le support technique en cas de problème avec le site ou l'application ?", answer:"Vous pouvez contacter notre support technique 24h/24 et 7j/7 via notre formulaire de contact en ligne ou en envoyant un e-mail à "},
    {question:"Quelle est la différence entre un site internet et une application web, et comment choisir la meilleure option pour mes besoins ?", answer:"Un site internet est idéal pour une présence en ligne statique, tandis qu'une application web offre une interactivité avancée. Le choix dépend de vos objectifs spécifiques. Nous pouvons vous guider pour prendre la meilleure décision en fonction de vos besoins."},
    {question:"Quel est le délai de création pour un site web ou une application personnalisée ?", answer:"Les délais de création varient en fonction de la complexité du projet. Cependant, nous travaillons efficacement pour respecter des échéanciers raisonnables. Une fois que nous aurons discuté de vos besoins spécifiques, nous pourrons vous fournir une estimation plus précise du délai de livraison."}
  ]
  /*image2="../../assets/img/illustrations/Le_pape_de_Jsus_design_paintmodernworkinguxuidecoration3dvector_60f9559b-8337-4ef8-9cde-c9851e6b68a2 - Modifié.png";
  image1="assets/img/Le_pape_de_Jsus_rocket_after_launch_with_smoke_below_modern_uxu_1183455e-054a-44a5-ad9a-fe422630038d.webp";
  image11="assets/img/Le_pape_de_Jsus_rocket_after_launch_with_smoke_below_modern_uxu_1183455e-054a-44a5-ad9a-fe422630038d.png";
  image3="../../assets/img/illustrations/Le_pape_de_Jsus_developpementmodernworkinguxuidecoration3dvecto_ee2908ff-4600-43ca-97f8-82cb4afeedfd - Modifié.png";
  image4 = "../../assets/img/illustrations/Le_pape_de_Jsus_modern_working_ux_ui_decoration_2d_vector_art_c_f27fa1ac-a22d-449c-91cb-da7f473d333c - Modifié.png";
*/
}
