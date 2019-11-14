import { Component, OnInit } from '@angular/core';
import { Bookconfirm } from 'src/app/bookconfirm';
import { CheckavailabiltyService } from 'src/app/checkavailabilty.service';
import { Iflight } from '../flight';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  depart: any;
  flightno: any;
  flightid: any;
  bookingobject = new Bookconfirm('', '', '', '', '', '', '');
  constructor(private _book: CheckavailabiltyService) { }
  seatss: any;
  ngOnInit() {
    this.bookingobject.fromplace = localStorage.getItem("from");
    this.bookingobject.dated = localStorage.getItem("date");
    this.bookingobject.flightname = localStorage.getItem("flightname");
    this.bookingobject.amount = localStorage.getItem("rate");
    this.bookingobject.toplace = localStorage.getItem("to");
    this.flightno = +localStorage.getItem("flightno");
    this.seatss = +localStorage.getItem("seat");
    this._book.getflightdetails(this.flightno).subscribe((_datainit: Iflight) => {
      this.nullmsg = "Only " + _datainit.seats + " seats are available in this flight";
      if (_datainit.seats == 0) {
        this.nullmsg = "No seats are available in this flight";
      }
    });




  }
  message: any;
  products: any;
  totalseats: number;
  totalseats1: number;
  updatedseat: number;
  bookedseats: number;
  updatedFlight: Iflight;
  updatedresult: any;
  seatmsg: any;
  nullmsg: any;
  bookingconfirmation() {
    console.log("confirm booking");
    if (this.bookingobject.name == '' || this.bookingobject.seats == '') {
      this.nullmsg = "Name and Seats fields cannot be empty";
    }
    else if (this.bookingobject.seats == '0') {
      this.nullmsg = "seat number cannot be zero";
    }
    else {

      this._book.getflightdetails(this.flightno).subscribe((data: Iflight) => {
        this.flightid = data.id;
        this.bookedseats = parseInt(this.bookingobject.seats);
        this.totalseats = data.seats;
        this.updatedseat = this.totalseats - this.bookedseats;
        data.seats = this.updatedseat;
        this.updatedFlight = data;
        console.log("updated seta" + this.updatedseat);
        if (this.updatedseat < 0) {
          this.nullmsg = "No Seats Available In this Flight";
        }
        else {

          this._book.addbook(this.bookingobject).subscribe((data1) => {
            this.message = data1;
            if (this.message) {
              this.nullmsg = "";
            }
          }
          );
          this._book.updateflightseats(this.flightid, this.updatedFlight).subscribe((data2) => {
            this.updatedresult = data2;
            console.log("updated successfully");
          }
          );
        }
      });
    }
  }
}
