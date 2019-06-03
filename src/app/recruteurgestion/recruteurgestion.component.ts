import { Component, OnInit } from '@angular/core';
import {SaisieService} from "../saisie.service";
import {Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";

@Component({
  selector: 'app-recruteurgestion',
  templateUrl: './recruteurgestion.component.html',
  styleUrls: ['./recruteurgestion.component.css']
})
export class RecruteurgestionComponent implements OnInit {
  listOffres: any;
  mode='list';
  constructor(public saisieService: SaisieService,public router :Router,public authService: AuthentificationService) { }

  ngOnInit() {
    this.onGetAllOffres();
  }

  onGetAllOffres() {
    let url = this.saisieService.host + "offres";
    this.saisieService.getRessource(url)
      .subscribe(data => {
          this.listOffres = data;
          console.log(data);
        }, err => {console.log(err);}
      );
  }
  currentoff;
  onEditOffre(of){
    let url = of._links.self.href;
    this.saisieService.getRessource(url)
      .subscribe(data => {
        this.currentoff = data;
        this.mode = 'editOffre';
      }, err => {
        console.log(err);
      });

  }

  onDeleteOffre(of){
    let c = confirm("Etes vous sure de vouloir supprimez");
    if (!c) return;
    let url=of._links.self.href;
    this.saisieService.deleteRessource(url)
      .subscribe(data => {
        this.onGetAllOffres();
        this.mode='list';
      }, err => {
        console.log(err);
      });
  }


  onUpdateOffre(off) {
    let url = this.currentoff._links.self.href;
    this.saisieService.putRessource(url,off)
      .subscribe(data => {
          this.mode='list';
          this.onGetAllOffres();
          console.log(data);
        }, err => {console.log(err);}
      );
  }


}
