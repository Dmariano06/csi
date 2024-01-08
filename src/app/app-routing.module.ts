import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { FeaturesComponent } from './features/features.component';
import { HomesliderComponent } from './homeslider/homeslider.component';
import { CraftedwebsiteComponent } from './craftedwebsite/craftedwebsite.component';
import { ShowcasehubComponent } from './showcasehub/showcasehub.component';
import { CommerceDigitalComponent } from './commerce-digital/commerce-digital.component';

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "integrations", component: IntegrationsComponent},
    {path: "about", component: FeaturesComponent},
    {path: "solutions-web", component: HomesliderComponent},
    {path: "craftedwebsite", component: CraftedwebsiteComponent},
    {path: "showcasehub", component: ShowcasehubComponent},
    {path: "commerce-digital", component: CommerceDigitalComponent},
    {path: "contacts", component:  ContactsComponent},
    {path: '', redirectTo:"home", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
