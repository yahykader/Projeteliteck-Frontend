import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { JwtHelperService } from '@auth0/angular-jwt';
import {Router} from "@angular/router";
import {SaisieService} from "./saisie.service";
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  public host: string = "http://localhost:8070";
  public jwt: string;
  public userName: string;
  public name: string;
  public roles: Array<any>;

  constructor(public http: HttpClient) { }

  public Login(data) {
    return this.http.post(this.host + "/login", data,{observe :'response'});

  }
  public onClient(url,data) {
    return this.http.post(this.host + "/register", data);
  }
  public  getRessource(url) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.jwt})
    return this.http.get(this.host+"/appUsers",{'headers':headers});
  }
  public deleteRessource(url) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.jwt})
    return this.http.delete(url,{'headers': headers});
  }
  public postRessource(url,data) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.jwt})
    return this.http.post(url,data, {'headers': headers});
  }
  public putRessource(url,data) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.jwt})
    return this.http.put(url,data, {'headers': headers});
  }


  public saveToken(jwt: string) {
    localStorage.setItem('token',jwt);
    this.jwt = jwt;
    this.parseJWT();
  }

  public parseJWT() {
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    console.log(objJWT);
    this.userName =  objJWT.obj;
    console.log(this.userName);
    this.roles = objJWT.roles;
    console.log(this.roles);
  }

  public isAdmin(){
    for(let r of this.roles){
      if (r.authority == 'ADMIN') return true;
    }
  }
  public isUser() {
    for(let r of this.roles){
      if (r.authority == 'USER') return true;
    }
  }
  public isRecruteur() {
    for(let r of this.roles){
      if (r.authority == 'RECRUTEUR') return true;
    }
  }
  public isAuthenticatedA() {
    return this.roles && (this.isAdmin());
  }
  public isAuthenticatedUser() {
    return this.roles && (this.isUser());
  }

  public isAuthenticatedRecruteur() {
    return this.roles && (this.isRecruteur());
  }
   public isAuthenticated() {
    return this.roles && (this.isAdmin() || this.isUser());
  }
  // pour que ne se'authentifier a chaque fois
  public loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();

  }
  public onLogout() {
    localStorage.removeItem('token');
    this.initParams();
  }
  public initParams() {
    this.userName = undefined;
    this.jwt = undefined;
    this.roles = undefined;
  }
}
