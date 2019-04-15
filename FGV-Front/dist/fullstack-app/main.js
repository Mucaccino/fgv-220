(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Bem vindo ao {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"book-table mat-elevation-z8\" matSort style=\"display:none;\">\n\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Título </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"author\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Autor </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.author}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"edition\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Edição </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.edition}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n<table class=\"book-table mat-elevation-z8 mat-table\">\n  <thead>\n      <tr class=\"mat-row ng-star-inserted\">\n          <th class=\"mat-header-cell\"><div class=\"mat-sort-header-container\">Id \n            <button class=\"mat-sort-header-button\" (click)=\"orderer('id', $event)\">\n              <span *ngIf=\"sortInfo('id DESC')\" class=\"order-icon no\"><i class=\"material-icons\">arrow_downward</i></span>\n              <span *ngIf=\"sortInfo('id ASC')\" class=\"order-icon desc hide\"><i class=\"material-icons\">arrow_upward</i></span>\n              <span *ngIf=\"!sortInfo('id')\" class=\"order-icon asc hide\"><i class=\"material-icons\">unfold_more</i></span>\n            </button></div>\n          </th>\n          <th class=\"mat-header-cell\"><div class=\"mat-sort-header-container\">Título \n            <button class=\"mat-sort-header-button\" (click)=\"orderer('title', $event)\">\n                <span *ngIf=\"sortInfo('title DESC')\" class=\"order-icon no\"><i class=\"material-icons\">arrow_downward</i></span>\n                <span *ngIf=\"sortInfo('title ASC')\" class=\"order-icon desc hide\"><i class=\"material-icons\">arrow_upward</i></span>\n                <span *ngIf=\"!sortInfo('title')\" class=\"order-icon asc hide\"><i class=\"material-icons\">unfold_more</i></span>\n            </button></div>\n          </th>\n          <th class=\"mat-header-cell\"><div class=\"mat-sort-header-container\">Autor             \n            <button class=\"mat-sort-header-button\" (click)=\"orderer('author', $event)\">\n                <span *ngIf=\"sortInfo('author DESC')\" class=\"order-icon no\"><i class=\"material-icons\">arrow_downward</i></span>\n                <span *ngIf=\"sortInfo('author ASC')\" class=\"order-icon desc hide\"><i class=\"material-icons\">arrow_upward</i></span>\n                <span *ngIf=\"!sortInfo('author')\" class=\"order-icon asc hide\"><i class=\"material-icons\">unfold_more</i></span>\n            </button></div>\n          </th>\n          <th class=\"mat-header-cell\"><div class=\"mat-sort-header-container\">Edição            \n            <button class=\"mat-sort-header-button\" (click)=\"orderer('edition', $event)\">\n                <span *ngIf=\"sortInfo('edition DESC')\" class=\"order-icon no\"><i class=\"material-icons\">arrow_downward</i></span>\n                <span *ngIf=\"sortInfo('edition ASC')\" class=\"order-icon desc hide\"><i class=\"material-icons\">arrow_upward</i></span>\n                <span *ngIf=\"!sortInfo('edition')\" class=\"order-icon asc hide\"><i class=\"material-icons\">unfold_more</i></span>\n            </button></div>\n          </th>\n          <th width=\"1%\" class=\"mat-header-cell\"></th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr class=\"math-row ng-star-inserted\" *ngFor=\"let book of books\">\n          <td class=\"mat-cell\">{{book.id}}</td>\n          <td class=\"mat-cell\">{{book.title}}</td>\n          <td class=\"mat-cell\">{{book.author}}</td>\n          <td class=\"mat-cell\">{{book.edition}}</td>\n          <td class=\"mat-cell\"><button  class=\"mat-sort-header-button\" (click)=\"removeBook(book.id)\"><i class=\"material-icons\">close</i></button></td>\n      </tr>\n      <tr class=\"math-row ng-star-inserted\" >\n        <td class=\"mat-cell\"><input placeholder=\"Id\" [(ngModel)]=\"newBook.id\" #ctrl=\"ngModel\" required type=\"text\" /></td>\n        <td class=\"mat-cell\"><input placeholder=\"Título\" [(ngModel)]=\"newBook.title\" #ctrl=\"ngModel\" required type=\"text\" /></td>\n        <td class=\"mat-cell\"><input placeholder=\"Autor\" [(ngModel)]=\"newBook.author\" #ctrl=\"ngModel\" required type=\"text\" /></td>\n        <td class=\"mat-cell\"><input placeholder=\"Edição\" [(ngModel)]=\"newBook.edition\" #ctrl=\"ngModel\" required type=\"text\" /></td>\n        <td class=\"mat-cell\"><button [disabled]=\"ctrl.valid.toString() == 'false'\" class=\"mat-sort-header-button\" (click)=\"addNewBook()\"><i class=\"material-icons\">add_circle</i></button></td>\n      </tr>\n  </tbody>\n</table>\n\n<div>\n<h3>Info:</h3>\n<p>Ordenação: {{sortString()}}</p>\n<p>Novo livro: {{ newBookString()  }}</p>\n<h3>Log:</h3>\n<p>{{ historicoString() }}</p>\n</div>"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n\n.book-table .mat-sort-header-button {\n  float: right;\n  padding: 0 12px;\n  cursor: pointer; }\n\n.book-table td.mat-cell {\n  padding: 12px; }\n\n.book-table .material-icons {\n  font-weight: 900;\n  font-size: 18px; }\n\n.book-table button[disabled] {\n  color: #a09595; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNdXJpbGxvXFxEZXNrdG9wXFxGR1ZcXHByb2pldG8tdnMtMjAxOVxcRkdWLUZyb250L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFFbkI7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjazsgfVxuXG4uYm9vay10YWJsZSAubWF0LXNvcnQtaGVhZGVyLWJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmJvb2stdGFibGUgdGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDEycHg7IH1cblxuLmJvb2stdGFibGUgLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDsgfVxuXG4uYm9vay10YWJsZSBidXR0b25bZGlzYWJsZWRdIHtcbiAgY29sb3I6ICNhMDk1OTU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
var booksData = [
    { id: 1, title: 'L1', author: "A", edition: 'X' },
    { id: 2, title: 'L2', author: "A", edition: 'Y' },
    { id: 3, title: 'L3', author: "B", edition: 'X' },
    { id: 4, title: 'L4', author: "V", edition: 'Y' }
];
/**
 * @title Basic use of `<table mat-table>`
 */
var AppComponent = /** @class */ (function () {
    function AppComponent(httpClient) {
        this.httpClient = httpClient;
        this.displayedColumns = ['id', 'title', 'author', 'edition'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](booksData);
        this.historico = [];
        this.title = 'FGV-220';
        this.books = booksData;
        this.multipleSort = ['id ASC'];
        this.newBook = new Book();
    }
    AppComponent.prototype.sortString = function () {
        return this.multipleSort.join(", ");
    };
    AppComponent.prototype.sortInfo = function (info) {
        return this.multipleSort.some(function (v) { return v.indexOf(info) >= 0; });
    };
    AppComponent.prototype.removeBook = function (id) {
        this.books = this.books.filter(function (e) { return e.id !== id; });
    };
    AppComponent.prototype.newBookString = function () {
        return JSON.stringify(this.newBook);
    };
    AppComponent.prototype.booksString = function () {
        return JSON.stringify(this.books);
    };
    AppComponent.prototype.addNewBook = function () {
        this.books.push(this.newBook);
        this.newBook = new Book();
    };
    AppComponent.prototype.addHistorico = function (msg, obj) {
        this.historico.push({ data: new Date(), msg: msg, obj: obj });
    };
    AppComponent.prototype.historicoString = function () {
        return JSON.stringify(this.historico);
    };
    // recupera livros ordenados baseado e massa de dados enviada
    AppComponent.prototype.getSortBooks = function (books, sort) {
        var _this = this;
        var _me = this;
        this.historico = [];
        this.addHistorico("call /api/ordenacao", { livros: books, ordenacao: sort });
        // realiza chamada post passando livros e ordenação em json no corpo  
        this.httpClient.post("/api/ordenacao", { livros: books, ordenacao: sort }).subscribe(function (res) {
            _this.addHistorico("return /api/ordenacao", res);
            _me.books = res;
            console.log(res);
        });
    };
    AppComponent.prototype.orderer = function (column, event) {
        // recupera elemento de sort
        var el = event.target.parentElement;
        // remove ordenação prévia da coluna
        this.multipleSort = this.multipleSort.filter(function (e) { return e.indexOf(column) === -1; });
        // adiciona ordenação ascendente OU descendente para a coluna
        if (el.classList.contains('asc'))
            this.multipleSort.push(column + " ASC");
        else if (el.classList.contains('desc'))
            this.multipleSort.push(column + " DESC");
        // após ordenação, consuma o serviço de ordenação de livros
        this.getSortBooks(this.booksString(), this.sortString());
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
        // após inicio, consuma o serviço de ordenação de livros
        this.getSortBooks("inicial", "id ASC");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AppComponent.prototype, "sort", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// material.module.ts




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            ],
            exports: [
                _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Murillo\Desktop\FGV\projeto-vs-2019\FGV-Front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map