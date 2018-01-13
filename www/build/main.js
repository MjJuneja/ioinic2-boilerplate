webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_service__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(api, menu, navCtrl, global_api) {
        var _this = this;
        this.api = api;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.global_api = global_api;
        this.signup = {
            yname: '',
            email: '',
            password1: '',
            password2: '',
            spassword1: '',
            spassword2: ''
        };
        this.logo = "assets/imgs/icon.png";
        this.logo1 = "assets/imgs/logo.png";
        this.doRegister = function () {
            if (_this.signup.yname.trim().length < 1 || _this.signup.email.trim().length < 1 || _this.signup.password1.trim().length < 1 || _this.signup.spassword1.trim().length < 1) {
                _this.global_api.showAlert("Fill complete data!");
            }
            else if (_this.signup.password1.trim().length < 1 || _this.signup.password2.trim().length < 1 || _this.signup.password1 !== _this.signup.password2) {
                _this.global_api.showAlert("Password not matched ! try again");
                _this.signup.password1 = _this.signup.password2 = '';
            }
            else if (_this.signup.spassword1.trim().length < 1 || _this.signup.spassword2.trim().length < 1 || _this.signup.spassword1 !== _this.signup.spassword2) {
                _this.global_api.showAlert("Spending Password not matched ! try again");
                _this.signup.spassword1 = _this.signup.spassword2 = '';
            }
            else {
                var obj = {
                    username: _this.signup.yname,
                    email: _this.signup.email,
                    loginpassword: _this.signup.password1,
                    spendingpassword: _this.signup.spassword1
                };
                _this.data = _this.api.isAuthenticate(obj);
                _this.data.then(function (data) {
                    if (data.error_message) {
                        _this.global_api.showAlert(data.error_message);
                    }
                    else {
                        localStorage.setItem("signup", data.data);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
                    }
                });
            }
        };
        this.redirect = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
        };
        this.menu.enable(false, 'myMenu');
    }
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/signup/signup.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Register Account</ion-title>\n    </ion-navbar>\n    \n  </ion-header>\n\n\n  <ion-content>\n\n    <form (submit)="doRegister()">\n      <ion-list>\n\n        <ion-item>\n          <ion-label floating>Your Name</ion-label>\n          <ion-input type="text" [(ngModel)]="signup.yname" name="yname"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Your Email</ion-label>\n          <ion-input type="email" [(ngModel)]="signup.email" name="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Your Password</ion-label>\n          <ion-input type="password" [(ngModel)]="signup.password1" name="password1"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Confirm Password</ion-label>\n          <ion-input type="password" [(ngModel)]="signup.password2" name="password2"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Your Spending Password</ion-label>\n          <ion-input type="password" [(ngModel)]="signup.spassword1" name="spassword1"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Confirm Spending Password</ion-label>\n          <ion-input type="password" [(ngModel)]="signup.spassword2" name="spassword2"></ion-input>\n        </ion-item>\n\n        <div padding>\n\n          <button type="submit" ion-button color="primary" block>Proceed</button>\n        </div>\n\n      </ion-list>\n    </form>\n\n    <br>\n    <span>Already have an account?<a (click)="redirect()">Log In</a></span>\n  </ion-content>\n`/*ion-inline-end:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/signup/signup.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__signup_service__["a" /* SignupApi */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__signup_service__["a" /* SignupApi */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* Api */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/list/list.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassRecoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_pass_api__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPassRecoverPage = (function () {
    function ResetPassRecoverPage(navCtrl, navParams, global_api, api) {
        this.navCtrl = navCtrl;
        this.global_api = global_api;
        this.api = api;
        this.logo = "assets/imgs/icon.png";
        this.logo1 = "assets/imgs/logo.png";
        this.confirm_pass = "";
        this.account = {
            otp: '',
            password: ''
        };
        this.email = navParams.data.email;
    }
    ResetPassRecoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPassRecoverPage');
    };
    ResetPassRecoverPage.prototype.BackToSignIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ResetPassRecoverPage.prototype.submitForm = function () {
        var _this = this;
        if (this.account.otp.trim().length < 1 || this.account.password.trim().length < 1 || this.account.password != this.confirm_pass) {
            this.global_api.showAlert("Please Enter the Email Id");
        }
        else {
            this.api.passReset(this.account, this.email).then(function (data) {
                if (data.data == "success!") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                }
            });
        }
    };
    ResetPassRecoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset-pass-recover',template:/*ion-inline-start:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/reset-pass-recover/reset-pass-recover.html"*/`<ion-header>\n<img [src]="logo" alt="">\n<img [src]="logo1" alt="">\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Recover Password</h3>\n  <form (submit)="submitForm()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Enter OTP</ion-label>\n        <ion-input type="email" [(ngModel)]="account.otp" name="email"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n       \n        <ion-label floating>Enter Password</ion-label>\n        <ion-input  type="password" [(ngModel)]="account.password" name="password"></ion-input>\n      </ion-item>\n      <ion-item>\n        \n        <ion-label floating>Confirm Password</ion-label>\n        <ion-input  type="password" [(ngModel)]="confirm_pass" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n\n        <button type="submit" ion-button color="primary">Submit</button>\n      </div>\n\n    </ion-list>\n  </form>\n  <a (click)="BackToSignIn()">Back to Sign In</a>\n</ion-content>\n`/*ion-inline-end:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/reset-pass-recover/reset-pass-recover.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__reset_pass_api__["a" /* recoverPasswordApi */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_4__reset_pass_api__["a" /* recoverPasswordApi */]])
    ], ResetPassRecoverPage);
    return ResetPassRecoverPage;
}());

