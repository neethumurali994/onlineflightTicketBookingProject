import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Addflight } from './addflight';
@Injectable({
  providedIn: 'root'
})
export class AdminaddService {

  constructor(private _http: HttpClient) { }
  addflightdet(flightt:Addflight)
  {
    let _url='http://localhost:8181/admin/addflight';
    
    return this._http.post(_url,flightt,{responseType:'text' as 'json'});
  }
}
