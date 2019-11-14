import { Component, OnInit } from '@angular/core';
import { registeredUser } from 'src/app/register'
import { RegisterServiceService } from 'src/app/register-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  message: any;
  registr = new registeredUser('', '', '', '');
  constructor(private _register: RegisterServiceService, private router: Router) { }
  msg: any;
  add() {
    if (this.registr.fullname == '' || this.registr.email == '' || this.registr.username == '' || this.registr.pass == '') {
      this.message = "please fill the mandatory details";
        }
    
    else{
        console.log("jooooooooooooooo" + this.registr.email);
        this._register.findUserWithEmail(this.registr).subscribe((data: registeredUser) => {
        if (data) {
           console.log("already registered");
          this.message = "You are already registered.";
                         }
        else {
     
              this._register.registeration(this.registr).subscribe((data1) => {
               this.message = data1;
            //this.router.navigate(["login"]);
               this.msg = "successful";
               this.router.navigate(['login', this.msg]);
               });
              }
          });

        }
    }
  ngOnInit() {
  }

}
