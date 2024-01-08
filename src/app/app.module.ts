import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FeaturesComponent } from './features/features.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComposantComponent } from './composant/composant.component';
import { FaqComponent } from './faq/faq.component';
import { ModelComponent } from './model/model.component';

import { SceneComponent } from './scene/scene.component';
import { ServicesComponent } from './services/services.component';
import { BlackholeComponent } from './blackhole/blackhole.component';
import { HomesliderComponent } from './homeslider/homeslider.component';
import { FooterComponent } from './footer/footer.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CraftedwebsiteComponent } from './craftedwebsite/craftedwebsite.component';
import { ShowcasehubComponent } from './showcasehub/showcasehub.component';
import { CommerceDigitalComponent } from './commerce-digital/commerce-digital.component';

const routes: Routes = [
  { path: 'assets/illustrations/img/services.webp', component: HomesliderComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomesliderComponent,
    FeaturesComponent,
    IntegrationsComponent,
    HomeComponent,
    ComposantComponent,
    FaqComponent,
    ModelComponent,
    SceneComponent,
    CommerceDigitalComponent,
    ServicesComponent,
    CraftedwebsiteComponent,
    BlackholeComponent,
    ShowcasehubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FooterComponent,
    FormsModule,
    RouterModule.forRoot(routes,{scrollOffset: [0, 0], scrollPositionRestoration: 'enabled' }),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
