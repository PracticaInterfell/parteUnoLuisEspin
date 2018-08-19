import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionService } from "../../providers/session.service";
import { BookingService } from "../../providers/booking.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  user: any;
  data: any[];
  cols: any[];

  constructor(private session: SessionService,
    private bookingService: BookingService) {
    this.user = new Object();
    this.data = new Array();
    this.user = this.session.getUser();
    this.cols = new Array();
    this.cols = [
      { field: 'bookingId', header: 'BookingId' },
      { field: 'cliente', header: 'Cliente' },
      { field: 'fecha', header: 'Fecha de Creación' },
      { field: 'direccion', header: 'Dirección' },
      { field: 'precio', header: 'Precio' }
    ];
    this.bookingService.getBookings(this.user, "miguel@tuten.cl").subscribe(mData => {
      console.log(mData.length);
      if (mData > 0) {
        for (let index = 0; index < mData.length; index++) {
          const mobj: any = new Object();
          mobj.bookingId = mData[index].bookingId;
          mobj.cliente = mData[index].tutenUserClient.firstName + ' ' + mData[index].tutenUserClient.lastName;
          mobj.fecha = mData[index].bookingTime;
          mobj.direccion = mData[index].locationId.streetAddress;
          mobj.precio = mData[index].bookingPrice;
          this.data.push(mobj);
        }
      } else {
        this.data = this.session.getDataTest();
      }
    }, err => console.log(err));
  }

  // bookingId, 
  // tutenUserClient.firstName , tutenUserClient.lastName
  // bookingTime
  // locationId.streetAddress
  // bookingPrice

  ngOnInit() {
    
  }



}
