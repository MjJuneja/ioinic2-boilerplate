import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  logo:String = "./assets/imgs/icon.png";
  constructor(public navCtrl: NavController) {

  }

}