import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LeadersService } from '../leaders.service'



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  public leaders: any;

  constructor(private router: Router, public leadersService: LeadersService) { 
    this.leaders = this.leadersService.getAll();
  }

  ngOnInit() {
  }

  chooseLeader(leader) {
    this.leadersService.setSelection(leader);
    this.router.navigate(['details']);
  }

}


