import { ResetPassRecoverPage } from './../pages/reset-pass-recover/reset-pass-recover';
import {HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { Api } from './../providers/api/api';
import { TabsPage } from './../pages/tabs/tabs';
import { RecoverPasswordPage } from './../pages/recover-password/recover-password';
import { RecoverFundsPage } from './../pages/recover-funds/recover-funds';
import { RecoverEmailPage } from './../pages/recover-email/recover-email';
import { RecoverAccountPage } from './../pages/recover-account/recover-account';
import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,RecoverPasswordPage,
    RecoverFundsPage,
    RecoverEmailPage,
    RecoverAccountPage,
    SignupPage,
    LoginPage,
    TabsPage,
    ResetPassRecoverPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RecoverPasswordPage,
    RecoverFundsPage,
    RecoverEmailPage,
    RecoverAccountPage,
    SignupPage,
    LoginPage,
    TabsPage,
    ResetPassRecoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Api,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
