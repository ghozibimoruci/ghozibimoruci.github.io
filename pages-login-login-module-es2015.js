(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper-login\">\r\n  <div class=\"card\">\r\n    <div class=\"web-logo\">ε</div>\r\n    <form #loginForm=\"ngForm\">\r\n      <mat-form-field class=\"w-100\" appearance=\"outline\">\r\n          <mat-label class=\"placeholder\">Username</mat-label>\r\n          <input matInput [(ngModel)]=\"userName\" name=\"userName\" type=\"text\" required>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"w-100\" appearance=\"outline\" id=\"password-login\">\r\n          <mat-label class=\"placeholder\">Password</mat-label>\r\n          <input matInput [(ngModel)]=\"passWord\" name=\"passWord\" [type]=\"seePassWord?'text':'password'\" required>\r\n          <mat-hint align=\"end\">\r\n            <div class=\"visible-password\">\r\n              See Password <input type=\"checkbox\" name=\"seePassWord\" [(ngModel)]=\"seePassWord\">\r\n            </div>\r\n          </mat-hint>\r\n      </mat-form-field>\r\n      <button class=\"button-epsilon\" type=\"submit\" (click)=\"loginUser()\">\r\n          Login\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper-login {\n  background: linear-gradient(310deg, white 5%, #6601D1 200%);\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  min-height: 100%;\n  display: flex;\n  width: 100%;\n}\n\n.card {\n  box-shadow: 0 0 8px 0px #6601D1;\n  background-color: white;\n  border-radius: 8px;\n  padding: 30px 20px;\n  width: 350px;\n  margin: 2%;\n}\n\n.web-logo {\n  font-size: 110px;\n  background: linear-gradient(160deg, white 5%, #6601D1 200%);\n  border: solid 10px #6601D1;\n  color: #6601D1;\n  width: 150px;\n  height: 150px;\n  text-align: center;\n  border-radius: 50%;\n  font-weight: 600;\n  font-family: fangsong;\n  margin: 20px auto;\n  box-shadow: 0 0 6px 0 black;\n  line-height: 110px;\n}\n\n.input-epsilon {\n  border: solid 1px #6601D1;\n  border-radius: 4px;\n  padding: 10px 5px;\n  width: calc(100% - 20px);\n  margin: 5px auto;\n  display: block;\n}\n\n.visible-password {\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\ninput.input-epsilon::after {\n  background: none;\n}\n\n.button-epsilon {\n  background-color: #6601D1;\n  border: none;\n  border-radius: 5px;\n  width: 100%;\n  outline: none;\n  color: white;\n  padding: 20px 0;\n  display: block;\n}\n\n.snackbar-epsilon {\n  color: #6601D1;\n}\n\n::ng-deep #password-login .mat-form-field-subscript-wrapper {\n  padding: 0;\n  margin-top: 0;\n}\n\n@media only screen and (max-width: 900px) {\n  .card {\n    width: 80vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxnb2ppYmVyaWhcXFByaXZhdGUgUHJvamVjdFxcQW5ndWxhckpTJTIwUHJvamVjdFxcZW1wbG95ZWUtcHJvamVjdC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyREFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsMkRBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksV0FBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyLWxvZ2lue1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxMGRlZywgd2hpdGUgNSUsICM2NjAxRDEgMjAwJSk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMHB4ICM2NjAxRDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIG1hcmdpbjogMiU7XHJcbn1cclxuXHJcbi53ZWItbG9nb3tcclxuICAgIGZvbnQtc2l6ZTogMTEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCB3aGl0ZSA1JSwgIzY2MDFEMSAyMDAlKTtcclxuICAgIGJvcmRlcjogc29saWQgMTBweCAjNjYwMUQxO1xyXG4gICAgY29sb3I6ICM2NjAxRDE7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBmYW5nc29uZztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzowIDAgNnB4IDAgcmdiYSgwLDAsMCwxKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMTBweDtcclxufVxyXG5cclxuLmlucHV0LWVwc2lsb257XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNjYwMUQxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi52aXNpYmxlLXBhc3N3b3Jke1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5pbnB1dC5pbnB1dC1lcHNpbG9uOjphZnRlcntcclxuICAgIGJhY2tncm91bmQ6bm9uZTtcclxufVxyXG5cclxuLmJ1dHRvbi1lcHNpbG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2MDFEMTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMCA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNuYWNrYmFyLWVwc2lsb257XHJcbiAgICBjb2xvcjogIzY2MDFEMTtcclxufVxyXG5cclxuOjpuZy1kZWVwICNwYXNzd29yZC1sb2dpbiAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICB9ICAgIFxyXG59IiwiLndyYXBwZXItbG9naW4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzEwZGVnLCB3aGl0ZSA1JSwgIzY2MDFEMSAyMDAlKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwcHggIzY2MDFEMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMzBweCAyMHB4O1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogMiU7XG59XG5cbi53ZWItbG9nbyB7XG4gIGZvbnQtc2l6ZTogMTEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHdoaXRlIDUlLCAjNjYwMUQxIDIwMCUpO1xuICBib3JkZXI6IHNvbGlkIDEwcHggIzY2MDFEMTtcbiAgY29sb3I6ICM2NjAxRDE7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBmYW5nc29uZztcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMCA2cHggMCBibGFjaztcbiAgbGluZS1oZWlnaHQ6IDExMHB4O1xufVxuXG4uaW5wdXQtZXBzaWxvbiB7XG4gIGJvcmRlcjogc29saWQgMXB4ICM2NjAxRDE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgbWFyZ2luOiA1cHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi52aXNpYmxlLXBhc3N3b3JkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5pbnB1dC5pbnB1dC1lcHNpbG9uOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5idXR0b24tZXBzaWxvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjAxRDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc25hY2tiYXItZXBzaWxvbiB7XG4gIGNvbG9yOiAjNjYwMUQxO1xufVxuXG46Om5nLWRlZXAgI3Bhc3N3b3JkLWxvZ2luIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmNhcmQge1xuICAgIHdpZHRoOiA4MHZ3O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");




