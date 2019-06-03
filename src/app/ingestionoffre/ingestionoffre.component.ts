import { Component, OnInit } from '@angular/core';
import {SaisieService} from "../saisie.service";
import {Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";

@Component({
  selector: 'app-ingestionoffre',
  templateUrl: './ingestionoffre.component.html',
  styleUrls: ['./ingestionoffre.component.css']
})
export class IngestionoffreComponent implements OnInit {
  public listCvs:any;
  public mode='list';

  constructor(public saisieService: SaisieService,public router :Router,public authService: AuthentificationService) { }

  ngOnInit() {
    this.onGetAllCv();
  }


  onGetAllCv() {
    let url = this.saisieService.host +"cvs";
    this.saisieService.getRessource(url)
      .subscribe(data => {
          this.listCvs = data;
          console.log(data);
        }, err => {console.log(err);}
      );
  }

  public onDeleteCv(ca) {
    let c = confirm("Etes vous sure de vouloir supprimez");
    if (!c) return;
    let url=ca._links.self.href;
    this.saisieService.deleteRessource(url)
      .subscribe(data => {
        this.mode="list";
        this.onGetAllCv();
      }, err => {
        console.log(err);
      });
  }
  currentcv;

  public onUpdateCv(ca) {
    let url = this.currentcv._links.self.href;
    this.saisieService.putRessource(url, ca)
      .subscribe(data => {
        this.mode = 'list';
        this.onGetAllCv();
      }, err => {
        console.log(err);
      });
    console.log(ca);
  }


  public onEditCV(ca) {
    let url = ca._links.self.href;
    this.saisieService.getRessource(url)
      .subscribe(data => {
        this.currentcv = data;
        this.mode = 'editCv';
      }, err => {
        console.log(err);
      });
  }

}
