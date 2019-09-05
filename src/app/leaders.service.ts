import { Injectable } from '@angular/core';
import {LEADERS} from "./mock-leaders";

@Injectable({
  providedIn: 'root'
})
export class LeadersService {
  leaders: any;
  selection: any;

  constructor() {
    this.leaders = LEADERS;
  }

getAll() {
  return this.leaders;
}

setSelection(selection) {
  this.selection = selection;
}

getSelection() {
  return this.selection;
}
}