//# sourceMappingURL=reset-pass-recover.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recover_email_recover_email__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recover_password_recover_password__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecoverAccountPage = (function () {
    function RecoverAccountPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.logo = "assets/imgs/icon.png";
        this.logo1 = "assets/imgs/logo.png";
        this.menu.enable(false, 'myMenu');
    }
    RecoverAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecoverAccountPage');
    };
    RecoverAccountPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RecoverAccountPage.prototype.forgot_email = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__recover_email_recover_email__["a" /* RecoverEmailPage */]);
    };
    RecoverAccountPage.prototype.forgot_password = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recover_password_recover_password__["a" /* RecoverPasswordPage */]);
    };
    RecoverAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-recover-account',template:/*ion-inline-start:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/recover-account/recover-account.html"*/`<ion-header>\n\n<img [src]="logo" alt="">\n<img [src]="logo1" alt="">\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Recover Account</h3>\n  <button ion-button (click)="forgot_email()">I forgot my email</button>\n  <br>\n  <button ion-button (click)="forgot_password()">I forgot my password</button>\n  <br>\n  <a (click)="back()">Back to Sign In</a>\n</ion-content>\n\n`/*ion-inline-end:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/recover-account/recover-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* MenuController */]])
    ], RecoverAccountPage);
    return RecoverAccountPage;
}());

//# sourceMappingURL=recover-account.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recover_funds_recover_funds__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecoverEmailPage = (function () {
    function RecoverEmailPage(navCtrl, navParams, global_api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global_api = global_api;
        this.logo = "assets/imgs/icon.png";
        this.logo1 = "assets/imgs/logo.png";
        this.mnemonic = "";
        this.passInput = function () {
            if (_this.mnemonic.trim().length > 0) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__recover_funds_recover_funds__["a" /* RecoverFundsPage */], { mnemonic: _this.mnemonic });
            }
            else {
                _this.global_api.showAlert("Please Enter the Phrase");
            }
        };
        this.redirect = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
        };
    }
    RecoverEmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-recover-email',template:/*ion-inline-start:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/recover-email/recover-email.html"*/`<ion-header>\n\n    <img [src]="logo" alt="">\n    <img [src]="logo1" alt="">\n</ion-header>\n\n\n<ion-content padding>\n\n  <h3>Recover Funds</h3>\n  <ion-item>\n  <ion-label floating>Enter Mnemonic Phrase</ion-label>\n  <ion-input type="text" [(ngModel)]="mnemonic"></ion-input>\n  </ion-item>\n  <button (click)="passInput()">Recover Now</button>\n  <br>\n  <a (click)="redirect()"><span>Back to Sign in</span></a>\n</ion-content>\n`/*ion-inline-end:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/recover-email/recover-email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */]])
    ], RecoverEmailPage);
    return RecoverEmailPage;
}());

