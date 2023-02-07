function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-employee-salt-employee-module~pages-login-login-module~pages-tic-tac-toe-tic-tac-toe-module"], {
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


    __webpack_exports__["default"] = ".page-wrapper {\n  display: flex;\n  align-items: center;\n  font-family: sans-serif;\n  justify-content: flex-end;\n}\n\nmat-icon.middle {\n  vertical-align: middle;\n}\n\n.navigator-page {\n  margin-right: 20px;\n  color: #9E9E9E;\n}\n\nbutton.page-option {\n  outline: none;\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0 5px;\n  color: #B00025;\n}\n\nbutton.page-option:disabled {\n  color: #9E9E9E;\n}\n\nbutton.button-action {\n  color: #B00025;\n  outline: none;\n  background: none;\n  border: none;\n  padding: 0;\n}\n\nbutton.button-action:disabled {\n  color: #9E9E9E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdpbmF0aW9uL0M6XFxVc2Vyc1xcZ29qaWJlcmloXFxQcml2YXRlIFByb2plY3RcXEFuZ3VsYXJKUyUyMFByb2plY3RcXGVtcGxveWVlLXByb2plY3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2luYXRpb25cXHBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksc0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtBQ0tKOztBREhBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDTUo7O0FESkE7RUFDSSxjQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5tYXQtaWNvbi5taWRkbGV7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5uYXZpZ2F0b3ItcGFnZXtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjOUU5RTlFO1xyXG59XHJcbmJ1dHRvbi5wYWdlLW9wdGlvbntcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBjb2xvcjogI0IwMDAyNTtcclxufVxyXG5idXR0b24ucGFnZS1vcHRpb246ZGlzYWJsZWR7XHJcbiAgICBjb2xvcjogIzlFOUU5RTtcclxufVxyXG5idXR0b24uYnV0dG9uLWFjdGlvbntcclxuICAgIGNvbG9yOiAjQjAwMDI1O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbmJ1dHRvbi5idXR0b24tYWN0aW9uOmRpc2FibGVke1xyXG4gICAgY29sb3I6ICM5RTlFOUU7XHJcbn0iLCIucGFnZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbm1hdC1pY29uLm1pZGRsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5uYXZpZ2F0b3ItcGFnZSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY29sb3I6ICM5RTlFOUU7XG59XG5cbmJ1dHRvbi5wYWdlLW9wdGlvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDVweDtcbiAgY29sb3I6ICNCMDAwMjU7XG59XG5cbmJ1dHRvbi5wYWdlLW9wdGlvbjpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjOUU5RTlFO1xufVxuXG5idXR0b24uYnV0dG9uLWFjdGlvbiB7XG4gIGNvbG9yOiAjQjAwMDI1O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJ1dHRvbi5idXR0b24tYWN0aW9uOmRpc2FibGVkIHtcbiAgY29sb3I6ICM5RTlFOUU7XG59Il19 */";
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
          var _this = this;

          this.pageIndex = newPage;
          var lastPage = this.pageListArray.pop();

          var pushFirstNPage = function pushFirstNPage(N) {
            var max = 1;
            _this.pageListArray = [];

            while (max <= N) {
              _this.pageListArray.push(max);

              max++;
            }
          };

          var addingDots = function addingDots() {
            _this.pageListArray.push('...');
          };

          var pushLastNPage = function pushLastNPage(N) {
            var max = N;

            while (max) {
              _this.pageListArray.push(lastPage - (max - 1));

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
      declarations: [_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["Pagination"]],
      providers: [_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["Pagination"]],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["Pagination"]]
    })], SharedModule);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-employee-salt-employee-module~pages-login-login-module~pages-tic-tac-toe-tic-tac-toe-module-es5.js.map