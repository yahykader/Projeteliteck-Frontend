import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-gestion-admin',
  templateUrl: './gestion-admin.component.html',
  styleUrls: ['./gestion-admin.component.css']
})
export class GestionAdminComponent implements OnInit {

  activeLinkIndex = -1;

  constructor(public router: Router, public route: ActivatedRoute) {
  }

  routes = [
    {linkName: 'Saisie Titre Poste', url1: 'analyseoffre'},
    {linkName: 'Gestions des Titres Postes', url1: 'gestionadmintitre'},
  ]

  ngOnInit() {

    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routes.indexOf(this.routes.find(tab => tab.linkName === '.' + this.router.url));
    });

  }
}
