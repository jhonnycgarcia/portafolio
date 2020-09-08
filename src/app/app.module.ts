import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
import { ProyectCardComponent } from './components/proyect-card/proyect-card.component';
import { OldJobsComponent } from './components/old-jobs/old-jobs.component';
import { CurrilucumComponent } from './components/currilucum/currilucum.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { LearningComponent } from './components/learning/learning.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';


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
    ProyectsComponent,
    ProyectCardComponent,
    OldJobsComponent,
    CurrilucumComponent,
    CursosComponent,
    LearningComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
