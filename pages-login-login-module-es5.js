function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper-login\">\r\n  <div class=\"card\">\r\n    <div class=\"web-logo\">ε</div>\r\n    <form #loginForm=\"ngForm\">\r\n      <mat-form-field class=\"w-100\" appearance=\"outline\">\r\n          <mat-label class=\"placeholder\">Username</mat-label>\r\n          <input matInput [(ngModel)]=\"userName\" name=\"userName\" type=\"text\" required>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"w-100\" appearance=\"outline\" id=\"password-login\">\r\n          <mat-label class=\"placeholder\">Password</mat-label>\r\n          <input matInput [(ngModel)]=\"passWord\" name=\"passWord\" [type]=\"seePassWord?'text':'password'\" required>\r\n          <mat-hint align=\"end\">\r\n            <div class=\"visible-password\">\r\n              See Password <input type=\"checkbox\" name=\"seePassWord\" [(ngModel)]=\"seePassWord\">\r\n            </div>\r\n          </mat-hint>\r\n      </mat-form-field>\r\n      <button class=\"button-epsilon\" type=\"submit\" (click)=\"loginUser()\">\r\n          Login\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/login/login.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper-login {\n  background: linear-gradient(310deg, white 5%, #B00225 200%);\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  min-height: 100%;\n  display: flex;\n  width: 100%;\n}\n\n.card {\n  box-shadow: 0 0 8px 0px #B00225;\n  background-color: white;\n  border-radius: 8px;\n  padding: 30px 20px;\n  width: 350px;\n  margin: 2%;\n}\n\n.web-logo {\n  font-size: 110px;\n  background: linear-gradient(160deg, white 5%, #B00225 200%);\n  border: solid 10px #B00225;\n  color: #B00225;\n  width: 150px;\n  height: 150px;\n  text-align: center;\n  border-radius: 50%;\n  font-weight: 600;\n  font-family: fangsong;\n  margin: 20px auto;\n  box-shadow: 0 0 6px 0 black;\n  line-height: 110px;\n}\n\n.input-epsilon {\n  border: solid 1px #B00225;\n  border-radius: 4px;\n  padding: 10px 5px;\n  width: calc(100% - 20px);\n  margin: 5px auto;\n  display: block;\n}\n\n.visible-password {\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin: 5px 0;\n  gap: 5px;\n}\n\ninput.input-epsilon::after {\n  background: none;\n}\n\n.button-epsilon {\n  background-color: #B00225;\n  border: none;\n  border-radius: 5px;\n  width: 100%;\n  outline: none;\n  color: white;\n  padding: 20px 0;\n  display: block;\n}\n\n.snackbar-epsilon {\n  color: #B00225;\n}\n\n::ng-deep #password-login .mat-form-field-subscript-wrapper {\n  padding: 0;\n  margin-top: 0;\n}\n\n@media only screen and (max-width: 900px) {\n  .card {\n    width: 80vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxnb2ppYmVyaWhcXEFuZ3VsYXIgUHJvamVjdFxcZW1wbG95ZWUtcHJvamVjdC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyREFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsMkRBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxXQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXItbG9naW57XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzEwZGVnLCB3aGl0ZSA1JSwgI0IwMDIyNSAyMDAlKTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAwcHggI0IwMDIyNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgbWFyZ2luOiAyJTtcclxufVxyXG5cclxuLndlYi1sb2dve1xyXG4gICAgZm9udC1zaXplOiAxMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHdoaXRlIDUlLCAjQjAwMjI1IDIwMCUpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxMHB4ICNCMDAyMjU7XHJcbiAgICBjb2xvcjogI0IwMDIyNTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6IGZhbmdzb25nO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OjAgMCA2cHggMCByZ2JhKDAsMCwwLDEpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDExMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtZXBzaWxvbntcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNCMDAyMjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnZpc2libGUtcGFzc3dvcmR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbmlucHV0LmlucHV0LWVwc2lsb246OmFmdGVye1xyXG4gICAgYmFja2dyb3VuZDpub25lO1xyXG59XHJcblxyXG4uYnV0dG9uLWVwc2lsb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjAwMjI1O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc25hY2tiYXItZXBzaWxvbntcclxuICAgIGNvbG9yOiAjQjAwMjI1O1xyXG59XHJcblxyXG46Om5nLWRlZXAgI3Bhc3N3b3JkLWxvZ2luIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlcntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAuY2FyZHtcclxuICAgICAgICB3aWR0aDogODB2dztcclxuICAgIH0gICAgXHJcbn0iLCIud3JhcHBlci1sb2dpbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTBkZWcsIHdoaXRlIDUlLCAjQjAwMjI1IDIwMCUpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDBweCAjQjAwMjI1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWFyZ2luOiAyJTtcbn1cblxuLndlYi1sb2dvIHtcbiAgZm9udC1zaXplOiAxMTBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MGRlZywgd2hpdGUgNSUsICNCMDAyMjUgMjAwJSk7XG4gIGJvcmRlcjogc29saWQgMTBweCAjQjAwMjI1O1xuICBjb2xvcjogI0IwMDIyNTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IGZhbmdzb25nO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgYm94LXNoYWRvdzogMCAwIDZweCAwIGJsYWNrO1xuICBsaW5lLWhlaWdodDogMTEwcHg7XG59XG5cbi5pbnB1dC1lcHNpbG9uIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0IwMDIyNTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBtYXJnaW46IDVweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnZpc2libGUtcGFzc3dvcmQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGdhcDogNXB4O1xufVxuXG5pbnB1dC5pbnB1dC1lcHNpbG9uOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5idXR0b24tZXBzaWxvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCMDAyMjU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc25hY2tiYXItZXBzaWxvbiB7XG4gIGNvbG9yOiAjQjAwMjI1O1xufVxuXG46Om5nLWRlZXAgI3Bhc3N3b3JkLWxvZ2luIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmNhcmQge1xuICAgIHdpZHRoOiA4MHZ3O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, snackBar) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.snackBar = snackBar;
        this.userName = '';
        this.passWord = '';
        this.seePassWord = false;
      }

      _createClass(LoginComponent, [{
        key: "focusField",
        value: function focusField(fieldName) {
          fieldName.nativeElement.focus();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userName = 'ghozibimoruci';
          this.passWord = 'ghozibimoruci';
        }
      }, {
        key: "loginUser",
        value: function loginUser() {
          if (!this.userName) {
            this.openSnackBar('Your Username is empty!');
            this.focusField(this.userNameField);
          } else if (!this.passWord) {
            this.openSnackBar('Your Password is empty!');
            this.focusField(this.passWordField);
          } else {
            if (this.userName == 'ghozibimoruci' && this.passWord == 'ghozibimoruci') {
              sessionStorage.setItem('tokenLogin', JSON.stringify({
                username: this.userName,
                password: this.passWord
              }));
              this.router.navigateByUrl('/tic-tac-toe');
            } else {
              this.openSnackBar('Your Username or Password are invalid!');
            }
          }
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message) {
          this.snackBar.open(message, 'Dismiss', {
            horizontalPosition: 'end',
            panelClass: 'snackbar-epsilon'
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userNameField', null), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], LoginComponent.prototype, "userNameField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('passWordField', null), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], LoginComponent.prototype, "passWordField", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/pages/login/login.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _login_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.routing */
    "./src/app/pages/login/login.routing.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _login_routing__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()],
      exports: [],
      declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
      providers: []
    })], LoginModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.routing.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/login/login.routing.ts ***!
    \**********************************************/

  /*! exports provided: LoginRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
      return LoginRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/pages/login/login.component.ts");

    var routes = [{
      path: '',
      component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }];

    var LoginRoutingModule = function LoginRoutingModule() {
      _classCallCheck(this, LoginRoutingModule);
    };

    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      declarations: []
    })], LoginRoutingModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map