let LoginComponent = class LoginComponent {
    constructor(router, snackBar) {
        this.router = router;
        this.snackBar = snackBar;
        this.userName = '';
        this.passWord = '';
        this.seePassWord = false;
    }
    focusField(fieldName) {
        fieldName.nativeElement.focus();
    }
    ngOnInit() {
        this.userName = 'ghozibimoruci';
        this.passWord = 'ghozibimoruci';
    }
    loginUser() {
        if (!this.userName) {
            this.openSnackBar('Your Username is empty!');
            this.focusField(this.userNameField);
        }
        else if (!this.passWord) {
            this.openSnackBar('Your Password is empty!');
            this.focusField(this.passWordField);
        }
        else {
            if (this.userName == 'ghozibimoruci' && this.passWord == 'ghozibimoruci') {
                sessionStorage.setItem('tokenLogin', JSON.stringify({
                    username: this.userName,
                    password: this.passWord
                }));
                this.router.navigateByUrl('/employee');
            }
            else {
                this.openSnackBar('Your Username or Password are invalid!');
            }
        }
    }
    openSnackBar(message) {
        this.snackBar.open(message, 'Dismiss', {
            horizontalPosition: 'end',
            panelClass: 'snackbar-epsilon'
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userNameField', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], LoginComponent.prototype, "userNameField", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('passWordField', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], LoginComponent.prototype, "passWordField", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _login_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.routing */ "./src/app/pages/login/login.routing.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _login_routing__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()],
        exports: [],
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
        providers: [],
    })
], LoginModule);



/***/ }),

/***/ "./src/app/pages/login/login.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/login/login.routing.ts ***!
  \**********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");




const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: [],
    })
], LoginRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map