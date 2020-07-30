import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { PersonalcardComponent } from './components/personalcard/personalcard.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { ContactComponent } from './components/contact/contact.component';
import { GoupComponent } from './components/shared/goup/goup.component';
import { ProyectsComponent } from './components/proyects/proyects.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NavComponent,
    JumbotronComponent,
    PersonalcardComponent,
    KnowledgeComponent,
    ContactComponent,
    GoupComponent,
    ProyectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