//# sourceMappingURL=recover-email.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverFundsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recover_funds_service__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecoverFundsPage = (function () {
    function RecoverFundsPage(navCtrl, navParams, global_api, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global_api = global_api;
        this.api = api;
        this.recover = {
            mnemonic: '',
            email: '',
            password1: '',
            password2: '',
            spassword1: '',
            spassword2: ''
        };
        this.logo = "assets/imgs/icon.png";
        this.logo1 = "assets/imgs/logo.png";
        this.recoverFunds = function () {
            if (_this.recover.email.trim().length < 1 || _this.recover.password1.trim().length < 1 || _this.recover.spassword1.trim().length < 1) {
                _this.global_api.showAlert("Fill complete data!");
            }
            else if (_this.recover.password1.trim().length < 1 || _this.recover.password2.trim().length < 1 || _this.recover.password1 !== _this.recover.password2) {
                _this.global_api.showAlert("Password not matched ! try again");
                _this.recover.password1 = _this.recover.password2 = '';
            }
            else if (_this.recover.spassword1.trim().length < 1 || _this.recover.spassword2.trim().length < 1 || _this.recover.spassword1 !== _this.recover.spassword2) {
                _this.global_api.showAlert("Spending Password not matched ! try again");
                _this.recover.spassword1 = _this.recover.spassword2 = '';
            }
            else {
                var obj = {
                    mnemonic: _this.recover.mnemonic,
                    email: _this.recover.email,
                    loginpassword: _this.recover.password1,
                    spendingpassword: _this.recover.spassword1
                };
                _this.data = _this.api.isAuthenticate(obj);
                _this.data.then(function (data) {
                    if (data.error_message) {
                        _this.global_api.showAlert(data.error_message);
                    }
                    else if (data.data === 'Success!') {
                        _this.global_api.showAlert("Successfull");
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
                    }
                    else {
                        console.log(data);
                    }
                });
            }
        };
        this.redirect = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
        };
        this.recover.mnemonic = navParams.data.mnemonic;
    }
    RecoverFundsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-recover-funds',template:/*ion-inline-start:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/recover-funds/recover-funds.html"*/`<ion-header>\n\n        <img [src]="logo" alt="">\n        <img [src]="logo1" alt="">\n    </ion-header>\n\n\n    <ion-content padding>\n\n      <h3>Recover Funds</h3>\n\n      <form (submit)="recoverFunds()">\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>Your Email</ion-label>\n            <ion-input type="email" [(ngModel)]="recover.email" name="email"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Your Password</ion-label>\n            <ion-input type="password" [(ngModel)]="recover.password1" name="password1"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Confirm Password</ion-label>\n            <ion-input type="password" [(ngModel)]="recover.password2" name="password2"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Your Spending Password</ion-label>\n            <ion-input type="password" [(ngModel)]="recover.spassword1" name="spassword1"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Confirm Spending Password</ion-label>\n            <ion-input type="password" [(ngModel)]="recover.spassword2" name="spassword2"></ion-input>\n          </ion-item>\n\n          <div padding>\n\n            <button type="submit" ion-button color="primary" block>Submit</button>\n          </div>\n\n        </ion-list>\n      </form>\n\n      <br>\n      <a (click)="redirect()"><span>Back to Sign in</span></a>\n    </ion-content>\n`/*ion-inline-end:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/recover-funds/recover-funds.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__recover_funds_service__["a" /* RecoverFundsApi */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1__recover_funds_service__["a" /* RecoverFundsApi */]])
    ], RecoverFundsPage);
    return RecoverFundsPage;
}());

