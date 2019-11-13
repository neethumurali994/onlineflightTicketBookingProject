import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import {Getdataobj} from './getdata';
import { Bookconfirm } from './bookconfirm';
import { Iflight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class CheckavailabiltyService {

  constructor(private _http: HttpClient) { }
  check(usr :User)
  {
    let loc=usr.from;
    let dat=usr.depart;
    let locTo=usr.to;
    let _url='http://localhost:8181/flights/availableFlights?departure='+dat+'&fromplace='+loc+'&toplace='+locTo;
    
    return this._http.get(_url);
    
  }
 getflightdetails(id:number)
{
  let _url='http://localhost:8181/flights/findflightbyid?id='+id;
    
  return this._http.get(_url);
}
updateflightseats(id:number,flg:Iflight)
{
  let _url='http://localhost:8181/flights/updateSeat?id='+id;
    
  return this._http.put(_url,flg);
}


 addbook(book:Bookconfirm)
 {
  let _url='http://localhost:8181/passenger/addbooking';
  return this._http.post(_url,book,{responseType:'text' as 'json'});
 }


}
