import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthentificationService,public router:Router) { }

  ngOnInit() {

  }

  public isAuthenticatedA() {
    return this.authService.isAuthenticatedA();
  }
  public isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  public isAuthenticatedR() {
    return this.authService.isAuthenticatedRecruteur();
  }



  public onLogout() {
    this.authService.onLogout();
    this.router.navigateByUrl("/login");
  }

}
