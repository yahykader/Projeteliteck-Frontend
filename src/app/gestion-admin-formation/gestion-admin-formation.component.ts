import { Component, OnInit } from '@angular/core';
import {SaisieService} from "../saisie.service";
import {Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";

@Component({
  selector: 'app-gestion-admin-formation',
  templateUrl: './gestion-admin-formation.component.html',
  styleUrls: ['./gestion-admin-formation.component.css']
})
export class GestionAdminFormationComponent implements OnInit {


  listFormations: any;
  mode='list';
  constructor(public saisieService: SaisieService,public router :Router,public authService: AuthentificationService) { }

  ngOnInit() {
    this.onGetAllFormations();
  }

  onGetAllFormations() {
    let url = this.saisieService.host + "formations";
    this.saisieService.getRessource(url)
      .subscribe(data => {
          this.listFormations= data;
          console.log(data);
        }, err => {console.log(err);}
      );
  }
  currentformation;

  onEditFormation(form){
    let url = form._links.self.href;
    this.saisieService.getRessource(url)
      .subscribe(data => {
        this.currentformation = data;
        this.mode = 'editFormation';
      }, err => {
        console.log(err);
      });

  }

  onDeleteFormation(form){
    let c = confirm("Etes vous sure de vouloir supprimez");
    if (!c) return;
    let url=form._links.self.href;
    this.saisieService.deleteRessource(url)
      .subscribe(data => {
        this.onGetAllFormations();
        this.mode='list';
      }, err => {
        console.log(err);
      });
  }


  onUpdateFormation(form) {
    let url = this.currentformation._links.self.href;
    this.saisieService.putRessource(url,form)
      .subscribe(data => {
          this.mode='list';
          this.onGetAllFormations();
          console.log(data);
        }, err => {console.log(err);}
      );
  }

}
