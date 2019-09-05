import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

import { RoomsService } from '../rooms.service'

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.page.html',
  styleUrls: ['./room-details.page.scss'],
})
export class RoomDetailsPage implements OnInit {

  public selection: any;
  public roomId: number = Math.floor(Math.random() * Math.floor(9999));
  toast: Promise<void>;

  constructor(private router: Router, public roomsService: RoomsService,public loadingController: LoadingController,public toastController: ToastController) { 
    this.selection = this.roomsService.getSelection() || this.roomsService.getAll()[0];
  }

  ngOnInit() { 
   
   }

   home(){
    this.router.navigate(['']);
  }

  confirm() {
    // send booking info
    // let loader = this.loadingCtrl.create({
    //   content: "Please wait..."
    // });
    // show message
    // let toast = this.toastCtrl.create({
    //   showCloseButton: true,
    //   // cssClass: 'profile-bg',
    //   message: 'Room Booking Successful!',
    //   duration: 3000,
    //   position: 'bottom'
    // });

    // loader.present();
      this.loadingController.create({
        message: 'Please wait...',
        duration: 2500
      })
      .then((res) => {
        res.present();
   
        // res.onDidDismiss().then((dis) => {
        //   console.log('Loading dismissed! after 2 Seconds');
        // });
      });


      
    setTimeout(() => {
      let toast = this.toastController.create({
        message: 'Room Booking Successful!',
        duration: 1500
      }).then((toastData)=>{
        toastData.present();
      });

      this.toast = this.toastController.dismiss();

      // loader.dismiss();
      // toast.present();
      this.roomsService.booking(this.selection, this.roomId);
      // back to home page
      this.router.navigate(['']);
    }, 3000)
  }

}
