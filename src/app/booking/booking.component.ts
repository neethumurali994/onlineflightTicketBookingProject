import { Component, OnInit } from '@angular/core';
import {Bookconfirm} from 'src/app/bookconfirm';
import {CheckavailabiltyService} from 'src/app/checkavailabilty.service';
import { Iflight } from '../flight';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
depart:any;
flightno:any;
flightid:any;
bookingobject =new Bookconfirm('','','','','','','');
  constructor(private _book:CheckavailabiltyService) { }

  ngOnInit() {
    this.bookingobject.fromplace= localStorage.getItem("from");
    this.bookingobject.dated= localStorage.getItem("date");
    this.bookingobject.flightname= localStorage.getItem("flightname");
    this.bookingobject.amount= localStorage.getItem("rate");
    this.bookingobject.toplace= localStorage.getItem("to");
    this.flightno= +localStorage.getItem("flightno");

   console.log(".........."+this. flightno);
   if(!isNaN(this. flightno))
   {
     console.log("sucesssssssssssssssssss");
   }
  }
  message:any;
  products:any;
  totalseats:number;
  totalseats1:number;
  updatedseat:number;
  bookedseats:number;
  updatedFlight:Iflight;
  updatedresult:any;
  bookingconfirmation()
  {
    console.log("confirm booking");
    this._book.addbook(this.bookingobject).subscribe((data)=>{
      this.message=data;
      }
      );


      this._book.getflightdetails(this.flightno).subscribe((data:Iflight)=>{
        console.log(data);
        //this.products = data;
        console.log("uiooooo000"+data.id);
        this.flightid=data.id;
       this.bookedseats=parseInt(this.bookingobject.seats);
       this.totalseats=data.seats;
        this.updatedseat=this.totalseats-this.bookedseats;
        data.seats=this.updatedseat;
       this.updatedFlight=data;  
      }
      );
      console.log("uiooooo"+ this.flightid);
      this._book.updateflightseats(this.flightid, this.updatedFlight).subscribe((data)=>{
        this.updatedresult=data;
        console.log("updated successfully");
        }
        );
  }


}
