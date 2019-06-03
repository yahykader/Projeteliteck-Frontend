import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthentificationService, public router: Router) { }

  ngOnInit() {
  }

  public onSaveClient(data) {
    let url = this.authService.host + "/register";
    this.authService.onClient(url, data)
      .subscribe(data => {
        console.log(data);
       this.router.navigateByUrl('/ingestion');
      }, err => {
        console.log(err);
      });
  }
}
