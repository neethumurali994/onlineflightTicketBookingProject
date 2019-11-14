import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addflight } from 'src/app/addflight'
import { AdminaddService } from 'src/app/adminadd.service'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  flightdetails = new Addflight('', '', '', '', '', 0, 0);
  message: any;
  constructor(private router: Router, private _add: AdminaddService) { }
  addflight() {
    if (this.flightdetails.flightname == '' || this.flightdetails.fromplace ==''|| this.flightdetails.toplace=='' ||! this.flightdetails.seats ||! this.flightdetails.rate || this.flightdetails.time=='') {
      this.message = "Please provide all the details";
    }
    else {
      this._add.addflightdet(this.flightdetails).subscribe((data) => {
        this.message = data;

        }
        );
      }
    }
    ngOnInit() {
    }

  }
