import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-gestion-admin-tech',
  templateUrl: './gestion-admin-tech.component.html',
  styleUrls: ['./gestion-admin-tech.component.css']
})
export class GestionAdminTechComponent implements OnInit {

  activeLinkIndex = -1;

  constructor(public router: Router, public route: ActivatedRoute) {
  }

  routes = [
    {linkName: 'Saisie Technologie', url1: 'analyseoffre'},
    {linkName: 'Gestions des Technolgies', url1: 'gestionadmintechnologie'},
  ]

  ngOnInit() {

    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routes.indexOf(this.routes.find(tab => tab.linkName === '.' + this.router.url));
    });

  }

}
