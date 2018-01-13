import { LoginPage } from './../login/login';
import { RecoverFundsPage } from './../recover-funds/recover-funds';
import { Api } from './../../providers/api/api';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'


@Component({
  selector: 'page-recover-email',
  templateUrl: 'recover-email.html',
})
export class RecoverEmailPage {
  logo:String = "assets/imgs/icon.png";
  logo1:String = "assets/imgs/logo.png";

  mnemonic:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams,public global_api:Api) {
  }

  passInput=()=>{
    if(this.mnemonic.trim().length>0){
      this.navCtrl.push(RecoverFundsPage,{mnemonic:this.mnemonic});
    }
    else{
      this.global_api.showAlert("Please Enter the Phrase");
    }
  };

  redirect=():void=>{
    this.navCtrl.push(LoginPage);
  };

}
