import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { RegisterServiceService } from 'src/app/register-service.service'
import { Log } from '../log';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  products: Log;
  messages: any;
  logp = new Log('', '');
  constructor(private router: Router, private _register: RegisterServiceService,private route:ActivatedRoute) { }
  register() {
    this.router.navigate(["signup"]);
  }
  loginn() {

    this._register.login(this.logp).subscribe((data: Log) => {
      console.log(data);
      if (data) {
        this.products = data;
        if (data.username == "admin" && data.pass=="admin") {
          this.router.navigate(["admin"]);
        }
        else {
          this.router.navigate(["booking"]);
        }
      }
      else {
        console.log("username or password is wrong");
        this.messages = "username or password is wrong";
      }

    },
      error => { console.log("not correct", error) });
  }
  infomsg :'';
  displayms='';
  ngOnInit() {
this.route.params.subscribe(params=>{
  this.infomsg=params['msg'];
});
if(this.infomsg)
{
this.displayms="Sucessfully Registered. Please login";
}
  }

}
