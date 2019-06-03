import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public authService: AuthentificationService,public route: ActivatedRoute, public router: Router) {

  }

  ngOnInit() {

  }

  /*Recuperer le token */

  public onLogin(data) {
    //console.log(data);
    this.authService.Login(data)
      .subscribe(resp=>{
        //console.log(resp.headers.get('Authorization'));
        let jwt = resp.headers.get('Authorization');
        this.authService.saveToken(jwt);
        this.router.navigateByUrl('/');
      },err=>{
        console.log(err);
      });
  }

}
