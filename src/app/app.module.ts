import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IngestionComponent } from './ingestion/ingestion.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { IndexComponent } from './index-cv/index.component';
import { MatchComponent } from './match/match.component';
import { HistoryComponent } from './history/history.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatDatepickerModule, MatInputModule, MatListModule} from "@angular/material";
import { FooterComponent } from './footer/footer.component';
import { IngestionoffreComponent } from './ingestionoffre/ingestionoffre.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { IngestioncvComponent } from './ingestioncv/ingestioncv.component';
import { HomeComponent } from './home/home.component';
import { AnalyseoffreComponent } from './analyseoffre/analyseoffre.component';
import { AnalysecvComponent } from './analysecv/analysecv.component';
import { FormationComponent } from './formation/formation.component';
import { LangueComponent } from './localisation/langue.component';
import { TypeContractComponent } from './gestion-users/type-contract.component';
import { LoginComponent } from './login/login.component';
import { GestionRecruteurComponent } from './gestion-recruteur/gestion-recruteur.component';
import { RecruteuroffreComponent } from './recruteuroffre/recruteuroffre.component';
import { RecruteurgestionComponent } from './recruteurgestion/recruteurgestion.component';
import { GestionAdminTitrePosteComponent } from './gestion-admin-titre-poste/gestion-admin-titre-poste.component';
import { GestionAdminTechonolgieComponent } from './gestion-admin-techonolgie/gestion-admin-techonolgie.component';
import { GestionAdminLocalisationComponent } from './gestion-admin-localisation/gestion-admin-localisation.component';
import { GestionAdminComponent } from './gestion-admin/gestion-admin.component';
import { GestionAdminTechComponent } from './gestion-admin-tech/gestion-admin-tech.component';
import { GestionAdminLocaComponent } from './gestion-admin-loca/gestion-admin-loca.component';
import { GestionAdminFormComponent } from './gestion-admin-form/gestion-admin-form.component';
import { GestionAdminFormationComponent } from './gestion-admin-formation/gestion-admin-formation.component';
import { GestionUsersGestionComponent } from './gestion-users-gestion/gestion-users-gestion.component';
import { IndexTitrePosteComponent } from './index-cv-titre-poste/index-titre-poste.component';
import { IndexTechnologieComponent } from './index-cv-technologie/index-technologie.component';
import { IndexFormationComponent } from './index-cv-formation/index-formation.component';
import { IndexLocalisationComponent } from './index-cv-localisation/index-localisation.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IngestionComponent,
    AnalyseComponent,
    IndexComponent,
    MatchComponent,
    HistoryComponent,
    HeaderComponent,
    FooterComponent,
    IngestionoffreComponent,
    NotFoundComponentComponent,
    IngestioncvComponent,
    HomeComponent,
    AnalyseoffreComponent,
    AnalysecvComponent,
    FormationComponent,
    LangueComponent,
    TypeContractComponent,
    LoginComponent,
    GestionRecruteurComponent,
    RecruteuroffreComponent,
    RecruteurgestionComponent,
    GestionAdminTitrePosteComponent,
    GestionAdminTechonolgieComponent,
    GestionAdminLocalisationComponent,
    GestionAdminComponent,
    GestionAdminTechComponent,
    GestionAdminLocaComponent,
    GestionAdminFormComponent,
    GestionAdminFormationComponent,
    GestionUsersGestionComponent,
    IndexTitrePosteComponent,
    IndexTechnologieComponent,
    IndexFormationComponent,
    IndexLocalisationComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule, FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, MatListModule, MatDatepickerModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
