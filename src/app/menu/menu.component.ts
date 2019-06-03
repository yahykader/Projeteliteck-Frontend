import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../authentification.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService: AuthentificationService) { }

  ngOnInit() {
    this.authService.loadToken();
  }
 routes =[
    {linkName:'Saisies données',url:'ingestion'},
    {linkName:'Classifications CV',url:'index'},
    {linkName:'Réferentiels données',url:'analyse'},
    {linkName:'Matches données',url:'match'},
    {linkName:'Historiques données',url:'history'},
  ]

  public isFinale() {
    return this.authService.isAuthenticated()&& (!this.authService.isAuthenticatedRecruteur())&& (!this.authService.isAuthenticatedA());
  }

}
