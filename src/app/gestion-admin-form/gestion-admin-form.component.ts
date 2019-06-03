import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-gestion-admin-form',
  templateUrl: './gestion-admin-form.component.html',
  styleUrls: ['./gestion-admin-form.component.css']
})
export class GestionAdminFormComponent implements OnInit {

  activeLinkIndex = -1;

  constructor(public router: Router, public route: ActivatedRoute) {
  }

  routes = [
    {linkName: 'Saisie Formation', url1: 'formation'},
    {linkName: 'Gestions des Formations', url1: 'gestionadminformation'},
  ]

  ngOnInit() {

    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routes.indexOf(this.routes.find(tab => tab.linkName === '.' + this.router.url));
    });

  }
}
