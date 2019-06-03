import { Component, OnInit } from '@angular/core';
import {SaisieService} from "../saisie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ingestioncv',
  templateUrl: './ingestioncv.component.html',
  styleUrls: ['./ingestioncv.component.css']
})
export class IngestioncvComponent implements OnInit {
  ajout:any;

  constructor(public saisieService: SaisieService,public router :Router) { }

  ngOnInit() {
  }

  onSaveCv(data) {
    let url =this.saisieService.host +"cvs";
    this.saisieService.postRessource(url,data)
          .subscribe(data=>{
            this.ajout=data;
    },err =>{ console.log(err);} )
    console.log(data);
      //this.router.navigateByUrl("/ingestion/ingestionoffre");
  }
}