//# sourceMappingURL=recover-funds.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reset_pass_recover_reset_pass_recover__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recover_password_api__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RecoverPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecoverPasswordPage = (function () {
    function RecoverPasswordPage(navCtrl, navParams, api, alertCtrl, menu, global_api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.global_api = global_api;
        this.logo = "assets/img/icon.png";
        this.logo1 = "assets/img/logo.png";
        this.email = "";
    }
    RecoverPasswordPage.prototype.showAlert = function (data) {
        var alert = this.alertCtrl.create({
            title: data,
            buttons: ['OK']
        });
        alert.present();
    };
    RecoverPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecoverPasswordPage');
    };
    RecoverPasswordPage.prototype.backToSignIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RecoverPasswordPage.prototype.recoverNow = function () {
        var _this = this;
        if (this.email.trim().length > 0) {
            this.api.getOTP(this.email).then(function (data) {
                if (data.error_message == "Invalid Username or Password") {
                    _this.global_api.showAlert("Invalid Username or Password");
                }
                else if (data.data == "success!") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__reset_pass_recover_reset_pass_recover__["a" /* ResetPassRecoverPage */], { email: _this.email });
                }
            });
        }
        else {
            this.global_api.showAlert("Please Enter the Email Id");
        }
    };
    RecoverPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-recover-password',template:/*ion-inline-start:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/recover-password/recover-password.html"*/`<ion-header>\n\n<img [src]="logo" alt="">\n<img [src]="logo1" alt="">\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Recover Password</h3>\n  <ion-item>\n        <ion-label floating>Enter Email Id</ion-label>\n        <ion-input  type="email" [(ngModel)]="email" name="email"></ion-input>\n      </ion-item>\n  <button ion-button (click)="recoverNow()">Recover Now</button>   \n  <br>\n  <a (click)="backToSignIn()">Back to Sign In</a> \n</ion-content>\n`/*ion-inline-end:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/recover-password/recover-password.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__recover_password_api__["a" /* recoverPassApi */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__recover_password_api__["a" /* recoverPassApi */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* Api */]])
    ], RecoverPasswordPage);
    return RecoverPasswordPage;
}());

//# sourceMappingURL=recover-password.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.logo = "./assets/imgs/icon.png";
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n    <img [src]="logo" alt="">\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n`/*ion-inline-end:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_reset_pass_recover_reset_pass_recover__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_recover_password_recover_password__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_recover_funds_recover_funds__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_recover_email_recover_email__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_recover_account_recover_account__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_list_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_4__pages_recover_password_recover_password__["a" /* RecoverPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_recover_funds_recover_funds__["a" /* RecoverFundsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_recover_email_recover_email__["a" /* RecoverEmailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_recover_account_recover_account__["a" /* RecoverAccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_reset_pass_recover_reset_pass_recover__["a" /* ResetPassRecoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], { tabsPlacement: 'top' }, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_recover_password_recover_password__["a" /* RecoverPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_recover_funds_recover_funds__["a" /* RecoverFundsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_recover_email_recover_email__["a" /* RecoverEmailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_recover_account_recover_account__["a" /* RecoverAccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_reset_pass_recover_reset_pass_recover__["a" /* ResetPassRecoverPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */],
                { provide: __WEBPACK_IMPORTED_MODULE_11__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_api__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recover_account_recover_account__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, toastCtrl, api, alertCtrl, menu, global_api) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.global_api = global_api;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            email: '',
            loginpassword: ''
        };
        this.logo = "assets/imgs/icon.png";
        this.logo1 = "assets/imgs/logo.png";
        this.menu.enable(false, 'myMenu');
    }
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (this.account.email.trim().length > 0 && this.account.loginpassword.trim().length > 0) {
            this.Data = this.api.isAuthenticate(this.account);
            this.Data.then(function (data) {
                //use data.data for data
                localStorage.setItem("login", data.data);
                console.log(data);
                if (data.error_message == "Invalid Username or Password") {
                    _this.global_api.showAlert("Invalid Username or Password");
                }
            });
        }
        else {
            this.global_api.showAlert('Please enter email & password');
        }
    };
    LoginPage.prototype.forget = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recover_account_recover_account__["a" /* RecoverAccountPage */]);
    };
    LoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/login/login.html"*/`<ion-header>\n\n  <!--<ion-navbar>\n    <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n  </ion-navbar>-->\n<img [src]="logo" alt="">\n<img [src]="logo1" alt="">\n</ion-header>\n\n\n<ion-content>\n  <form >\n    <ion-list>\n\n      <ion-item>\n        <!--<ion-label fixed>{{ \'EMAIL\' | translate }}</ion-label>-->\n        <ion-label floating>Email Id</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n      </ion-item>\n\n      <!--\n      Want to use a Username instead of an Email? Here you go:\n\n      <ion-item>\n        <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n      </ion-item>\n      -->\n\n      <ion-item>\n        <!--<ion-label fixed>{{ \'PASSWORD\' | translate }}</ion-label>-->\n        <ion-label floating>Password</ion-label>\n        <ion-input  type="password" [(ngModel)]="account.loginpassword" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n\n        <button ion-button color="primary" block (click)="doLogin()">Login</button>\n      </div>\n\n    </ion-list>\n  </form>\n\n<br>\n  <a (click)="forget()">I can\'t access my account</a>\n  <br>\n  <span>Don\'t have an account<a (click)="signUp()">Sign Up</a></span>\n  \n</ion-content>\n`/*ion-inline-end:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_api__["a" /* LoginApi */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__login_api__["a" /* LoginApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* Api */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginApi = (function () {
    function LoginApi(http) {
        this.http = http;
    }
    LoginApi.prototype.isAuthenticate = function (obj) {
        var url = "http://api.suisse-coin.com/authenticate/";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.Data = "email=" + obj.email + "&loginpassword=" + obj.loginpassword;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.Data, {
            headers: headers
        }).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    LoginApi.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    LoginApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LoginApi);
    return LoginApi;
}());

