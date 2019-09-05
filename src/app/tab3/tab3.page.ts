import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  roomBookings: Array<any> = [];

  constructor(private router: Router, public roomsService: RoomsService) { 
    this.getRoomBookings();
  }

  ngOnInit() { 
   
   }
   currentDate = new Date();

   getRoomBookings() {
    this.roomsService.getBookings()
      .then(data => { this.roomBookings = data; });
  }
}
