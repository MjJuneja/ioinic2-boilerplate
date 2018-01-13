import { Component } from '@angular/core';

import {  NavController, ToastController,AlertController,MenuController } from 'ionic-angular';
import {LoginApi} from './login-api';
import {RecoverAccountPage} from '../recover-account/recover-account';
import {Api} from '../../providers/api/api';
import {SignupPage} from '../signup/signup';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[LoginApi]
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, loginpassword: string } = {
    email: '',
    loginpassword: ''
  };
  logo:String = "assets/imgs/icon.png";
  logo1:String = "assets/imgs/logo.png";
  Data:any;


 

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public api:LoginApi,
    public alertCtrl:AlertController,
    private menu:MenuController,
    private global_api:Api
  ) {

    
    this.menu.enable(false, 'myMenu');
  }

  doLogin() {
  
    if(this.account.email.trim().length>0 && this.account.loginpassword.trim().length>0){
    this.Data = this.api.isAuthenticate(this.account);
    this.Data.then((data)=>{
      //use data.data for data
      localStorage.setItem("login",data.data);
      console.log(data);
      if(data.error_message=="Invalid Username or Password"){
           this.global_api.showAlert("Invalid Username or Password");
      }
    })
  }
  else{
        this.global_api.showAlert('Please enter email & password');
  }
}

forget(){
    this.navCtrl.push(RecoverAccountPage);
}

signUp(){
    this.navCtrl.push(SignupPage);
}

}
