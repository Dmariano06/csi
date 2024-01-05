import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { FeaturesComponent } from './features/features.component';
import { HomesliderComponent } from './homeslider/homeslider.component';

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "integrations", component: IntegrationsComponent},
    {path: "about", component: FeaturesComponent},
    {path: "solutions-web", component: HomesliderComponent},
    {path: "contacts", component:  ContactsComponent},
    {path: '', redirectTo:"home", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
