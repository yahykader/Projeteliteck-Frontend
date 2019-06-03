import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "./authentification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public authService: AuthentificationService){}
  title = 'ProjetAnalyse';

  ngOnInit(): void {

  }


}
