import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registeredUser } from './register';
import { Log } from './log';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private _http: HttpClient) {
  }
  registeration(regist: registeredUser) {
    let fullname = regist.fullname;
    let username = regist.username;
    let pass = regist.pass;
    let email = regist.email;
    let _url = 'http://localhost:8181/passenger/add';

    return this._http.post(_url, regist, { responseType: 'text' as 'json' });
  }
  login(logg: Log) {
    let username = logg.username;
    let pass = logg.pass;
    let _url = 'http://localhost:8181/passenger/login?username=' + username + '&pass=' + pass;

    return this._http.get(_url);
  }
 findUserWithEmail(regist: registeredUser)
 {
  let email = regist.email;
  let _url = 'http://localhost:8181/passenger//getbyemail?email='+email;
  return this._http.get(_url);
 }
}
