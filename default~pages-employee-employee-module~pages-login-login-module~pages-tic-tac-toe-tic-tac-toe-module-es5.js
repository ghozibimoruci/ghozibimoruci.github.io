function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-employee-employee-module~pages-login-login-module~pages-tic-tac-toe-tic-tac-toe-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/multi-layer/multi-layer.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/multi-layer/multi-layer.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMultiLayerMultiLayerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"notification-list-wrapper\"\r\n[ngStyle]=\"{'height': ((allNotifInfo[0]?130:0) + (allNotifInfo.length>3?3:allNotifInfo.length) * 20).toString()+'px' }\">\r\n    <div *ngFor=\"let notif of allNotifInfo\" class=\"notification-wrapper\"\r\n    [ngClass]=\"(topStyle(notif.id)) + (notif.id > allNotifInfo.length-2 ? '':' hide')\"\r\n    [ngStyle]=\"{'background-color': notif.colorCode, 'color': notif.fontColor }\" (click)=\"clickNotif(notif.id)\">\r\n        <div style=\"display: flex; flex-wrap: wrap; justify-content: center; align-items: center; height: 100%; position: relative;\">\r\n            <div class=\"close-button\">\r\n                <button [disabled]=\"notif.id != (allNotifInfo.length - 1)\" (click)=\"closeBanner(notif.id)\">&times;</button>\r\n            </div>\r\n            <div class=\"icon-wrapper\">\r\n                <mat-icon>{{notif.icon}}</mat-icon>\r\n            </div>\r\n            <div class=\"text-wrapper\">\r\n                {{notif.text}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagination/pagination.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagination/pagination.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPaginationPaginationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-wrapper\">\r\n    <div class=\"navigator-page\">\r\n        {{(pageIndex*size)-(size-1)}} - {{(pageIndex*size)<(total)?(pageIndex*size):total}} of {{(total)}}\r\n    </div>\r\n    <button class=\"button-action\" (click)=\"changePage(pageIndex-1)\" [disabled]=\"pageIndex==1||disabled\">\r\n        <mat-icon class=\"middle\">keyboard_arrow_left</mat-icon>\r\n    </button>\r\n    <button class=\"page-option\" (click)=\"changePage(data)\" [disabled]=\"data=='...'||data==pageIndex||disabled\" *ngFor=\"let data of pageListArray\">\r\n        {{data}}\r\n    </button>\r\n    <button class=\"button-action\" (click)=\"changePage(pageIndex+1)\" [disabled]=\"pageIndex>=pageListArray[pageListArray.length-1]||disabled\">\r\n        <mat-icon class=\"middle\">keyboard_arrow_right</mat-icon>\r\n    </button>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/components/multi-layer/multi-layer.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/multi-layer/multi-layer.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMultiLayerMultiLayerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".notification-list-wrapper {\n  position: relative;\n  z-index: 1;\n}\n\n.notification-wrapper {\n  height: 150px;\n  width: 100%;\n  border-radius: 8px;\n  position: absolute;\n  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.6);\n  transition: 0.3s;\n  padding: 20px;\n}\n\n.notification-wrapper.hide {\n  cursor: pointer;\n}\n\n.notification-wrapper.hide span {\n  display: none;\n}\n\n.reset-top {\n  top: 0;\n}\n\n.notif-1.no-shadow {\n  box-shadow: none;\n}\n\n.notif-1 {\n  top: 0;\n  z-index: 1;\n}\n\n.notif-2 {\n  top: 20px;\n  z-index: 2;\n}\n\n.notif-3 {\n  top: 40px;\n  z-index: 3;\n}\n\n.notification-wrapper.green {\n  background-color: yellow;\n}\n\n.notification-wrapper.yellow {\n  background-color: greenyellow;\n}\n\n.notification-wrapper.pink {\n  background-color: #E861A3;\n}\n\n.icon-wrapper {\n  width: 50px;\n}\n\n.icon-wrapper mat-icon {\n  font-size: 30px;\n  height: 30px;\n  width: 30px;\n}\n\n.text-wrapper {\n  width: calc(100% - 50px);\n  word-break: break-word;\n  font-size: 20px;\n  display: -webkit-box !important;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  white-space: normal;\n}\n\n.close-button {\n  position: absolute;\n  font-size: 30px;\n  right: -10px;\n  top: -20px;\n}\n\n.close-button button {\n  background: none;\n  outline: none;\n  border: none;\n  color: white;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tdWx0aS1sYXllci9DOlxcVXNlcnNcXGdvamliZXJpaFxcQW5ndWxhciBQcm9qZWN0XFxlbXBsb3llZS1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxtdWx0aS1sYXllclxcbXVsdGktbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbXVsdGktbGF5ZXIvbXVsdGktbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0FDR0Y7O0FERkU7RUFDRSxhQUFBO0FDSUo7O0FEREE7RUFDRSxNQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtBQ0tGOztBREhBO0VBQ0UsTUFBQTtFQUNBLFVBQUE7QUNNRjs7QURKQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDT0Y7O0FETEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ1FGOztBRE5BO0VBQ0Usd0JBQUE7QUNTRjs7QURQQTtFQUNFLDZCQUFBO0FDVUY7O0FEUkE7RUFDRSx5QkFBQTtBQ1dGOztBRFRBO0VBQ0UsV0FBQTtBQ1lGOztBRFhFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDYUo7O0FEVkE7RUFDRSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQ2FGOztBRFhBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNjRjs7QURiRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDZUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL211bHRpLWxheWVyL211bHRpLWxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmaWNhdGlvbi1saXN0LXdyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLm5vdGlmaWNhdGlvbi13cmFwcGVye1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3gtc2hhZG93OiAwcHggLTNweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLm5vdGlmaWNhdGlvbi13cmFwcGVyLmhpZGV7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHNwYW57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4ucmVzZXQtdG9we1xyXG4gIHRvcDogMDtcclxufVxyXG4ubm90aWYtMS5uby1zaGFkb3d7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4ubm90aWYtMXtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4ubm90aWYtMntcclxuICB0b3A6IDIwcHg7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4ubm90aWYtM3tcclxuICB0b3A6IDQwcHg7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4ubm90aWZpY2F0aW9uLXdyYXBwZXIuZ3JlZW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcbi5ub3RpZmljYXRpb24td3JhcHBlci55ZWxsb3d7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XHJcbn1cclxuLm5vdGlmaWNhdGlvbi13cmFwcGVyLnBpbmt7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4NjFBMztcclxufVxyXG4uaWNvbi13cmFwcGVye1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIG1hdC1pY29ue1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgfVxyXG59XHJcbi50ZXh0LXdyYXBwZXJ7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcbi5jbG9zZS1idXR0b257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICByaWdodDogLTEwcHg7XHJcbiAgdG9wOiAtMjBweDtcclxuICBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIi5ub3RpZmljYXRpb24tbGlzdC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubm90aWZpY2F0aW9uLXdyYXBwZXIge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaGFkb3c6IDBweCAtM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uLXdyYXBwZXIuaGlkZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ub3RpZmljYXRpb24td3JhcHBlci5oaWRlIHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmVzZXQtdG9wIHtcbiAgdG9wOiAwO1xufVxuXG4ubm90aWYtMS5uby1zaGFkb3cge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubm90aWYtMSB7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLm5vdGlmLTIge1xuICB0b3A6IDIwcHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5ub3RpZi0zIHtcbiAgdG9wOiA0MHB4O1xuICB6LWluZGV4OiAzO1xufVxuXG4ubm90aWZpY2F0aW9uLXdyYXBwZXIuZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi5ub3RpZmljYXRpb24td3JhcHBlci55ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbn1cblxuLm5vdGlmaWNhdGlvbi13cmFwcGVyLnBpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTg2MUEzO1xufVxuXG4uaWNvbi13cmFwcGVyIHtcbiAgd2lkdGg6IDUwcHg7XG59XG4uaWNvbi13cmFwcGVyIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4udGV4dC13cmFwcGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcmlnaHQ6IC0xMHB4O1xuICB0b3A6IC0yMHB4O1xufVxuLmNsb3NlLWJ1dHRvbiBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/multi-layer/multi-layer.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/multi-layer/multi-layer.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MultiLayerComponent */

  /***/
  function srcAppComponentsMultiLayerMultiLayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiLayerComponent", function () {
      return MultiLayerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MultiLayerComponent = /*#__PURE__*/function () {
      function MultiLayerComponent() {
        _classCallCheck(this, MultiLayerComponent);

        this.allNotifInfo = [{
          id: 0,
          text: 'There is nothing left for me top say. It`s just simple tic tac toe game with custom length. You can put a number as the game length maximum as big as your screen can handle, and minimum 3. I know my code is full of bugs, but please just put some number and enjoy the game! Reset button will appear on the game, in case you need it.',
          colorCode: '#B46464',
          fontColor: '#E0E0E0',
          icon: 'sentiment_satisfied_alt'
        }, {
          id: 1,
          text: 'This is merely an example of how I display multiple notification banner. I`m not a UI/ UX Designer so I`m not sure if this design is good enough as a banner, but at least this is my origin idea. If someone, somewhere already used this design, it is just merely coincidence.',
          colorCode: '#8B8D00',
          fontColor: '#E0E0E0',
          icon: 'play_circle_filled'
        }, {
          id: 2,
          text: 'There is nothing left for me top say. It`s just simple tic tac toe game with custom length. You can put a number as the game length maximum as big as your screen can handle, and minimum 3. I know my code is full of bugs, but please just put some number and enjoy the game! Reset button will appear on the game, in case you need it.',
          colorCode: '#008D02',
          fontColor: '#E0E0E0',
          icon: 'sentiment_satisfied_alt'
        }, {
          id: 3,
          text: 'This is merely an example of how I display multiple notification banner. I`m not a UI/ UX Designer so I`m not sure if this design is good enough as a banner, but at least this is my origin idea. If someone, somewhere already used this design, it is just merely coincidence.',
          colorCode: '#00898D',
          fontColor: '#E0E0E0',
          icon: 'play_circle_filled'
        }, {
          id: 4,
          text: 'There is nothing left for me top say. It`s just simple tic tac toe game with custom length. You can put a number as the game length maximum as big as your screen can handle, and minimum 3. I know my code is full of bugs, but please just put some number and enjoy the game! Reset button will appear on the game, in case you need it.',
          colorCode: '#00048D',
          fontColor: '#E0E0E0',
          icon: 'sentiment_satisfied_alt'
        }, {
          id: 5,
          text: 'This is merely an example of how I display multiple notification banner. I`m not a UI/ UX Designer so I`m not sure if this design is good enough as a banner, but at least this is my origin idea. If someone, somewhere already used this design, it is just merely coincidence.',
          colorCode: '#C6018D',
          fontColor: '#E0E0E0',
          icon: 'play_circle_filled'
        }];
      }

      _createClass(MultiLayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.allNotifInfo.forEach(function (item) {
            var newText = '';

            for (var i = 0; i < 13; i++) {
              newText += "This is Notification number ".concat(item.id + 1, ". ");
            }

            item.text = newText;
          });
        }
      }, {
        key: "clickNotif",
        value: function clickNotif(notifIndex) {
          var _this = this;

          if (notifIndex != this.allNotifInfo.length - 1) {
            var listWrapper = document.getElementsByClassName('notification-wrapper');
            Array.from(listWrapper).forEach(function (elm) {
              var allClassArray = elm.className.split(' ');
              allClassArray.splice(allClassArray.findIndex(function (str) {
                return str.includes('notif-');
              }), 1, 'reset-top');
              elm.className = allClassArray.join(' ');
            });
            setTimeout(function () {
              var lastNotif = _this.allNotifInfo[_this.allNotifInfo.length - 1];

              while (lastNotif.id != notifIndex) {
                var tempElement = lastNotif;

                _this.allNotifInfo.pop();

                _this.allNotifInfo = [tempElement].concat(_this.allNotifInfo);
                lastNotif = _this.allNotifInfo[_this.allNotifInfo.length - 1];
              }

              _this.allNotifInfo.forEach(function (notif, idx) {
                notif.id = idx;
              });
            }, 300);
          }
        }
      }, {
        key: "closeBanner",
        value: function closeBanner(notifIndex) {
          this.allNotifInfo.splice(notifIndex, 1);
        }
      }, {
        key: "topStyle",
        value: function topStyle(notifIndex) {
          var arrayLength = this.allNotifInfo.length;

          if (arrayLength > 3) {
            if (arrayLength - notifIndex > 2) {
              return 'notif-1' + (arrayLength - notifIndex > 3 ? ' no-shadow' : '');
            } else {
              return 'notif-' + (notifIndex + 4 - arrayLength);
            }
          } else {
            return 'notif-' + (notifIndex + 1);
          }
        }
      }]);

      return MultiLayerComponent;
    }();

    MultiLayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'multi-layer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./multi-layer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/multi-layer/multi-layer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./multi-layer.component.scss */
      "./src/app/components/multi-layer/multi-layer.component.scss"))["default"]]
    })], MultiLayerComponent);
    /***/
  },

  /***/
  "./src/app/components/pagination/pagination.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/pagination/pagination.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPaginationPaginationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\n  display: flex;\n  align-items: center;\n  font-family: sans-serif;\n  justify-content: flex-end;\n}\n\nmat-icon.middle {\n  vertical-align: middle;\n}\n\n.navigator-page {\n  margin-right: 20px;\n  color: #9E9E9E;\n}\n\nbutton.page-option {\n  outline: none;\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0 5px;\n  color: #B00025;\n}\n\nbutton.page-option:disabled {\n  color: #9E9E9E;\n}\n\nbutton.button-action {\n  color: #B00025;\n  outline: none;\n  background: none;\n  border: none;\n  padding: 0;\n}\n\nbutton.button-action:disabled {\n  color: #9E9E9E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdpbmF0aW9uL0M6XFxVc2Vyc1xcZ29qaWJlcmloXFxBbmd1bGFyIFByb2plY3RcXGVtcGxveWVlLXByb2plY3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2luYXRpb25cXHBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksc0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtBQ0tKOztBREhBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDTUo7O0FESkE7RUFDSSxjQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5tYXQtaWNvbi5taWRkbGV7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5uYXZpZ2F0b3ItcGFnZXtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjOUU5RTlFO1xyXG59XHJcbmJ1dHRvbi5wYWdlLW9wdGlvbntcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBjb2xvcjogI0IwMDAyNTtcclxufVxyXG5idXR0b24ucGFnZS1vcHRpb246ZGlzYWJsZWR7XHJcbiAgICBjb2xvcjogIzlFOUU5RTtcclxufVxyXG5idXR0b24uYnV0dG9uLWFjdGlvbntcclxuICAgIGNvbG9yOiAjQjAwMDI1O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbmJ1dHRvbi5idXR0b24tYWN0aW9uOmRpc2FibGVke1xyXG4gICAgY29sb3I6ICM5RTlFOUU7XHJcbn0iLCIucGFnZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbm1hdC1pY29uLm1pZGRsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5uYXZpZ2F0b3ItcGFnZSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY29sb3I6ICM5RTlFOUU7XG59XG5cbmJ1dHRvbi5wYWdlLW9wdGlvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDVweDtcbiAgY29sb3I6ICNCMDAwMjU7XG59XG5cbmJ1dHRvbi5wYWdlLW9wdGlvbjpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjOUU5RTlFO1xufVxuXG5idXR0b24uYnV0dG9uLWFjdGlvbiB7XG4gIGNvbG9yOiAjQjAwMDI1O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJ1dHRvbi5idXR0b24tYWN0aW9uOmRpc2FibGVkIHtcbiAgY29sb3I6ICM5RTlFOUU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/pagination/pagination.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/pagination/pagination.component.ts ***!
    \***************************************************************/

  /*! exports provided: Pagination */

  /***/
  function srcAppComponentsPaginationPaginationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pagination", function () {
      return Pagination;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Pagination = /*#__PURE__*/function () {
      function Pagination() {
        _classCallCheck(this, Pagination);

        this.size = 0;
        this.total = 0;
        this.pageIndex = 0;
        this.disabled = false;
        this.pageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageListArray = [];
      }

      _createClass(Pagination, [{
        key: "settingList",
        value: function settingList() {
          var theTotal = this.total || 0;
          var theSize = this.size || 1;
          var fixedNum = Math.floor(theTotal / theSize);
          var lastPage = theTotal % theSize ? fixedNum + 1 : fixedNum;
          this.pageListArray = [lastPage];
          this.changePageAction(this.pageIndex || 1);
        }
      }, {
        key: "changePageAction",
        value: function changePageAction(newPage) {
          var _this2 = this;

          this.pageIndex = newPage;
          var lastPage = this.pageListArray.pop();

          var pushFirstNPage = function pushFirstNPage(N) {
            var max = 1;
            _this2.pageListArray = [];

            while (max <= N) {
              _this2.pageListArray.push(max);

              max++;
            }
          };

          var addingDots = function addingDots() {
            _this2.pageListArray.push('...');
          };

          var pushLastNPage = function pushLastNPage(N) {
            var max = N;

            while (max) {
              _this2.pageListArray.push(lastPage - (max - 1));

              max--;
            }
          };

          if (lastPage > 8) {
            if (this.pageIndex < 5) {
              pushFirstNPage(5);
              addingDots();
              pushLastNPage(3);
            } else if (this.pageIndex > lastPage - 4) {
              pushFirstNPage(3);
              addingDots();
              pushLastNPage(5);
            } else {
              this.pageListArray = this.pageIndex - 2 <= 5 ? [1, '...'] : [1, 2, 3, '...'];
              var max = 5;

              while (max) {
                this.pageListArray.push(this.pageIndex + 3 - max);
                max--;
              }

              this.pageListArray.push('...');
              pushLastNPage(this.pageIndex + 7 >= lastPage ? 1 : 3);
            }
          } else {
            pushFirstNPage(lastPage);
          }
        }
      }, {
        key: "changePage",
        value: function changePage(newPage) {
          this.changePageAction(newPage);
          this.pageEvent.emit({
            pageIndex: this.pageIndex - 1
          });
        }
      }, {
        key: "changeIndex",
        set: function set(val) {
          this.pageIndex = (val || 0) + 1;
        }
      }, {
        key: "setSizeTotal",
        set: function set(val) {
          this.size = val.size;
          this.total = val.total;
          this.settingList();
        }
      }]);

      return Pagination;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('pageIndex'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])], Pagination.prototype, "changeIndex", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('sizeNtotal'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])], Pagination.prototype, "setSizeTotal", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disabled'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], Pagination.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('pageEvent'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], Pagination.prototype, "pageEvent", void 0);
    Pagination = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'pagination',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pagination.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagination/pagination.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pagination.component.scss */
      "./src/app/components/pagination/pagination.component.scss"))["default"]]
    })], Pagination);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/pagination/pagination.component */
    "./src/app/components/pagination/pagination.component.ts");
    /* harmony import */


    var _components_multi_layer_multi_layer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/multi-layer/multi-layer.component */
    "./src/app/components/multi-layer/multi-layer.component.ts");

    var SharedModule_1;

    var SharedModule = SharedModule_1 = /*#__PURE__*/function () {
      function SharedModule() {
        _classCallCheck(this, SharedModule);
      }

      _createClass(SharedModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: SharedModule_1,
            providers: []
          };
        }
      }]);

      return SharedModule;
    }();

    SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]],
      declarations: [_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["Pagination"], _components_multi_layer_multi_layer_component__WEBPACK_IMPORTED_MODULE_9__["MultiLayerComponent"]],
      providers: [_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["Pagination"], _components_multi_layer_multi_layer_component__WEBPACK_IMPORTED_MODULE_9__["MultiLayerComponent"]],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["Pagination"], _components_multi_layer_multi_layer_component__WEBPACK_IMPORTED_MODULE_9__["MultiLayerComponent"]]
    })], SharedModule);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-employee-employee-module~pages-login-login-module~pages-tic-tac-toe-tic-tac-toe-module-es5.js.map