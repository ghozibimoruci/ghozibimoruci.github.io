(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tic-tac-toe-tic-tac-toe-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tic-tac-toe/tic-tac-toe.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tic-tac-toe/tic-tac-toe.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"employee-page\">\r\n    <div class=\"employee-title\">\r\n        Tic Tac Toe Game\r\n    </div>\r\n    <form *ngIf=\"gameLength<1\">\r\n        <div class=\"tic-tac-field\">\r\n            <span class=\"tic-tac-label\">\r\n                Input the Length\r\n            </span>\r\n            <input class=\"tic-tac-input\" [(ngModel)]=\"fieldValue\" name=\"fieldValue\" type=\"text\" oninput=\"javascript: this.value = (parseInt(this.value.replace(/,/g, '')).toString()).replace(/[^0-9]/g, '').replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');\">\r\n        </div>\r\n        <button hidden (click)=\"setGameLength()\"></button>\r\n    </form>\r\n    <div *ngIf=\"gameLength>0\" class=\"game-wrapper\">\r\n        <span class=\"tic-tac-label center\">\r\n            Select Wisely\r\n        </span>\r\n        <div *ngFor=\"let array of gameArray; let i = index;\" class=\"tic-tac-row\">\r\n            <div *ngFor=\"let data of array; let j = index;\" class=\"tic-tac-column\" [ngClass]=\"'row-'+i+' '+'column-'+j\">\r\n                <button class=\"game-button\" *ngIf=\"data!='X'&&data!='O'\" (click)=\"clickYourTurn(j, i)\">{{data}}</button>\r\n                <div class=\"game-text\" *ngIf=\"data=='X'||data=='O'\">{{data}}</div>\r\n            </div>\r\n        </div>\r\n        <button class=\"reset-game\" (click)=\"resetGame()\">\r\n            Reset Game\r\n        </button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/tic-tac-toe/tic-tac-toe.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/tic-tac-toe/tic-tac-toe.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".employee-page {\n  display: block;\n  padding: 30px 20px;\n}\n\n.employee-title {\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.tic-tac-field {\n  text-align: center;\n  padding: 6% auto;\n}\n\n.tic-tac-label {\n  display: block;\n  font-weight: 600;\n  color: #6601D1;\n}\n\n.tic-tac-label.center {\n  text-align: center;\n}\n\n.tic-tac-input {\n  padding: 8px;\n  border-radius: 8px;\n  border: solid 2px #6601D1;\n  outline: #6601D1;\n}\n\n.game-wrapper {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  margin: auto;\n}\n\n.tic-tac-row {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.tic-tac-column {\n  width: 30px;\n  border-bottom: solid #6601D1;\n  border-right: solid #6601D1;\n  height: 30px;\n  line-height: 10px;\n  font-size: 30px;\n}\n\n.tic-tac-column.row-0 {\n  border-top: solid #6601D1;\n}\n\n.tic-tac-column.column-0 {\n  border-left: solid #6601D1;\n}\n\n.game-button {\n  outline: none;\n  border: none;\n  background: none;\n  padding: 0;\n  width: 30px;\n  height: 30px;\n}\n\n.game-text {\n  font-size: 30px;\n  line-height: 26px;\n}\n\n.reset-game {\n  margin-top: 20px;\n  background-color: #6601D1;\n  border: solid 2px #6601D1;\n  border-radius: 8px;\n  color: #E0E0E0;\n  font-weight: 600;\n  height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGljLXRhYy10b2UvQzpcXFVzZXJzXFxnb2ppYmVyaWhcXFByaXZhdGUgUHJvamVjdFxcQW5ndWxhckpTJTIwUHJvamVjdFxcZW1wbG95ZWUtcHJvamVjdC9zcmNcXGFwcFxccGFnZXNcXHRpYy10YWMtdG9lXFx0aWMtdGFjLXRvZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGljLXRhYy10b2UvdGljLXRhYy10b2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNPSjs7QURMQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDUUo7O0FETkE7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNTSjs7QURQQTtFQUNJLHlCQUFBO0FDVUo7O0FEUkE7RUFDSSwwQkFBQTtBQ1dKOztBRFRBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1lKOztBRFZBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDYUo7O0FEWEE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNjSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RpYy10YWMtdG9lL3RpYy10YWMtdG9lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcGxveWVlLXBhZ2V7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxufVxyXG4uZW1wbG95ZWUtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4udGljLXRhYy1maWVsZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDYlIGF1dG87XHJcbn1cclxuLnRpYy10YWMtbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzY2MDFEMTtcclxufVxyXG4udGljLXRhYy1sYWJlbC5jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRpYy10YWMtaW5wdXR7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjNjYwMUQxO1xyXG4gICAgb3V0bGluZTogIzY2MDFEMTtcclxufVxyXG4uZ2FtZS13cmFwcGVye1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi50aWMtdGFjLXJvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLnRpYy10YWMtY29sdW1ue1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAjNjYwMUQxO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjNjYwMUQxO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnRpYy10YWMtY29sdW1uLnJvdy0we1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgIzY2MDFEMTtcclxufVxyXG4udGljLXRhYy1jb2x1bW4uY29sdW1uLTB7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgIzY2MDFEMTtcclxufVxyXG4uZ2FtZS1idXR0b257XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4uZ2FtZS10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuLnJlc2V0LWdhbWV7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2MDFEMTtcclxuICAgIGJvcmRlcjogc29saWQgMnB4ICM2NjAxRDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjb2xvcjogI0UwRTBFMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn0iLCIuZW1wbG95ZWUtcGFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG59XG5cbi5lbXBsb3llZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGljLXRhYy1maWVsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNiUgYXV0bztcbn1cblxuLnRpYy10YWMtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM2NjAxRDE7XG59XG5cbi50aWMtdGFjLWxhYmVsLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpYy10YWMtaW5wdXQge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzY2MDFEMTtcbiAgb3V0bGluZTogIzY2MDFEMTtcbn1cblxuLmdhbWUtd3JhcHBlciB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50aWMtdGFjLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnRpYy10YWMtY29sdW1uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkICM2NjAxRDE7XG4gIGJvcmRlci1yaWdodDogc29saWQgIzY2MDFEMTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4udGljLXRhYy1jb2x1bW4ucm93LTAge1xuICBib3JkZXItdG9wOiBzb2xpZCAjNjYwMUQxO1xufVxuXG4udGljLXRhYy1jb2x1bW4uY29sdW1uLTAge1xuICBib3JkZXItbGVmdDogc29saWQgIzY2MDFEMTtcbn1cblxuLmdhbWUtYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZ2FtZS10ZXh0IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuLnJlc2V0LWdhbWUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjYwMUQxO1xuICBib3JkZXI6IHNvbGlkIDJweCAjNjYwMUQxO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiAjRTBFMEUwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBoZWlnaHQ6IDM1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/tic-tac-toe/tic-tac-toe.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/tic-tac-toe/tic-tac-toe.component.ts ***!
  \************************************************************/
/*! exports provided: TicTacToeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicTacToeComponent", function() { return TicTacToeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TicTacToeComponent = class TicTacToeComponent {
    constructor() {
        this.fieldValue = null;
        this.gameLength = 0;
        this.firstPlayer = true;
        this.gameArray = [];
    }
    ngOnInit() {
    }
    setGameLength() {
        if (this.fieldValue > 2) {
            this.gameLength = this.fieldValue;
            for (let i = 0; i < this.gameLength; i++) {
                let pushArray = Array.from({ length: this.gameLength }, () => '');
                this.gameArray.push(pushArray);
            }
        }
        else {
            alert('Game Length is too short');
            this.resetGame();
        }
    }
    clickYourTurn(column, row) {
        this.gameArray[row][column] = (this.firstPlayer ? 'X' : 'O');
        let checkIfTrue = (theText) => {
            return theText == (this.firstPlayer ? 'X' : 'O');
        };
        let countDiagRight = 0, countDiagLeft = 0, countHori = 0, countVerti = 0, horiFull = 0, vertiFull = 0;
        for (let i = 0; i < this.gameLength; i++) {
            for (let j = 0; j < this.gameLength; j++) {
                if (checkIfTrue(this.gameArray[i][j])) {
                    countHori++;
                }
                if (checkIfTrue(this.gameArray[j][i])) {
                    countVerti++;
                }
            }
            if (countHori != this.gameLength && countVerti != this.gameLength) {
                if (checkIfTrue(this.gameArray[i][i])) {
                    countDiagLeft++;
                }
                if (checkIfTrue(this.gameArray[this.gameLength - 1 - i][i])) {
                    countDiagRight++;
                }
            }
            else {
                if (countHori == this.gameLength) {
                    horiFull++;
                }
                if (countVerti == this.gameLength) {
                    vertiFull++;
                }
            }
            countVerti = 0;
            countHori = 0;
        }
        if (horiFull > 0 || vertiFull > 0 ||
            countDiagLeft == this.gameLength ||
            countDiagRight == this.gameLength) {
            setTimeout(() => {
                alert(`${this.firstPlayer ? 'First' : 'Second'} Player Win the Game!`);
                this.resetGame();
            });
        }
        else {
            let stringCount = '';
            this.gameArray.forEach(array => {
                stringCount += array.join('');
            });
            if (stringCount.length == (this.gameLength * this.gameLength)) {
                setTimeout(() => {
                    alert('The Game is Draw');
                    this.resetGame();
                });
            }
            else {
                this.firstPlayer = !this.firstPlayer;
            }
        }
    }
    resetGame() {
        this.gameLength = 0;
        this.fieldValue = null;
        this.gameArray = [];
    }
};
TicTacToeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tic-tac-toe',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tic-tac-toe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tic-tac-toe/tic-tac-toe.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tic-tac-toe.component.scss */ "./src/app/pages/tic-tac-toe/tic-tac-toe.component.scss")).default]
    })
], TicTacToeComponent);



