import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IngestionComponent} from "./ingestion/ingestion.component";
import {AnalyseComponent} from "./analyse/analyse.component";
import {IndexComponent} from "./index-cv/index.component";
import {MatchComponent} from "./match/match.component";
import {HistoryComponent} from "./history/history.component";
import {IngestionoffreComponent} from "./ingestionoffre/ingestionoffre.component";
import {NotFoundComponentComponent} from "./not-found-component/not-found-component.component";
import {IngestioncvComponent} from "./ingestioncv/ingestioncv.component";
import {HomeComponent} from "./home/home.component";
import {AnalyseoffreComponent} from "./analyseoffre/analyseoffre.component";
import {AnalysecvComponent} from "./analysecv/analysecv.component";
import {FormationComponent} from "./formation/formation.component";
import {LangueComponent} from "./localisation/langue.component";
import {TypeContractComponent} from "./gestion-users/type-contract.component";
import {LoginComponent} from "./login/login.component";
import {GestionRecruteurComponent} from "./gestion-recruteur/gestion-recruteur.component";
import {RecruteuroffreComponent} from "./recruteuroffre/recruteuroffre.component";
import {RecruteurgestionComponent} from "./recruteurgestion/recruteurgestion.component";
import {GestionAdminComponent} from "./gestion-admin/gestion-admin.component";
import {GestionAdminTitrePosteComponent} from "./gestion-admin-titre-poste/gestion-admin-titre-poste.component";
import {GestionAdminTechonolgieComponent} from "./gestion-admin-techonolgie/gestion-admin-techonolgie.component";
import {GestionAdminTechComponent} from "./gestion-admin-tech/gestion-admin-tech.component";
import {GestionAdminLocaComponent} from "./gestion-admin-loca/gestion-admin-loca.component";
import {GestionAdminLocalisationComponent} from "./gestion-admin-localisation/gestion-admin-localisation.component";
import {GestionAdminFormComponent} from "./gestion-admin-form/gestion-admin-form.component";
import {GestionAdminFormationComponent} from "./gestion-admin-formation/gestion-admin-formation.component";
import {GestionUsersGestionComponent} from "./gestion-users-gestion/gestion-users-gestion.component";
import {IndexTitrePosteComponent} from "./index-cv-titre-poste/index-titre-poste.component";
import {IndexTechnologieComponent} from "./index-cv-technologie/index-technologie.component";
import {IndexFormationComponent} from "./index-cv-formation/index-formation.component";
import {IndexLocalisationComponent} from "./index-cv-localisation/index-localisation.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path:'ingestion', component: IngestionComponent,
         children: [
           {path:'ingestionoffre',component: IngestionoffreComponent},
           {path:'ingestioncv',component: IngestioncvComponent},
           {path:'',redirectTo:'ingestioncv',pathMatch:'full'},
           {path:'**',redirectTo:'ingestioncv',pathMatch:'full'}
          ]
  },
/*
  {path: 'analyse' , component: AnalyseComponent,
      children: [
        {path:'analyseoffre',component: AnalyseoffreComponent},
        {path:'analysecv',component: AnalysecvComponent},
        {path:'formations',component: FormationComponent},
        {path:'langue',component: LangueComponent},
        {path:'typeContract',component: TypeContractComponent},
        {path:'',redirectTo:'analysecv',pathMatch:'full'},
        {path:'**',redirectTo:'analysecv',pathMatch:'full'}
      ]

  },*/
  {path:'gesrecruteur', component:GestionRecruteurComponent,
      children: [
        {path:'recoffre',component: RecruteuroffreComponent},
        {path:'recgestion',component: RecruteurgestionComponent},
        {path:'',redirectTo:'recoffre',pathMatch:'full'},
        {path:'**',redirectTo:'recoffre',pathMatch:'full'}
    ]
  },
  {path:'gestionadminTitre', component:GestionAdminComponent,
    children: [
      {path:'analysecv',component: AnalysecvComponent},
      {path:'gestionadmintitre',component: GestionAdminTitrePosteComponent},
      {path:'',redirectTo:'analysecv',pathMatch:'full'},
      {path:'**',redirectTo:'analysecv',pathMatch:'full'}
    ]
  },
  {path:'gestionadminTechnologie', component:GestionAdminTechComponent,
    children: [
      {path:'analyseoffre',component: AnalyseoffreComponent},
      {path:'gestionadmintechnologie',component: GestionAdminTechonolgieComponent},
      {path:'',redirectTo:'analyseoffre',pathMatch:'full'},
      {path:'**',redirectTo:'analyseoffre',pathMatch:'full'}
    ]
  },
  {path:'gestionadminLocalisation', component:GestionAdminLocaComponent,
    children: [
      {path:'langue',component: LangueComponent},
      {path:'gestionadminlocalisation',component: GestionAdminLocalisationComponent},
      {path:'',redirectTo:'langue',pathMatch:'full'},
      {path:'**',redirectTo:'langue',pathMatch:'full'}
    ]
  },
  {path:'gestionadminFormation', component:GestionAdminFormComponent,
    children: [
      {path:'formation',component:FormationComponent},
      {path:'gestionadminformation',component: GestionAdminFormationComponent},
      {path:'',redirectTo:'formation',pathMatch:'full'},
      {path:'**',redirectTo:'formation',pathMatch:'full'}
    ]
  },
  {path:'gestionadminUser', component:TypeContractComponent,
    children: [
      {path:'gestionadminusers',component: GestionUsersGestionComponent},
      {path:'',redirectTo:'gestionadminusers',pathMatch:'full'},
      {path:'**',redirectTo:'gestionadminusers',pathMatch:'full'}
    ]
  },
  {path: 'index' , component:IndexComponent,
      children: [
        {path:'cvTitre',component: IndexTitrePosteComponent},
        {path:'cvTechnologie',component: IndexTechnologieComponent},
        {path:'cvFormation',component: IndexFormationComponent},
        {path:'cvLocalisation',component: IndexLocalisationComponent},
        {path:'',redirectTo:'cvTitre',pathMatch:'full'},
        {path:'**',redirectTo:'cvTitre',pathMatch:'full'}
      ]
  },
  {path: 'match' , component: MatchComponent},
  {path:'history', component:HistoryComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  },
  {path:'**',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
