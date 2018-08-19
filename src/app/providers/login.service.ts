import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: String = 'https://dev.tuten.cl:443/TutenREST/rest/user/';

  constructor(private http: HttpClient) { 
  }

  mLogIn(obj: any): Observable<any> {
    let httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'email': obj.email,
        'password': obj.password,
        'app': obj.app
      })
    };
    return this.http.put<any>(this.url+ obj.email,obj,httpOptions);
  }

}
