import { Component, OnInit } from '@angular/core';
import {SaisieService} from "../saisie.service";
import {Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs";

export interface Langues {
  nomLangue: string;
}



@Component({
  selector: 'app-gestion-admin-localisation',
  templateUrl: './gestion-admin-localisation.component.html',
  styleUrls: ['./gestion-admin-localisation.component.css']
})
export class GestionAdminLocalisationComponent implements OnInit {
  columnsToDisplay:string[]=['nomLangue'];
  /*displayedColumns: string[] = ['nomLangue'];
  columnsToDisplay: string[] = this.displayedColumns.slice();*/
  data=new LanguesDataSource(this.saisieService);



  listLocalisations: any;
  mode='list';
  constructor(public saisieService: SaisieService,public router :Router,public authService: AuthentificationService) { }

  ngOnInit() {
    this.onGetAllLocalisations();
  }
 
  onGetAllLocalisations() {
    let url = this.saisieService.host + "langues";
    this.saisieService.getRessource(url)
      .subscribe(data => {
          this.listLocalisations = data;
          console.log(data);
        }, err => {console.log(err);}
      );
  }
  currentlocalisation;
  onEditLocalisation(tit){
    let url = tit._links.self.href;
    this.saisieService.getRessource(url)
      .subscribe(data => {
        this.currentlocalisation = data;
        this.mode = 'editLocalisation';
      }, err => {
        console.log(err);
      });

  }

  onDeleteLocalisation(loc){
    let c = confirm("Etes vous sure de vouloir supprimez");
    if (!c) return;
    let url=loc._links.self.href;
    this.saisieService.deleteRessource(url)
      .subscribe(data => {
        this.onGetAllLocalisations();
        this.mode='list';
      }, err => {
        console.log(err);
      });
  }


  onUpdateLocalisation(loc) {
    let url = this.currentlocalisation._links.self.href;
    this.saisieService.putRessource(url,loc)
      .subscribe(data => {
          this.mode='list';
          this.onGetAllLocalisations();
          console.log(data);
        }, err => {console.log(err);}
      );
  }
}
export class LanguesDataSource extends DataSource<any>{

  constructor(public saisieService: SaisieService){
    super();
  }
  connect(): Observable<Langues[]> {
    let url = this.saisieService.host + "langues";
      return this.saisieService.getLocalisation();
  }

  disconnect() {}

  
}
