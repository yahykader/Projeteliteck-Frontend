import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthentificationService} from "./authentification.service";
import {Observable} from "rxjs";
import {Langues} from "./gestion-admin-localisation/gestion-admin-localisation.component";

@Injectable({
  providedIn: 'root'
})
export class SaisieService {
  public host :string="http://localhost:8080/";

  constructor(private http: HttpClient,private authService: AuthentificationService ) { }


  public  getRessource(url) {

    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt})
    return this.http.get(url,{'headers':headers});
  }

  public getR(url) {

    return this.http.get(url);
  }
  getLocalisation():Observable<Langues[]>{
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt})
    return this.http.get<Langues[]>(this.host + "langues",{'headers':headers});
  }


  public deleteRessource(url) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt})
    return this.http.delete(url,{'headers': headers});
  }
  public postRessource(url,data) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt})
    return this.http.post(url,data, {'headers': headers});
  }
  public putRessource(url,data) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt})
    return this.http.put(url,data, {'headers': headers});
  }
  public patchRessource(url,data) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt})
    return this.http.patch(url,data, {'headers': headers});
  }



}
