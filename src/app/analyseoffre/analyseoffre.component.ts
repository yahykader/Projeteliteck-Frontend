import { Component, OnInit } from '@angular/core';
import {SaisieService} from "../saisie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-analyseoffre',
  templateUrl: './analyseoffre.component.html',
  styleUrls: ['./analyseoffre.component.css']
})
export class AnalyseoffreComponent implements OnInit {

  selectedValue:any;
  selectedValue1:any;
  resultats:any;
  modifiedText:any;modifiedText1:any;
  constructor(public saisieService: SaisieService,public router :Router) { }

  ngOnInit() {

  }
  onSaveTechnolgie(data) {
    let url =this.saisieService.host +"technologies";
    this.saisieService.postRessource(url,data)
      .subscribe(data=>{
        this.resultats=data;
      },err =>{ console.log(err);} );
    console.log(data);
    //this.router.navigateByUrl("/analyse/analyseoffre");
  }



  onOffreSelected(val:any){
    this.customFunction(val);
  }
  customFunction(val:any){
    this.modifiedText="the val is :"+val+"selected";
  }

  onCvSelected(val1:any){
    this.customFunction1(val1);
  }
  customFunction1(val1:any){
    this.modifiedText1="the val is :"+val1+"selected";
  }



}
