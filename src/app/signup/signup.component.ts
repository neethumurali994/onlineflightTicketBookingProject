import { Component, OnInit } from '@angular/core';
import {registeredUser} from 'src/app/register'
import {RegisterServiceService} from 'src/app/register-service.service'
import {Router}  from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  message:any;
registr = new registeredUser('','','','');
  constructor(private _register:RegisterServiceService,private router:Router) { }
add()
{
  console.log("haiiii"+this.registr);
  
  this._register.registeration(this.registr).subscribe((data)=>{
    this.message=data;
    this.router.navigate(["login"]);}
    );


}
  ngOnInit() {
  }

}
