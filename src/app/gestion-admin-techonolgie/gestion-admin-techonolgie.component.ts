import { Component, OnInit } from '@angular/core';
import {SaisieService} from "../saisie.service";
import {Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";

@Component({
  selector: 'app-gestion-admin-techonolgie',
  templateUrl: './gestion-admin-techonolgie.component.html',
  styleUrls: ['./gestion-admin-techonolgie.component.css']
})
export class GestionAdminTechonolgieComponent implements OnInit {


  listTechnologies: any;
  mode='list';
  constructor(public saisieService: SaisieService,public router :Router,public authService: AuthentificationService) { }

  ngOnInit() {
    this.onGetAllTechnologies();
  }

  onGetAllTechnologies() {
    let url = this.saisieService.host + "technologies";
    this.saisieService.getRessource(url)
      .subscribe(data => {
          this.listTechnologies= data;
          console.log(data);
        }, err => {console.log(err);}
      );
  }
  currenttechnologie;
  onEditTechologie(techno){
    let url = techno._links.self.href;
    this.saisieService.getRessource(url)
      .subscribe(data => {
        this.currenttechnologie = data;
        this.mode = 'editTechnologie';
      }, err => {
        console.log(err);
      });

  }

  onDeleteTechologie(techno){
    let c = confirm("Etes vous sure de vouloir supprimez");
    if (!c) return;
    let url=techno._links.self.href;
    this.saisieService.deleteRessource(url)
      .subscribe(data => {
        this.onGetAllTechnologies();
        this.mode='list';
      }, err => {
        console.log(err);
      });
  }


  onUpdateTechnologie(techno) {
    let url = this.currenttechnologie._links.self.href;
    this.saisieService.putRessource(url,techno)
      .subscribe(data => {
          this.mode='list';
          this.onGetAllTechnologies();
          console.log(data);
        }, err => {console.log(err);}
      );
  }

}
