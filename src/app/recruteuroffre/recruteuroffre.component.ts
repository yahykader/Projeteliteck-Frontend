import { Component, OnInit } from '@angular/core';
import {SaisieService} from "../saisie.service";

@Component({
  selector: 'app-recruteuroffre',
  templateUrl: './recruteuroffre.component.html',
  styleUrls: ['./recruteuroffre.component.css']
})
export class RecruteuroffreComponent implements OnInit {

  constructor(public saisieService:SaisieService) { }

  ngOnInit() {
  }

  onSaveOffre(data) {
    let url =this.saisieService.host +"offres";
    this.saisieService.postRessource(url,data)
      .subscribe(data=>{
      },err =>{ console.log(err);} )
    console.log(data);
    //this.router.navigateByUrl("/analyse/analysecv");
  }

}
