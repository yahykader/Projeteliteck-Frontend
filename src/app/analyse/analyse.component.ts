import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SaisieService} from "../saisie.service";

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {
  ngOnInit(): void {
  }

/*
  activeLinkIndex = -1;

  constructor(public router: Router, public saisieService: SaisieService) {
  }

  routes = [
    {linkName: 'Titre du Poste', url1: 'analysecv'},
    {linkName: 'Technologies', url1: 'analyseoffre'},
    {linkName: 'Formations', url1: 'formations'},
    {linkName: 'Langues', url1: 'langue'},
    {linkName: 'Type Contract', url1: 'typeContract'},

  ]


  ngOnInit() {

    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routes.indexOf(this.routes.find(tab => tab.linkName === '.' + this.router.url));
    });
  }*/



}
