import { Injectable } from '@angular/core';
import {ROOMS} from "./mock-rooms";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  rooms: any;
  selection: any;
  roomsBookingCounter: number = 0;
  roomBookings: Array<any> = [];

  constructor() {
    this.rooms = ROOMS;
  }

getAll() {
  return this.rooms;
}
setSelection(selection) {
  this.selection = selection;
}

getSelection() {
  return this.selection;
}

booking(selection, roomId) {
  this.roomsBookingCounter = this.roomsBookingCounter + 1;
  this.roomBookings.push({
    id: this.roomsBookingCounter,
    roomId: roomId,
    selection: selection,
  });
  this.selection = null;
  return Promise.resolve();
}

getBookings() {
  return Promise.resolve(this.roomBookings);
}
}
