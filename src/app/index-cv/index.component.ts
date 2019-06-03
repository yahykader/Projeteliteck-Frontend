import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SaisieService} from "../saisie.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


   activeLinkIndex = -1;

   constructor(public router: Router) {
   }

   routes = [
     {linkName: 'Titre du Poste', url1: 'cvTitre'},
     {linkName: 'Technologies', url1: 'cvTechnologie'},
     {linkName: 'Formations', url1: 'cvFormation'},
     {linkName: 'Localisation', url1: 'cvLocalisation'},
   ]


   ngOnInit() {

     this.router.events.subscribe((res) => {
       this.activeLinkIndex = this.routes.indexOf(this.routes.find(tab => tab.linkName === '.' + this.router.url));
     });
   }


}
