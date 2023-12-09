import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "integrations", component: IntegrationsComponent},
    {path: "features", component: FeaturesComponent},
    {path: "pricing", component: PricingComponent},
    {path: "contacts", component:  ContactsComponent},
    {path: '', redirectTo:"home", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }