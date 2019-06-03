import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-gestion-recruteur',
  templateUrl: './gestion-recruteur.component.html',
  styleUrls: ['./gestion-recruteur.component.css']
})
export class GestionRecruteurComponent implements OnInit {
  activeLinkIndex = -1;

  constructor(public router: Router, public route: ActivatedRoute) {
  }

  routes = [
    {linkName: 'Saisie Offre', url1: 'recoffre'},
    {linkName: 'Gestions des Offres', url1: 'recgestion'},
  ]

  ngOnInit() {

    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routes.indexOf(this.routes.find(tab => tab.linkName === '.' + this.router.url));
    });

  }
}
