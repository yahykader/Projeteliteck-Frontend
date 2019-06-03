import { Component, OnInit } from '@angular/core';
import {SaisieService} from "../saisie.service";
import {Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";

@Component({
  selector: 'app-gestion-admin-titre-poste',
  templateUrl: './gestion-admin-titre-poste.component.html',
  styleUrls: ['./gestion-admin-titre-poste.component.css']
})
export class GestionAdminTitrePosteComponent implements OnInit {

  listTitres: any;
  mode='list';
  constructor(public saisieService: SaisieService,public router :Router,public authService: AuthentificationService) { }

  ngOnInit() {
    this.onGetAllTitres();
  }

  onGetAllTitres() {
    let url = this.saisieService.host + "titrePostes";
    this.saisieService.getRessource(url)
      .subscribe(data => {
          this.listTitres = data;
          console.log(data);
        }, err => {console.log(err);}
      );
  }
  currenttitre;
  onEditTitre(tit){
    let url = tit._links.self.href;
    this.saisieService.getRessource(url)
      .subscribe(data => {
        this.currenttitre = data;
        this.mode = 'editTitre';
      }, err => {
        console.log(err);
      });

  }

  onDeleteTitre(tit){
    let c = confirm("Etes vous sure de vouloir supprimez");
    if (!c) return;
    let url=tit._links.self.href;
    this.saisieService.deleteRessource(url)
      .subscribe(data => {
        this.onGetAllTitres();
        this.mode='list';
      }, err => {
        console.log(err);
      });
  }


  onUpdateTitre(tit) {
    let url = this.currenttitre._links.self.href;
    this.saisieService.putRessource(url,tit)
      .subscribe(data => {
          this.mode='list';
          this.onGetAllTitres();
          console.log(data);
        }, err => {console.log(err);}
      );
  }
}
