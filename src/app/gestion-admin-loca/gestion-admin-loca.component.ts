import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-gestion-admin-loca',
  templateUrl: './gestion-admin-loca.component.html',
  styleUrls: ['./gestion-admin-loca.component.css']
})
export class GestionAdminLocaComponent implements OnInit {

  activeLinkIndex = -1;

  constructor(public router: Router, public route: ActivatedRoute) {
  }

  routes = [
    {linkName: 'Saisie Localisation', url1: 'langue'},
    {linkName: 'Gestions des Localisation', url1: 'gestionadminlocalisation'},
  ]

  ngOnInit() {

    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routes.indexOf(this.routes.find(tab => tab.linkName === '.' + this.router.url));
    });

  }
}
