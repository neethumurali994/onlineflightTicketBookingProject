import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Getdataobj } from 'src/app/getdata';
import { from } from 'rxjs';
import {CheckavailabiltyService} from 'src/app/checkavailabilty.service';
import {Router}  from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dataobj =new Getdataobj('','',0,0);
  title = 'CheapFlights';
  child =['0','1','2'];
  adults=['1','2','3'];
  value1:boolean;
  classtype=['First class','Businuss class','Economy class'];
  userModel =new User('','','','','','','','');
  constructor(private _checkavailable:CheckavailabiltyService,private router:Router){this.value1=false;}
  products:any;
 
  onsub(){
  this.value1=true;
  localStorage.setItem("from",this.userModel.from);
  localStorage.setItem("date",this.userModel.depart);
 this._checkavailable.check(this.userModel).subscribe((data: any[])=>{
  console.log(data);
  this.products = data;
}
  )
 // this.router.navigate(["flights"]);
  }

  booking(bookname:string,bookrate:string,bookseat:string,bookto:string,flightno:string)
{
  console.log("flightname"+bookname+bookrate+bookseat+flightno);
  localStorage.setItem("flightname",bookname);
  localStorage.setItem("rate",bookrate);
  localStorage.setItem("seat",bookseat);
  localStorage.setItem("to",bookto);
  localStorage.setItem("flightno",flightno);
this.router.navigate(["login"]);
}

  ngOnInit() {
    
  }

}