//# sourceMappingURL=login-api.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverFundsApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecoverFundsApi = (function () {
    function RecoverFundsApi(http) {
        this.http = http;
    }
    RecoverFundsApi.prototype.isAuthenticate = function (obj) {
        var url = "http://api.suisse-coin.com/RecoverWallet/";
        var data = "MnemonicPhrase=" + obj.mnemonic + "&Email=" + obj.email + "&loginPassword=" + obj.loginpassword + "&spendingPassword=" + obj.spendingpassword;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, data, {
            headers: headers
        }).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    RecoverFundsApi.prototype.handleError = function (error) {
        // console.error('An error occurred', error);
        alert("Error!!!");
        // return Promise.reject(error.message || error);
    };
    RecoverFundsApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RecoverFundsApi);
    return RecoverFundsApi;
}());

//# sourceMappingURL=recover-funds.service.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return recoverPassApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var recoverPassApi = (function () {
    function recoverPassApi(http) {
        this.http = http;
    }
    recoverPassApi.prototype.getOTP = function (email) {
        var url = "http://api.suisse-coin.com/RequestOTP/" + email + "/";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // this.Data = "email="+obj.email+"&loginpassword="+obj.loginpassword;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.get(url, {
            headers: headers
        }).toPromise().then(function (response) {
            console.log(response.json());
            return response.json();
        }).catch(this.handleError);
    };
    recoverPassApi.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    recoverPassApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], recoverPassApi);
    return recoverPassApi;
}());

//# sourceMappingURL=recover_password_api.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupApi = (function () {
    function SignupApi(http) {
        this.http = http;
    }
    SignupApi.prototype.isAuthenticate = function (obj) {
        var url = "http://api.suisse-coin.com/create_Wallet/";
        var data = "username=" + obj.username + "&email=" + obj.email + "&loginpassword=" + obj.loginpassword + "&spendingpassword=" + obj.spendingpassword;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, data, {
            headers: headers
        }).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    SignupApi.prototype.handleError = function (error) {
        // console.error('An error occurred', error);
        alert("Error!!!");
        // return Promise.reject(error.message || error);
    };
    SignupApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SignupApi);
    return SignupApi;
}());

//# sourceMappingURL=signup.service.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return recoverPasswordApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var recoverPasswordApi = (function () {
    function recoverPasswordApi(http) {
        this.http = http;
    }
    recoverPasswordApi.prototype.passReset = function (account, email) {
        var url = "http://api.suisse-coin.com/ResetLoginPassword/";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.Data = "otp=" + account.otp + "&email=" + email + "&newpassword=" + account.password;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, this.Data, {
            headers: headers
        }).toPromise().then(function (response) {
            console.log(response.json());
            return response.json();
        }).catch(this.handleError);
    };
    recoverPasswordApi.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    recoverPasswordApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], recoverPasswordApi);
    return recoverPasswordApi;
}());

//# sourceMappingURL=reset-pass-api.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_signup__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_0__list_list__["a" /* ListPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__signup_signup__["a" /* SignupPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.tab1Title = " ";
        this.tab2Title = " ";
        this.tab3Title = " ";
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" [tabTitle]="tab1Title" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" [tabTitle]="tab2Title" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" [tabTitle]="tab3Title" tabIcon="cog"></ion-tab>\n</ion-tabs>`/*ion-inline-end:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */] },
            { title: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/app/app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/Users/mukuljuneja/Documents/GitHub/Suisse Coin/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    function Api(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.url = 'https://example.com/api/v1';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.showAlert = function (data) {
        var alert = this.alertCtrl.create({
            title: data,
            buttons: ['OK']
        });
        alert.present();
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map