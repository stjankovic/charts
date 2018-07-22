import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ServisService {

  constructor(private _http: HttpClient) { }

  vrati() {
    return this._http.get('https://moja-baza-001.herokuapp.com/db')
      .pipe(map(result => result));
  }

}
