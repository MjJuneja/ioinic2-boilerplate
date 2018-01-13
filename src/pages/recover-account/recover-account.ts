import { RecoverEmailPage } from './../recover-email/recover-email';
import { Component } from '@angular/core';
import {  NavController, NavParams,MenuController,AlertController } from 'ionic-angular';
import {RecoverPasswordPage} from '../recover-password/recover-password';

@Component({
  selector: 'page-recover-account',
  templateUrl: 'recover-account.html',
})
export class RecoverAccountPage {
  logo:String = "assets/imgs/icon.png";
  logo1:String = "assets/imgs/logo.png";
  constructor(public navCtrl: NavController, public navParams: NavParams,private menu:MenuController
  ) {
    this.menu.enable(false, 'myMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoverAccountPage');
  }

  back(){
    this.navCtrl.pop();
  }
  forgot_email(){
    this.navCtrl.push(RecoverEmailPage);
  }

  forgot_password(){
      this.navCtrl.push(RecoverPasswordPage);
  }

}