/***/ }),

/***/ "./src/app/pages/tic-tac-toe/tic-tac-toe.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/tic-tac-toe/tic-tac-toe.module.ts ***!
  \*********************************************************/
/*! exports provided: TicTacToeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicTacToeModule", function() { return TicTacToeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tic-tac-toe.component */ "./src/app/pages/tic-tac-toe/tic-tac-toe.component.ts");
/* harmony import */ var _tic_tac_toe_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tic-tac-toe.routing */ "./src/app/pages/tic-tac-toe/tic-tac-toe.routing.ts");






let TicTacToeModule = class TicTacToeModule {
};
TicTacToeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _tic_tac_toe_routing__WEBPACK_IMPORTED_MODULE_5__["TicTacToeRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild()],
        exports: [],
        declarations: [_tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_4__["TicTacToeComponent"]],
        providers: [_tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_4__["TicTacToeComponent"]],
    })
], TicTacToeModule);



/***/ }),

/***/ "./src/app/pages/tic-tac-toe/tic-tac-toe.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/tic-tac-toe/tic-tac-toe.routing.ts ***!
  \**********************************************************/
/*! exports provided: TicTacToeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicTacToeRoutingModule", function() { return TicTacToeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tic-tac-toe.component */ "./src/app/pages/tic-tac-toe/tic-tac-toe.component.ts");




const routes = [
    {
        path: '',
        component: _tic_tac_toe_component__WEBPACK_IMPORTED_MODULE_3__["TicTacToeComponent"]
    }
];
let TicTacToeRoutingModule = class TicTacToeRoutingModule {
};
TicTacToeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: [],
    })
], TicTacToeRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-tic-tac-toe-tic-tac-toe-module-es2015.js.map