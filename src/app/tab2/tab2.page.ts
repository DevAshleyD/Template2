import { Component, OnInit } from '@angular/core';

import {MatDatepickerModule} from '@angular/material/datepicker/';

import { Router } from '@angular/router';
import { RoomsService } from '../rooms.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  // showMain: boolean;
  // showMini: boolean;
  // showRoom: boolean;
  // bookMain(){
  //   this.showMain = !this.showMain;
  // }
  // bookMini(){
  //   this.showMini = !this.showMini;
  // }
  // bookRoom(){
  //   this.showRoom = !this.showRoom;
  // }

  public rooms: any;

  constructor(private router: Router, public roomsService: RoomsService) { 
    this.rooms = this.roomsService.getAll();
  }

  ngOnInit() {
  }

  chooseRoom(room) {
    this.roomsService.setSelection(room);
    this.router.navigate(['room-details']);
  }
}
