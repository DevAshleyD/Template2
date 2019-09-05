import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


import { LeadersService } from '../leaders.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  selection: any;
  public show:boolean = false;
  // public buttonName:any = 'Show';

  constructor(private router: Router, public leadersService: LeadersService) { 
    this.selection = this.leadersService.getSelection() || this.leadersService.getAll()[0];
  }

  

  ngOnInit() { 
   
   }

   home(){
     this.router.navigate(['']);
   }

   getDirections(){
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    // if(this.show)  
    //   this.buttonName = "Hide";
    // else
    //   this.buttonName = "Show";
   }
}
