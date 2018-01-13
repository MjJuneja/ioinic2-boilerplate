import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {Api} from '../../providers/api/api';
import {recoverPasswordApi} from './reset-pass-api';


@Component({
  selector: 'page-reset-pass-recover',
  templateUrl: 'reset-pass-recover.html',
  providers:[recoverPasswordApi]
})
export class ResetPassRecoverPage {

  constructor(public navCtrl: NavController, navParams: NavParams,public global_api:Api,public api:recoverPasswordApi) {
    this.email = navParams.data.email;
  }
  email:String;
  logo:String = "assets/imgs/icon.png";
  logo1:String = "assets/imgs/logo.png";
  confirm_pass:String = "";
  account: { otp: string, password: string } = {
    otp: '',
    password: ''
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPassRecoverPage');
  }

  BackToSignIn(){
    this.navCtrl.push(LoginPage);
  }

  submitForm(){
    if(this.account.otp.trim().length<1 || this.account.password.trim().length<1 || this.account.password!=this.confirm_pass){
      this.global_api.showAlert("Please Enter the Email Id")
  }
     else{
        this.api.passReset(this.account,this.email).then((data)=>{
            if(data.data=="success!"){
              this.navCtrl.push(LoginPage);
            }
        });
     }
 }
}
