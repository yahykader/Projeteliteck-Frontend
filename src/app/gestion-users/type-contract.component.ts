import { Component, OnInit } from '@angular/core';
import {SaisieService} from "../saisie.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-type-contract',
  templateUrl: './type-contract.component.html',
  styleUrls: ['./type-contract.component.css']
})
export class TypeContractComponent implements OnInit {

  activeLinkIndex = -1;

  constructor(public router: Router, public route: ActivatedRoute) {
  }

  routes = [
   // {linkName: 'Saisie Formation', url1: 'formation'},
    {linkName: 'Gestions des Utilisateurs', url1: 'gestionadminusers'},
  ]

  ngOnInit() {

    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routes.indexOf(this.routes.find(tab => tab.linkName === '.' + this.router.url));
    });

  }
}
