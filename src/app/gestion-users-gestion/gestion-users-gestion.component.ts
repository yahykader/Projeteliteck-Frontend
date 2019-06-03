import { Component, OnInit } from '@angular/core';
import {SaisieService} from "../saisie.service";
import {Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";

@Component({
  selector: 'app-gestion-users-gestion',
  templateUrl: './gestion-users-gestion.component.html',
  styleUrls: ['./gestion-users-gestion.component.css']
})
export class GestionUsersGestionComponent implements OnInit {


  listUtilisateus: any;
  mode='list';
  constructor(public saisieService: SaisieService,public router :Router,public authService: AuthentificationService) { }

  ngOnInit() {
    this.onGetAllUtilisateurs();
  }

  onGetAllUtilisateurs() {
    let url = this.authService.host + "/appUsers";
    this.authService.getRessource(url)
      .subscribe(data => {
          this.listUtilisateus= data;
          console.log(data);
        }, err => {console.log(err);}
      );
  }
  currentadminuser;

  onEditUser(use){
    let url = use._links.self.href;
    this.authService.getRessource(url)
      .subscribe(data => {
        this.currentadminuser = data;
        this.mode = 'editUser';
      }, err => {
        console.log(err);
      });

  }

  onDeleteUser(use){
    let c = confirm("Etes vous sure de vouloir supprimez");
    if (!c) return;
    let url=use._links.self.href;
    this.authService.deleteRessource(url)
      .subscribe(data => {
        this.onGetAllUtilisateurs();
        this.mode='list';
      }, err => {
        console.log(err);
      });
  }


  onUpdateUser(use) {
    let url = this.currentadminuser._links.self.href;
    this.authService.putRessource(url,use)
      .subscribe(data => {
          this.mode='list';
          this.onGetAllUtilisateurs();
          console.log(data);
        }, err => {console.log(err);}
      );
  }

}
