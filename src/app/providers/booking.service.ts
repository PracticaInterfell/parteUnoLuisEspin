import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private url: String = 'https://dev.tuten.cl:443/TutenREST/rest/user/';

  constructor(private http: HttpClient) {
  }

  getBookings(obj: any, email: string): Observable<any> {
    let httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'adminemail': obj.email,
        'token': obj.sessionTokenBck,
        'app': 'APP_BCK'
      })
    };
    return this.http.get<any>(this.url + email + "/bookings?current=true", httpOptions);
  }

}
