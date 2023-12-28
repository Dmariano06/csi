import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FeaturesComponent } from './features/features.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { PricingComponent } from './pricing/pricing.component';
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
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HomesliderComponent } from './homeslider/homeslider.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomesliderComponent,
    FeaturesComponent,
    IntegrationsComponent,
    PricingComponent,
    HomeComponent,
    ComposantComponent,
    FaqComponent,
    ModelComponent,
    SceneComponent,
    ServicesComponent,
    BlackholeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxPageScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
