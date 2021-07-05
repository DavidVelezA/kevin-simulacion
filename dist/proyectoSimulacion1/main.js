(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+SbH":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/alisamiento-exponencial/alisamiento-exponencial.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AlisamientoExponencialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlisamientoExponencialComponent", function() { return AlisamientoExponencialComponent; });
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ "2G9v");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global */ "p9xo");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service */ "NwxT");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AlisamientoExponencialComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AlisamientoExponencialComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.generarGrafico(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Generar gr\u00E1fico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AlisamientoExponencialComponent_div_21_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r11);
} }
function AlisamientoExponencialComponent_div_21_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AlisamientoExponencialComponent_div_21_tbody_9_tr_1_Template, 3, 1, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r8.x);
} }
function AlisamientoExponencialComponent_div_21_tbody_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r13);
} }
function AlisamientoExponencialComponent_div_21_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AlisamientoExponencialComponent_div_21_tbody_16_tr_1_Template, 3, 1, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.sn);
} }
function AlisamientoExponencialComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "thead", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AlisamientoExponencialComponent_div_21_tbody_9_Template, 2, 1, "tbody", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "thead", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "SN");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, AlisamientoExponencialComponent_div_21_tbody_16_Template, 2, 1, "tbody", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.x);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.sn);
} }
function AlisamientoExponencialComponent_img_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 25);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r5.url + "grafico/" + ctx_r5.sn, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { standalone: true }; };
class AlisamientoExponencialComponent {
    constructor(_service) {
        this._service = _service;
        this.lista = [];
        this.grafico = false;
        this.mostrar = false;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_1__["global"].url;
        this.alisamientoExponencialModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["AlisamientoExponencialModel"](null, null);
    }
    ngOnInit() {
    }
    alisamiento(form) {
        if (this.alisamientoExponencialModel.lista && this.alisamientoExponencialModel.alfa) {
            this.alisamientoExponencialModel.lista.split(',').forEach((element, i) => {
                this.lista.push(+element);
            });
            this.alisamientoExponencialModel.lista = this.lista;
            this._service.alisamientoExponencial(this.alisamientoExponencialModel).subscribe(response => {
                this.x = response.X;
                this.sn = response.SN;
                this.grafico = true;
                this.limpiar();
            }, error => {
                console.log(error);
            });
        }
        else {
            this.camposVacios();
        }
    }
    limpiar() {
        this.alisamientoExponencialModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["AlisamientoExponencialModel"](null, null);
    }
    generarGrafico() {
        this.mostrar = true;
        // this._service.grafico(this.sn).subscribe(
        //   response => { 
        //   },
        //   error => {
        //     console.log(error)
        //   }
        // ) 
    }
    success() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Correcto',
            icon: 'success',
            timer: 600,
            showConfirmButton: false
        });
    }
    camposVacios() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Validacion',
            text: 'No deje campos vacios',
            icon: 'warning',
        });
    }
}
AlisamientoExponencialComponent.ɵfac = function AlisamientoExponencialComponent_Factory(t) { return new (t || AlisamientoExponencialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_service__WEBPACK_IMPORTED_MODULE_2__["Service"])); };
AlisamientoExponencialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AlisamientoExponencialComponent, selectors: [["app-alisamiento-exponencial"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_services_service__WEBPACK_IMPORTED_MODULE_2__["Service"]])], decls: 26, vars: 10, consts: [[1, "container"], [1, "text-center"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "col-4", "mt-5", 3, "ngSubmit"], ["alisamientoForm", "ngForm"], [1, "mb-3"], [1, "form-label"], ["type", "number", "placeholder", " 4", "name", "alfa", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["alfa", "ngModel"], ["type", "text", "placeholder", "999, 877, 54, 111, 545, 22, 22, 45, 44, 4", "name", "lista", "required", "", 1, "form-control", 2, "height", "160px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["lista", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "col-12", 3, "disabled"], ["type", "button", "class", "btn btn-info col-12 mt-2", 3, "click", 4, "ngIf"], ["class", "m-auto text-center ", 4, "ngIf"], ["width", "600px", 3, "src", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "col-12", "mt-2", 3, "click"], [1, "m-auto", "text-center"], [1, "container", "mt-5", 2, "overflow-y", "auto", "overflow-x", "hidden", "max-height", "400px"], [1, "row"], [1, "col"], [1, "table"], [1, "bg-info"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["width", "600px", 3, "src"]], template: function AlisamientoExponencialComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "M\u00E9todo alisamiento exponencial");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AlisamientoExponencialComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6); return ctx.alisamiento(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Ingrese valor de modulo (m):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AlisamientoExponencialComponent_Template_input_ngModelChange_10_listener($event) { return ctx.alisamientoExponencialModel.alfa = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Agregue la muestra separada con una coma");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "textarea", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AlisamientoExponencialComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.alisamientoExponencialModel.lista = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Calcular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AlisamientoExponencialComponent_button_20_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, AlisamientoExponencialComponent_div_21_Template, 17, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, AlisamientoExponencialComponent_img_25_Template, 1, 1, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.alisamientoExponencialModel.alfa)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.alisamientoExponencialModel.lista)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mostrar);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGlzYW1pZW50by1leHBvbmVuY2lhbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\David Velez\Documents\frontendSimulacion7\src\main.ts */"zUnb");


/***/ }),

/***/ "2G9v":
/*!***************************!*\
  !*** ./src/app/models.ts ***!
  \***************************/
/*! exports provided: CuadradoMedioModel, CongruencialAditivoModel, CongruencialMultiplicativoModel, AlisamientoExponencialModel, RegresionLinealModel, RegresionNoLinealModel, MontecarloModel, InversoAditivoModel, InversoMultiplicativoModel, LineaEsperaModel, InventarioModel, LineaEsperaNuevoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuadradoMedioModel", function() { return CuadradoMedioModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongruencialAditivoModel", function() { return CongruencialAditivoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongruencialMultiplicativoModel", function() { return CongruencialMultiplicativoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlisamientoExponencialModel", function() { return AlisamientoExponencialModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegresionLinealModel", function() { return RegresionLinealModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegresionNoLinealModel", function() { return RegresionNoLinealModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MontecarloModel", function() { return MontecarloModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InversoAditivoModel", function() { return InversoAditivoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InversoMultiplicativoModel", function() { return InversoMultiplicativoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineaEsperaModel", function() { return LineaEsperaModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioModel", function() { return InventarioModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineaEsperaNuevoModel", function() { return LineaEsperaNuevoModel; });
class CuadradoMedioModel {
    constructor(n, //semilla
    r) {
        this.n = n;
        this.r = r;
    }
}
class CongruencialAditivoModel {
    constructor(m, //modulo
    x0, //semilla
    a, //multiplicador
    c, //incremento
    n) {
        this.m = m;
        this.x0 = x0;
        this.a = a;
        this.c = c;
        this.n = n;
    }
}
class CongruencialMultiplicativoModel {
    constructor(m, //modulo
    x0, //semilla
    a, //multiplicador
    n) {
        this.m = m;
        this.x0 = x0;
        this.a = a;
        this.n = n;
    }
}
// promedioMovil sin modelo
class AlisamientoExponencialModel {
    constructor(lista, //muestra
    alfa //modulo
    ) {
        this.lista = lista;
        this.alfa = alfa;
    }
}
class RegresionLinealModel {
    constructor(x, //valores en x
    y //valores en y
    ) {
        this.x = x;
        this.y = y;
    }
}
class RegresionNoLinealModel {
    constructor(x, //valores en x
    y //valores en y
    ) {
        this.x = x;
        this.y = y;
    }
}
class MontecarloModel {
    constructor(m, //modulo
    x0, //semilla
    a, //multiplicador
    c, //incremento
    n, //interacciones
    lista // muestra 
    ) {
        this.m = m;
        this.x0 = x0;
        this.a = a;
        this.c = c;
        this.n = n;
        this.lista = lista;
    }
}
class InversoAditivoModel {
    constructor(m, //modulo
    x0, //semilla
    a, //multiplicador
    c, //incremento
    n, //interacciones
    landa // landa
    ) {
        this.m = m;
        this.x0 = x0;
        this.a = a;
        this.c = c;
        this.n = n;
        this.landa = landa;
    }
}
class InversoMultiplicativoModel {
    constructor(m, //modulo
    x0, //semilla
    a, //multiplicador
    n, //interacciones
    landa // landa
    ) {
        this.m = m;
        this.x0 = x0;
        this.a = a;
        this.n = n;
        this.landa = landa;
    }
}
class LineaEsperaModel {
    constructor(nu, //modulo       
    landa, // landa
    clientes // numero clientes
    ) {
        this.nu = nu;
        this.landa = landa;
        this.clientes = clientes;
    }
}
class InventarioModel {
    constructor(D, //       
    Co, // 
    Ch, // 
    P, // 
    Tespera, // 
    DiasAno // 
    ) {
        this.D = D;
        this.Co = Co;
        this.Ch = Ch;
        this.P = P;
        this.Tespera = Tespera;
        this.DiasAno = DiasAno;
    }
}
class LineaEsperaNuevoModel {
    constructor(x, y, nu, //modulo       
    landa, // landa
    clientes // numero clientes
    ) {
        this.x = x;
        this.y = y;
        this.nu = nu;
        this.landa = landa;
        this.clientes = clientes;
    }
}


/***/ }),

/***/ "5w1F":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/congruencial-multiplicativo/congruencial-multiplicativo.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CongruencialMultiplicativoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongruencialMultiplicativoComponent", function() { return CongruencialMultiplicativoComponent; });
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ "2G9v");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global */ "p9xo");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service */ "NwxT");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CongruencialMultiplicativoComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CongruencialMultiplicativoComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.generarGrafico(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Generar gr\u00E1fico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CongruencialMultiplicativoComponent_div_37_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r13);
} }
function CongruencialMultiplicativoComponent_div_37_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CongruencialMultiplicativoComponent_div_37_tbody_9_tr_1_Template, 3, 1, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.xn);
} }
function CongruencialMultiplicativoComponent_div_37_tbody_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r15);
} }
function CongruencialMultiplicativoComponent_div_37_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CongruencialMultiplicativoComponent_div_37_tbody_16_tr_1_Template, 3, 1, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r11.ri);
} }
function CongruencialMultiplicativoComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "thead", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "XN");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CongruencialMultiplicativoComponent_div_37_tbody_9_Template, 2, 1, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "thead", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "ri");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, CongruencialMultiplicativoComponent_div_37_tbody_16_Template, 2, 1, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.xn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.ri);
} }
function CongruencialMultiplicativoComponent_img_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 29);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r7.url + "grafico/" + ctx_r7.ri, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { standalone: true }; };
class CongruencialMultiplicativoComponent {
    constructor(_service) {
        this._service = _service;
        this.mostrar = false;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_1__["global"].url;
        this.congruencialMultiplicativoModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["CongruencialMultiplicativoModel"](null, null, null, null);
        this.grafico = false;
    }
    ngOnInit() {
    }
    congruencialMultiplicativo(form) {
        if (this.congruencialMultiplicativoModel.a && this.congruencialMultiplicativoModel.x0 &&
            this.congruencialMultiplicativoModel.m && this.congruencialMultiplicativoModel.n) {
            this._service.congruencialMultiplicativo(this.congruencialMultiplicativoModel).subscribe(response => {
                this.xn = response.Xn;
                this.ri = response.ri;
                this.grafico = true;
            }, error => {
                console.log(error);
            });
        }
        else {
            this.camposVacios();
        }
    }
    limpiar() {
        this.congruencialMultiplicativoModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["CongruencialMultiplicativoModel"](null, null, null, null);
        this.grafico = false;
    }
    generarGrafico() {
        this.mostrar = true;
        // this._service.grafico(this.ri).subscribe(
        //   response => { 
        //     this.limpiar()
        //   },
        //   error => {
        //     console.log(error)
        //   }
        // ) 
    }
    success() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Correcto',
            icon: 'success',
            timer: 600,
            showConfirmButton: false
        });
    }
    camposVacios() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Campos vacios',
            text: 'Asegurese de llenar todos los campos',
            icon: 'warning',
        });
    }
}
CongruencialMultiplicativoComponent.ɵfac = function CongruencialMultiplicativoComponent_Factory(t) { return new (t || CongruencialMultiplicativoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_service__WEBPACK_IMPORTED_MODULE_2__["Service"])); };
CongruencialMultiplicativoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CongruencialMultiplicativoComponent, selectors: [["app-congruencial-multiplicativo"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_services_service__WEBPACK_IMPORTED_MODULE_2__["Service"]])], decls: 42, vars: 16, consts: [[1, "container"], [1, "text-center"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "col-10", "mt-5", 3, "ngSubmit"], ["congruencialMultiplicativoForm", "ngForm"], [1, "row"], [1, "col"], [1, "mb-3"], [1, "form-label"], ["type", "number", "placeholder", " 4", "name", "modulo", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["modulo", "ngModel"], ["type", "number", "placeholder", " 2", "name", "semilla", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["semilla", "ngModel"], ["type", "number", "placeholder", " 3", "name", "multiplicador", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["multiplicador", "ngModel"], ["type", "number", "placeholder", " 10", "name", "interacciones", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["interacciones", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "col-3", 3, "disabled"], ["type", "button", "class", "btn btn-info ml-2 col-3", 3, "click", 4, "ngIf"], ["class", "col-6 m-auto text-center ", 4, "ngIf"], ["width", "600px", 3, "src", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "ml-2", "col-3", 3, "click"], [1, "col-6", "m-auto", "text-center"], [1, "container", "mt-5", 2, "overflow-y", "auto", "overflow-x", "hidden", "max-height", "400px"], [1, "table"], [1, "bg-info"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["width", "600px", 3, "src"]], template: function CongruencialMultiplicativoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "M\u00E9todo congruencial multiplicativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CongruencialMultiplicativoComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6); return ctx.congruencialMultiplicativo(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Modulo (m):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CongruencialMultiplicativoComponent_Template_input_ngModelChange_12_listener($event) { return ctx.congruencialMultiplicativoModel.m = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Semilla (X0):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CongruencialMultiplicativoComponent_Template_input_ngModelChange_18_listener($event) { return ctx.congruencialMultiplicativoModel.x0 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Multiplicador (a):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CongruencialMultiplicativoComponent_Template_input_ngModelChange_24_listener($event) { return ctx.congruencialMultiplicativoModel.a = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Interacciones (n):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CongruencialMultiplicativoComponent_Template_input_ngModelChange_30_listener($event) { return ctx.congruencialMultiplicativoModel.n = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Calcular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, CongruencialMultiplicativoComponent_button_36_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, CongruencialMultiplicativoComponent_div_37_Template, 17, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, CongruencialMultiplicativoComponent_img_41_Template, 1, 1, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.congruencialMultiplicativoModel.m)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.congruencialMultiplicativoModel.x0)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.congruencialMultiplicativoModel.a)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.congruencialMultiplicativoModel.n)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mostrar);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25ncnVlbmNpYWwtbXVsdGlwbGljYXRpdm8uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "8txY":
/*!***************************************************************************************!*\
  !*** ./src/app/components/inversa-multiplicativo/inversa-multiplicativo.component.ts ***!
  \***************************************************************************************/
/*! exports provided: InversaMultiplicativoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InversaMultiplicativoComponent", function() { return InversaMultiplicativoComponent; });
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ "2G9v");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global */ "p9xo");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service */ "NwxT");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function InversaMultiplicativoComponent_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InversaMultiplicativoComponent_button_39_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.generarGrafico(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Generar gr\u00E1fico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InversaMultiplicativoComponent_div_40_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r15);
} }
function InversaMultiplicativoComponent_div_40_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InversaMultiplicativoComponent_div_40_tbody_9_tr_1_Template, 3, 1, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r11.xn);
} }
function InversaMultiplicativoComponent_div_40_tbody_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r17);
} }
function InversaMultiplicativoComponent_div_40_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InversaMultiplicativoComponent_div_40_tbody_16_tr_1_Template, 3, 1, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r12.ri);
} }
function InversaMultiplicativoComponent_div_40_tbody_23_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r19);
} }
function InversaMultiplicativoComponent_div_40_tbody_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InversaMultiplicativoComponent_div_40_tbody_23_tr_1_Template, 3, 1, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r13.inversa);
} }
function InversaMultiplicativoComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "thead", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "XN");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, InversaMultiplicativoComponent_div_40_tbody_9_Template, 2, 1, "tbody", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "thead", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "ri");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, InversaMultiplicativoComponent_div_40_tbody_16_Template, 2, 1, "tbody", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "thead", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Inversa");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, InversaMultiplicativoComponent_div_40_tbody_23_Template, 2, 1, "tbody", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.xn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.ri);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.inversa);
} }
function InversaMultiplicativoComponent_img_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 31);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r8.url + "grafico/" + ctx_r8.ri, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { standalone: true }; };
class InversaMultiplicativoComponent {
    constructor(_service) {
        this._service = _service;
        this.mostrar = false;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_1__["global"].url;
        this.inversoMultiplicativoModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["InversoMultiplicativoModel"](null, null, null, null, null);
        this.grafico = false;
    }
    ngOnInit() {
    }
    inversaMultiplicativo(form) {
        if (this.inversoMultiplicativoModel.a && this.inversoMultiplicativoModel.landa
            && this.inversoMultiplicativoModel.m && this.inversoMultiplicativoModel.n
            && this.inversoMultiplicativoModel.x0) {
            this._service.inversaMultiplicativo(this.inversoMultiplicativoModel).subscribe(response => {
                this.xn = response.Xn;
                this.ri = response.ri;
                this.inversa = response.Inversa;
                this.grafico = true;
                this.limpiar();
            }, error => {
                console.log(error);
            });
        }
        else {
            this.camposVacios();
        }
    }
    limpiar() {
        this.inversoMultiplicativoModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["InversoMultiplicativoModel"](null, null, null, null, null);
        // this.grafico = false
    }
    generarGrafico() {
        this.mostrar = true;
        // this._service.grafico(this.ri).subscribe(
        //   response => { 
        //   },
        //   error => {
        //     console.log(error)
        //   }
        // ) 
    }
    success() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Correcto',
            icon: 'success',
            timer: 600,
            showConfirmButton: false,
        });
    }
    camposVacios() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Validacion',
            text: 'No deje campos vacios',
            icon: 'warning',
        });
    }
}
InversaMultiplicativoComponent.ɵfac = function InversaMultiplicativoComponent_Factory(t) { return new (t || InversaMultiplicativoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_service__WEBPACK_IMPORTED_MODULE_2__["Service"])); };
InversaMultiplicativoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: InversaMultiplicativoComponent, selectors: [["app-inversa-multiplicativo"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_services_service__WEBPACK_IMPORTED_MODULE_2__["Service"]])], decls: 45, vars: 19, consts: [[1, "container"], [1, "text-center"], [1, "col", "mt-5", 3, "ngSubmit"], ["inversoMultiplicativoForm", "ngForm"], [1, "row"], [1, "col"], [1, "mb-3"], [1, "form-label"], ["type", "number", "placeholder", " 4", "name", "modulo", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["modulo", "ngModel"], ["type", "number", "placeholder", " 2", "name", "semilla", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["semilla", "ngModel"], ["type", "number", "placeholder", " 3", "name", "multiplicador", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["multiplicador", "ngModel"], ["type", "number", "placeholder", " 10", "name", "interacciones", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["interacciones", "ngModel"], ["type", "number", "placeholder", " 10", "name", "landa", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["landa", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "col-3", 3, "disabled"], ["type", "button", "class", "btn btn-info  col-3 ml-2", 3, "click", 4, "ngIf"], ["class", "m-auto text-center ", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center"], ["width", "600px", 3, "src", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "col-3", "ml-2", 3, "click"], [1, "m-auto", "text-center"], [1, "container", "mt-5", 2, "overflow-y", "auto", "overflow-x", "hidden", "max-height", "400px"], [1, "table"], [1, "bg-info"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["width", "600px", 3, "src"]], template: function InversaMultiplicativoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Transformada inversa multiplicativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function InversaMultiplicativoComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5); return ctx.inversaMultiplicativo(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Modulo (m):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InversaMultiplicativoComponent_Template_input_ngModelChange_11_listener($event) { return ctx.inversoMultiplicativoModel.m = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Semilla (X0):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InversaMultiplicativoComponent_Template_input_ngModelChange_17_listener($event) { return ctx.inversoMultiplicativoModel.x0 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Multiplicador (a):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InversaMultiplicativoComponent_Template_input_ngModelChange_23_listener($event) { return ctx.inversoMultiplicativoModel.a = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Interacciones (n):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InversaMultiplicativoComponent_Template_input_ngModelChange_29_listener($event) { return ctx.inversoMultiplicativoModel.n = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Landa (\u03BB):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InversaMultiplicativoComponent_Template_input_ngModelChange_35_listener($event) { return ctx.inversoMultiplicativoModel.landa = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " Calcular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, InversaMultiplicativoComponent_button_39_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, InversaMultiplicativoComponent_div_40_Template, 24, 3, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, InversaMultiplicativoComponent_img_44_Template, 1, 1, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.inversoMultiplicativoModel.m)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.inversoMultiplicativoModel.x0)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.inversoMultiplicativoModel.a)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.inversoMultiplicativoModel.n)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.inversoMultiplicativoModel.landa)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mostrar);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlcnNhLW11bHRpcGxpY2F0aXZvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "8zAS":
/*!*****************************************************************************!*\
  !*** ./src/app/components/modelo-inventario/modelo-inventario.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ModeloInventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeloInventarioComponent", function() { return ModeloInventarioComponent; });
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ "2G9v");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/service */ "NwxT");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ModeloInventarioComponent_div_49_tbody_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.result.q);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.result.cot);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.result.cht);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.result.moq);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.result.ctt);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.result.n);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.result.r);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.result.t);
} }
function ModeloInventarioComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "thead", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Q");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "CoT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "ChT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "MOO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "CTT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Total de pedidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Punto de reorden");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Tiempo de Pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ModeloInventarioComponent_div_49_tbody_20_Template, 18, 8, "tbody", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.result);
} }
function ModeloInventarioComponent_div_50_tbody_8_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r16);
} }
function ModeloInventarioComponent_div_50_tbody_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModeloInventarioComponent_div_50_tbody_8_tr_1_Template, 3, 1, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r10.Q);
} }
function ModeloInventarioComponent_div_50_tbody_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r18);
} }
function ModeloInventarioComponent_div_50_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModeloInventarioComponent_div_50_tbody_15_tr_1_Template, 3, 1, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r11.costoOrdenar);
} }
function ModeloInventarioComponent_div_50_tbody_22_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r20);
} }
function ModeloInventarioComponent_div_50_tbody_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModeloInventarioComponent_div_50_tbody_22_tr_1_Template, 3, 1, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r12.costoMantenimiento);
} }
function ModeloInventarioComponent_div_50_tbody_29_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r22);
} }
function ModeloInventarioComponent_div_50_tbody_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModeloInventarioComponent_div_50_tbody_29_tr_1_Template, 3, 1, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r13.costoMinimo);
} }
function ModeloInventarioComponent_div_50_tbody_36_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r24);
} }
function ModeloInventarioComponent_div_50_tbody_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModeloInventarioComponent_div_50_tbody_36_tr_1_Template, 3, 1, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r14.diferencia);
} }
function ModeloInventarioComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "thead", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Q");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ModeloInventarioComponent_div_50_tbody_8_Template, 2, 1, "tbody", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "thead", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Costo de ordenar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ModeloInventarioComponent_div_50_tbody_15_Template, 2, 1, "tbody", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "thead", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Costo Mantenimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ModeloInventarioComponent_div_50_tbody_22_Template, 2, 1, "tbody", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "thead", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Costo M\u00EDnimo total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ModeloInventarioComponent_div_50_tbody_29_Template, 2, 1, "tbody", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "thead", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Diferencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ModeloInventarioComponent_div_50_tbody_36_Template, 2, 1, "tbody", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.Q);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.costoOrdenar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.costoMantenimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.costoMinimo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.diferencia);
} }
const _c0 = function () { return { standalone: true }; };
class ModeloInventarioComponent {
    constructor(_service) {
        this._service = _service;
        this.inventarioModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["InventarioModel"](null, null, null, null, null, null);
    }
    ngOnInit() {
    }
    inventario(form) {
        if (this.inventarioModel.Ch && this.inventarioModel.Co &&
            this.inventarioModel.D && this.inventarioModel.DiasAno &&
            this.inventarioModel.P && this.inventarioModel.Tespera) {
            this._service.inventario(this.inventarioModel).subscribe(response => {
                this.Q = response.Q_return;
                this.costoOrdenar = response.Co_return;
                this.costoMantenimiento = response.Ch_return;
                this.costoMinimo = response.MO_return;
                this.diferencia = response.Diferencia_total_return;
                this.result = response.Resultado;
                this.limpiar();
            }, error => {
                console.log(error);
            });
        }
        else {
            this.camposVacios();
        }
    }
    limpiar() {
        this.inventarioModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["InventarioModel"](null, null, null, null, null, null);
    }
    success() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Correcto',
            icon: 'success',
            timer: 600,
            showConfirmButton: false,
        });
    }
    camposVacios() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Validacion',
            text: 'No deje campos vacios',
            icon: 'warning',
        });
    }
}
ModeloInventarioComponent.ɵfac = function ModeloInventarioComponent_Factory(t) { return new (t || ModeloInventarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"])); };
ModeloInventarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ModeloInventarioComponent, selectors: [["app-modelo-inventario"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([src_app_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"]])], decls: 51, vars: 21, consts: [[1, "container"], [1, "text-center"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "col-8", "mt-5", 3, "ngSubmit"], ["inventarioForm", "ngForm"], [1, "row"], [1, "col"], [1, "mb-3"], [1, "form-label"], ["type", "number", "placeholder", " 4", "name", "D", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["D", "ngModel"], ["type", "number", "placeholder", " 2", "name", "Co", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["Co", "ngModel"], ["type", "number", "placeholder", " 3", "name", "Ch", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["Ch", "ngModel"], ["type", "number", "placeholder", " 3", "name", "P", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["P", "ngModel"], ["type", "number", "placeholder", " 10", "name", "Tespera", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["Tespera", "ngModel"], ["type", "number", "placeholder", " 10", "name", "DiasAno", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["DiasAno", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "col-12", 3, "disabled"], ["class", "col mt-5 m-auto text-center ", 4, "ngIf"], ["class", "container mt-5 m-auto text-center ", "style", "overflow-y: auto; overflow-x: hidden; max-height: 400px", 4, "ngIf"], [1, "col", "mt-5", "m-auto", "text-center"], [1, "table"], [1, "bg-info"], ["scope", "col"], [4, "ngIf"], [1, "container", "mt-5", "m-auto", "text-center", 2, "overflow-y", "auto", "overflow-x", "hidden", "max-height", "400px"], [4, "ngFor", "ngForOf"]], template: function ModeloInventarioComponent_Template(rf, ctx) { if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Simulaci\u00F3n modelo inventario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ModeloInventarioComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6); return ctx.inventario(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Demanda (D):");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModeloInventarioComponent_Template_input_ngModelChange_12_listener($event) { return ctx.inventarioModel.D = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Costo al ordenar (Co):");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModeloInventarioComponent_Template_input_ngModelChange_18_listener($event) { return ctx.inventarioModel.Co = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Costo mantenimiento (Ch):");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModeloInventarioComponent_Template_input_ngModelChange_24_listener($event) { return ctx.inventarioModel.Ch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Costo del producto (P):");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModeloInventarioComponent_Template_input_ngModelChange_31_listener($event) { return ctx.inventarioModel.P = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Tiempo de espera (T):");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModeloInventarioComponent_Template_input_ngModelChange_37_listener($event) { return ctx.inventarioModel.Tespera = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Dias/A\u00F1o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ModeloInventarioComponent_Template_input_ngModelChange_43_listener($event) { return ctx.inventarioModel.DiasAno = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, " Calcular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, ModeloInventarioComponent_div_49_Template, 21, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, ModeloInventarioComponent_div_50_Template, 37, 5, "div", 23);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.inventarioModel.D)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.inventarioModel.Co)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.inventarioModel.Ch)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.inventarioModel.P)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.inventarioModel.Tespera)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.inventarioModel.DiasAno)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.result);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RlbG8taW52ZW50YXJpby5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Alcz":
/*!*******************************************************************!*\
  !*** ./src/app/components/linea-espera/linea-espera.component.ts ***!
  \*******************************************************************/
/*! exports provided: LineaEsperaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineaEsperaComponent", function() { return LineaEsperaComponent; });
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ "2G9v");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global */ "p9xo");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service */ "NwxT");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LineaEsperaComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LineaEsperaComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.generarGrafico(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Generar gr\u00E1fico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LineaEsperaComponent_div_27_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r21);
} }
function LineaEsperaComponent_div_27_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LineaEsperaComponent_div_27_tbody_9_tr_1_Template, 3, 1, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r8.ALL);
} }
function LineaEsperaComponent_div_27_tbody_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r23);
} }
function LineaEsperaComponent_div_27_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LineaEsperaComponent_div_27_tbody_16_tr_1_Template, 3, 1, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.TILL);
} }
function LineaEsperaComponent_div_27_tbody_23_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r25);
} }
function LineaEsperaComponent_div_27_tbody_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LineaEsperaComponent_div_27_tbody_23_tr_1_Template, 3, 1, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.TISE);
} }
function LineaEsperaComponent_div_27_tbody_30_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r27);
} }
function LineaEsperaComponent_div_27_tbody_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LineaEsperaComponent_div_27_tbody_30_tr_1_Template, 3, 1, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r11.TIRLL);
} }
function LineaEsperaComponent_div_27_tbody_37_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r29);
} }
function LineaEsperaComponent_div_27_tbody_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LineaEsperaComponent_div_27_tbody_37_tr_1_Template, 3, 1, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r12.TIISE);
} }
function LineaEsperaComponent_div_27_tbody_44_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r31);
} }
function LineaEsperaComponent_div_27_tbody_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LineaEsperaComponent_div_27_tbody_44_tr_1_Template, 3, 1, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r13.TIFSE);
} }
function LineaEsperaComponent_div_27_tbody_51_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r33);
} }
function LineaEsperaComponent_div_27_tbody_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LineaEsperaComponent_div_27_tbody_51_tr_1_Template, 3, 1, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r14.TIESP);
} }
function LineaEsperaComponent_div_27_tbody_58_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r35);
} }
function LineaEsperaComponent_div_27_tbody_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LineaEsperaComponent_div_27_tbody_58_tr_1_Template, 3, 1, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r15.TIESA);
} }
function LineaEsperaComponent_div_27_tbody_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r16.suma1);
} }
function LineaEsperaComponent_div_27_tbody_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r17.suma2);
} }
function LineaEsperaComponent_div_27_tbody_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r18.promedio1);
} }
function LineaEsperaComponent_div_27_tbody_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r19.promedio2);
} }
function LineaEsperaComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "thead", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "ALL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, LineaEsperaComponent_div_27_tbody_9_Template, 2, 1, "tbody", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "thead", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "TILL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, LineaEsperaComponent_div_27_tbody_16_Template, 2, 1, "tbody", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "thead", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "TISE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, LineaEsperaComponent_div_27_tbody_23_Template, 2, 1, "tbody", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "thead", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "TIRLL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, LineaEsperaComponent_div_27_tbody_30_Template, 2, 1, "tbody", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "thead", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "TIISE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, LineaEsperaComponent_div_27_tbody_37_Template, 2, 1, "tbody", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "thead", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "TIFSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, LineaEsperaComponent_div_27_tbody_44_Template, 2, 1, "tbody", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "thead", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "TIESP");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, LineaEsperaComponent_div_27_tbody_51_Template, 2, 1, "tbody", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "thead", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "TIESA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, LineaEsperaComponent_div_27_tbody_58_Template, 2, 1, "tbody", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "thead", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "SUMA TIESP");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, LineaEsperaComponent_div_27_tbody_67_Template, 4, 1, "tbody", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "thead", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "SUMA TIESA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, LineaEsperaComponent_div_27_tbody_74_Template, 4, 1, "tbody", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "thead", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "PROMEDIO TIESP");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](81, LineaEsperaComponent_div_27_tbody_81_Template, 4, 1, "tbody", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "thead", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "PROMEDIO TIESA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](88, LineaEsperaComponent_div_27_tbody_88_Template, 4, 1, "tbody", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.ALL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.TILL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.TISE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.TIRLL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.TIISE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.TIFSE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.TIESP);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.TIESA);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.ALL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.TILL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.TISE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.TIRLL);
} }
function LineaEsperaComponent_img_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 26);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r5.url + "graficols/" + ctx_r5.ALL + "/" + ctx_r5.TILL + "/" + ctx_r5.TISE + "/" + ctx_r5.TIRLL + "/" + ctx_r5.TIISE + "/" + ctx_r5.TIFSE + "/" + ctx_r5.TIESP + "/" + ctx_r5.TIESA, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { standalone: true }; };
class LineaEsperaComponent {
    constructor(_service) {
        this._service = _service;
        this.grafico = false;
        this.mostrar = false;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_1__["global"].url;
        this.lineaEsperaModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["LineaEsperaModel"](null, null, null);
    }
    ngOnInit() {
    }
    calcular() {
        if (this.lineaEsperaModel.clientes && this.lineaEsperaModel.landa && this.lineaEsperaModel.nu) {
            this._service.lineaEspera(this.lineaEsperaModel).subscribe(response => {
                this.ALL = response.ALL;
                this.TILL = response.TILL;
                this.TISE = response.TISE;
                this.TIRLL = response.TIRLL;
                this.TIISE = response.TIISE;
                this.TIFSE = response.TIFSE;
                this.TIESP = response.TIESP;
                this.TIESA = response.TIESA;
                this.numClientes = response.numClientes;
                this.suma1 = response.suma1;
                this.suma2 = response.suma2;
                this.promedio1 = response.promedio1;
                this.promedio2 = response.promedio2;
                this.grafico = true;
                this.limpiar();
            }, error => {
                console.log(error);
            });
        }
        else {
            this.camposVacios();
        }
    }
    limpiar() {
        this.lineaEsperaModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["LineaEsperaModel"](null, null, null);
    }
    generarGrafico() {
        this.mostrar = true;
    }
    success() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Correcto',
            icon: 'success',
            timer: 600,
            showConfirmButton: false,
        });
    }
    camposVacios() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Validacion',
            text: 'No deje campos vacios',
            icon: 'warning',
        });
    }
}
LineaEsperaComponent.ɵfac = function LineaEsperaComponent_Factory(t) { return new (t || LineaEsperaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_service__WEBPACK_IMPORTED_MODULE_2__["Service"])); };
LineaEsperaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LineaEsperaComponent, selectors: [["app-linea-espera"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_services_service__WEBPACK_IMPORTED_MODULE_2__["Service"]])], decls: 32, vars: 12, consts: [[1, "container"], [1, "text-center"], [1, "col", "mt-5"], [1, "row"], [1, "col"], [1, "mb-3"], [1, "form-label"], ["type", "number", "placeholder", " 1", "name", "landa", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["landa", "ngModel"], ["type", "number", "placeholder", " 10", "name", "nu", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["nu", "ngModel"], ["type", "number", "placeholder", " 10", "name", "clientes", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["clientes", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "col-3", 3, "click"], ["type", "button", "class", "btn btn-info  col-3 ml-2", 3, "click", 4, "ngIf"], ["class", "m-auto text-center ", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center"], ["width", "600px", 3, "src", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "col-3", "ml-2", 3, "click"], [1, "m-auto", "text-center"], [1, "container", "mt-5", 2, "overflow-y", "auto", "overflow-x", "hidden", "max-height", "400px"], [1, "table"], [1, "bg-info"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["width", "600px", 3, "src"]], template: function LineaEsperaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Simulaci\u00F3n linea de espera");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Ingrese el valor de landa (\u03BB)):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LineaEsperaComponent_Template_input_ngModelChange_10_listener($event) { return ctx.lineaEsperaModel.landa = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Ingrese el valor de Mui:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LineaEsperaComponent_Template_input_ngModelChange_16_listener($event) { return ctx.lineaEsperaModel.nu = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Ingrese el numero de clientes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LineaEsperaComponent_Template_input_ngModelChange_22_listener($event) { return ctx.lineaEsperaModel.clientes = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LineaEsperaComponent_Template_button_click_24_listener() { return ctx.calcular(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Calcular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, LineaEsperaComponent_button_26_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, LineaEsperaComponent_div_27_Template, 89, 12, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, LineaEsperaComponent_img_31_Template, 1, 1, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.lineaEsperaModel.landa)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.lineaEsperaModel.nu)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.lineaEsperaModel.clientes)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mostrar);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5lYS1lc3BlcmEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 21, vars: 0, consts: [["id", "hero"], [1, "row"], [1, "col-4", "d-flex", "justify-content-center", "align-items-center"], ["src", "../../../assets/images.jpg", "alt", "Grafico", "height", "70%", "width", "70%"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-8", "order-2", "order-lg-1", "float-right"], ["src", "../../../assets/hosptial.jpg", "alt", "Grafico", "height", "100%", "width", "100%"], ["src", "../../../assets/covid2.jpg", "alt", "Grafico", "height", "100%", "width", "100%"], ["src", "../../../assets/personal.jpg", "alt", "Grafico", "height", "100%", "width", "100%"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sistema de Simulaci\u00F3n Ingresos y Egresos de Pacientes Covid-19 De Hospital General Manta-IESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " La infecci\u00F3n por coronavirus, causante de COVID-19, produce cuadros cl\u00EDnicos de diferente gravedad, evolucionando en los casos m\u00E1s graves a cuadros de insuficiencia respiratoria aguda con distr\u00E9s respiratorio que precisan del ingreso en una unidad de cuidados intensivos (UCI) y de ventilaci\u00F3n mec\u00E1nica provancado que el sistema de emergencias de la unidad se sature. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "por ende surgio le necesidad de establecer un triaje al ingreso, basado en privilegiar la \u201Cmayor esperanza de vida\u201D, y unos criterios de ingreso claros y de descarga de la UCI, basados en un principio de proporcionalidad y de justicia distributiva, para maximizar el beneficio del mayor n\u00FAmero posible de personas y aumentar la disponibilidad de los recursos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: \"Open Sans\", sans-serif;\r\n    color: #444444;\r\n  }\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #47b2e4;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #73c5eb;\r\n    text-decoration: none;\r\n  }\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    font-family: \"Jost\", sans-serif;\r\n  }\r\n\r\n\r\n\r\n#preloader[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 9999;\r\n    overflow: hidden;\r\n    background: #37517e;\r\n  }\r\n\r\n#preloader[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    position: fixed;\r\n    top: calc(50% - 30px);\r\n    left: calc(50% - 30px);\r\n    border: 6px solid #37517e;\r\n    border-top-color: #fff;\r\n    border-bottom-color: #fff;\r\n    border-radius: 50%;\r\n    width: 60px;\r\n    height: 60px;\r\n    animation: animate-preloader 1s linear infinite;\r\n  }\r\n\r\n@keyframes animate-preloader {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n\r\n\r\n.back-to-top[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    display: none;\r\n    right: 15px;\r\n    bottom: 15px;\r\n    z-index: 99999;\r\n  }\r\n\r\n.back-to-top[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 24px;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50px;\r\n    background: #47b2e4;\r\n    color: #fff;\r\n    transition: all 0.4s;\r\n  }\r\n\r\n.back-to-top[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    background: #209dd8;\r\n    color: #fff;\r\n  }\r\n\r\n\r\n\r\n#header[_ngcontent-%COMP%] {\r\n    transition: all 0.5s;\r\n    z-index: 997;\r\n    padding: 15px 0;\r\n  }\r\n\r\n#header.header-scrolled[_ngcontent-%COMP%], #header.header-inner-pages[_ngcontent-%COMP%] {\r\n    background: rgba(40, 58, 90, 0.9);\r\n  }\r\n\r\n#header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    margin: 0;\r\n    padding: 0;\r\n    line-height: 1;\r\n    font-weight: 500;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n#header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n  }\r\n\r\n#header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-height: 40px;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n\r\n.nav-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n\r\n.nav-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    white-space: nowrap;\r\n    padding: 10px 0 10px 28px;\r\n  }\r\n\r\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: relative;\r\n    color: #fff;\r\n    transition: 0.3s;\r\n    font-size: 15px;\r\n    letter-spacing: 0.5px;\r\n    font-weight: 500;\r\n    font-family: \"Open Sans\", sans-serif;\r\n  }\r\n\r\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nav-menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\r\n    color: #47b2e4;\r\n  }\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    border-radius: 8px;\r\n    display: block;\r\n    position: absolute;\r\n    left: 14px;\r\n    top: calc(100% + 30px);\r\n    z-index: 99;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    padding: 10px 0;\r\n    background: #fff;\r\n    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\r\n    transition: 0.3s;\r\n  }\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    top: 100%;\r\n    visibility: visible;\r\n  }\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    min-width: 180px;\r\n    position: relative;\r\n  }\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    text-transform: none;\r\n    color: #0c3c53;\r\n  }\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\r\n    color: #47b2e4;\r\n  }\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\r\n    content: \"\\ea99\";\r\n    font-family: IcoFont;\r\n    padding-left: 5px;\r\n  }\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    top: 0;\r\n    left: calc(100% - 30px);\r\n  }\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    top: 0;\r\n    left: 100%;\r\n  }\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    padding-right: 35px;\r\n  }\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\r\n    content: \"\\eaa0\";\r\n    font-family: IcoFont;\r\n    position: absolute;\r\n    right: 15px;\r\n  }\r\n\r\n@media (max-width: 1366px) {\r\n    .nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n      left: -90%;\r\n    }\r\n    .nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\r\n      left: -100%;\r\n    }\r\n    .nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\r\n      content: \"\\ea9d\";\r\n    }\r\n  }\r\n\r\n\r\n\r\n.get-started-btn[_ngcontent-%COMP%] {\r\n    margin-left: 25px;\r\n    color: #fff;\r\n    border-radius: 50px;\r\n    padding: 6px 25px 7px 25px;\r\n    white-space: nowrap;\r\n    transition: 0.3s;\r\n    font-size: 14px;\r\n    display: inline-block;\r\n    border: 2px solid #47b2e4;\r\n    font-weight: 600;\r\n  }\r\n\r\n.get-started-btn[_ngcontent-%COMP%]:hover {\r\n    background: #31a9e1;\r\n    color: #fff;\r\n  }\r\n\r\n@media (max-width: 768px) {\r\n    .get-started-btn[_ngcontent-%COMP%] {\r\n      margin: 0 48px 0 0;\r\n      padding: 6px 20px 7px 20px;\r\n    }\r\n  }\r\n\r\n\r\n\r\n.mobile-nav-toggle[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 20px;\r\n    right: 15px;\r\n    z-index: 9998;\r\n    border: 0;\r\n    background: none;\r\n    font-size: 24px;\r\n    transition: all 0.4s;\r\n    outline: none !important;\r\n    line-height: 1;\r\n    cursor: pointer;\r\n    text-align: right;\r\n  }\r\n\r\n.mobile-nav-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n  }\r\n\r\n.mobile-nav[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 55px;\r\n    right: 15px;\r\n    bottom: 15px;\r\n    left: 15px;\r\n    z-index: 9999;\r\n    overflow-y: auto;\r\n    background: #fff;\r\n    transition: ease-in-out 0.2s;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    border-radius: 10px;\r\n    padding: 10px 0;\r\n  }\r\n\r\n.mobile-nav[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n\r\n.mobile-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: relative;\r\n    color: #37517e;\r\n    padding: 10px 20px;\r\n    font-weight: 500;\r\n    outline: none;\r\n  }\r\n\r\n.mobile-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .mobile-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .mobile-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\r\n    color: #47b2e4;\r\n    text-decoration: none;\r\n  }\r\n\r\n.mobile-nav[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\r\n    content: \"\\ea99\";\r\n    font-family: IcoFont;\r\n    padding-left: 10px;\r\n    position: absolute;\r\n    right: 15px;\r\n  }\r\n\r\n.mobile-nav[_ngcontent-%COMP%]   .active.drop-down[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\r\n    content: \"\\eaa1\";\r\n  }\r\n\r\n.mobile-nav[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    padding-right: 35px;\r\n  }\r\n\r\n.mobile-nav[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: none;\r\n    overflow: hidden;\r\n  }\r\n\r\n.mobile-nav[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding-left: 20px;\r\n  }\r\n\r\n.mobile-nav-overly[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 9997;\r\n    top: 0;\r\n    left: 0;\r\n    position: fixed;\r\n    background: rgba(40, 58, 90, 0.6);\r\n    overflow: hidden;\r\n    display: none;\r\n    transition: ease-in-out 0.2s;\r\n  }\r\n\r\n.mobile-nav-active[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n  }\r\n\r\n.mobile-nav-active[_ngcontent-%COMP%]   .mobile-nav[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n\r\n.mobile-nav-active[_ngcontent-%COMP%]   .mobile-nav-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n  }\r\n\r\n\r\n\r\n#hero[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background: rgb(234,239,242);\r\n    background: linear-gradient(0deg, rgba(234,239,242,1) 0%, rgba(245,227,227,0.5410539215686274) 89%);\r\n    border-radius: 50px;\r\n  }\r\n\r\n#hero[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    padding-top: 72px;\r\n  }\r\n\r\n#hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 0 0 10px 0;\r\n    font-size: 48px;\r\n    font-weight: 700;\r\n    line-height: 56px;\r\n    color: rgb(43, 52, 54);\r\n  }\r\n\r\n#hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, 0.6);\r\n    margin-bottom: 50px;\r\n    font-size: 24px;\r\n  }\r\n\r\n#hero[_ngcontent-%COMP%]   .btn-get-started[_ngcontent-%COMP%] {\r\n    font-family: \"Jost\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    display: inline-block;\r\n    padding: 10px 28px 11px 28px;\r\n    border-radius: 50px;\r\n    transition: 0.5s;\r\n    margin: 10px 0 0 0;\r\n    color: #fff;\r\n    background: #47b2e4;\r\n  }\r\n\r\n#hero[_ngcontent-%COMP%]   .btn-get-started[_ngcontent-%COMP%]:hover {\r\n    background: #209dd8;\r\n  }\r\n\r\n#hero[_ngcontent-%COMP%]   .btn-watch-video[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    display: inline-block;\r\n    padding: 10px 0 8px 40px;\r\n    transition: 0.5s;\r\n    margin: 10px 0 0 25px;\r\n    color: #fff;\r\n    position: relative;\r\n  }\r\n\r\n#hero[_ngcontent-%COMP%]   .btn-watch-video[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-size: 32px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 7px;\r\n    transition: 0.3s;\r\n  }\r\n\r\n#hero[_ngcontent-%COMP%]   .btn-watch-video[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    color: #47b2e4;\r\n  }\r\n\r\n#hero[_ngcontent-%COMP%]   .animated[_ngcontent-%COMP%] {\r\n    animation: up-down 2s ease-in-out infinite alternate-reverse both;\r\n  }\r\n\r\n@media (max-width: 991px) {\r\n    #hero[_ngcontent-%COMP%] {\r\n      height: 100vh;\r\n      text-align: center;\r\n    }\r\n    #hero[_ngcontent-%COMP%]   .animated[_ngcontent-%COMP%] {\r\n      animation: none;\r\n    }\r\n    #hero[_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n    }\r\n    #hero[_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 50%;\r\n    }\r\n  }\r\n\r\n@media (max-width: 768px) {\r\n    #hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n      font-size: 28px;\r\n      line-height: 36px;\r\n    }\r\n    #hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n      font-size: 18px;\r\n      line-height: 24px;\r\n      margin-bottom: 30px;\r\n    }\r\n    #hero[_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 70%;\r\n    }\r\n  }\r\n\r\n@media (max-width: 575px) {\r\n    #hero[_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 80%;\r\n    }\r\n    #hero[_ngcontent-%COMP%]   .btn-get-started[_ngcontent-%COMP%] {\r\n      font-size: 16px;\r\n      padding: 10px 24px 11px 24px;\r\n    }\r\n    #hero[_ngcontent-%COMP%]   .btn-watch-video[_ngcontent-%COMP%] {\r\n      font-size: 16px;\r\n      padding: 10px 0 8px 40px;\r\n      margin-left: 20px;\r\n    }\r\n    #hero[_ngcontent-%COMP%]   .btn-watch-video[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n      font-size: 32px;\r\n      top: 7px;\r\n    }\r\n  }\r\n\r\n@keyframes up-down {\r\n    0% {\r\n      transform: translateY(10px);\r\n    }\r\n    100% {\r\n      transform: translateY(-10px);\r\n    }\r\n  }\r\n\r\n\r\n\r\nsection[_ngcontent-%COMP%] {\r\n    padding: 60px 0;\r\n    overflow: hidden;\r\n  }\r\n\r\n.section-bg[_ngcontent-%COMP%] {\r\n    background-color: #f3f5fa;\r\n  }\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding-bottom: 30px;\r\n  }\r\n\r\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    margin-bottom: 20px;\r\n    padding-bottom: 20px;\r\n    position: relative;\r\n    color: #37517e;\r\n  }\r\n\r\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    display: block;\r\n    width: 120px;\r\n    height: 1px;\r\n    background: #ddd;\r\n    bottom: 1px;\r\n    left: calc(50% - 60px);\r\n  }\r\n\r\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    display: block;\r\n    width: 40px;\r\n    height: 3px;\r\n    background: #47b2e4;\r\n    bottom: 0;\r\n    left: calc(50% - 20px);\r\n  }\r\n\r\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n  }\r\n\r\n\r\n\r\n.cliens[_ngcontent-%COMP%] {\r\n    padding: 12px 0;\r\n    text-align: center;\r\n  }\r\n\r\n.cliens[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 45%;\r\n    transition: all 0.4s ease-in-out;\r\n    display: inline-block;\r\n    padding: 15px 0;\r\n    filter: grayscale(100);\r\n  }\r\n\r\n.cliens[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    filter: none;\r\n    transform: scale(1.1);\r\n  }\r\n\r\n@media (max-width: 768px) {\r\n    .cliens[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      max-width: 40%;\r\n    }\r\n  }\r\n\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    font-size: 26px;\r\n  }\r\n\r\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n  }\r\n\r\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding-left: 28px;\r\n    position: relative;\r\n  }\r\n\r\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n  }\r\n\r\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 2px;\r\n    font-size: 20px;\r\n    color: #47b2e4;\r\n    line-height: 1;\r\n  }\r\n\r\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n\r\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn-learn-more[_ngcontent-%COMP%] {\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    display: inline-block;\r\n    padding: 12px 32px;\r\n    border-radius: 4px;\r\n    transition: 0.3s;\r\n    line-height: 1;\r\n    color: #47b2e4;\r\n    animation-delay: 0.8s;\r\n    margin-top: 6px;\r\n    border: 2px solid #47b2e4;\r\n  }\r\n\r\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn-learn-more[_ngcontent-%COMP%]:hover {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n    text-decoration: none;\r\n  }\r\n\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 60px 100px 0 100px;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    font-size: 34px;\r\n    color: #37517e;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    margin-top: 5px;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    color: #848484;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .accordion-list[_ngcontent-%COMP%] {\r\n    padding: 0 100px 60px 100px;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .accordion-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .accordion-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .accordion-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 4px;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .accordion-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: relative;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    font-weight: 500;\r\n    padding-right: 30px;\r\n    outline: none;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .accordion-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #47b2e4;\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n    padding-right: 10px;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .accordion-list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .accordion-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    padding: 10px 0 0 0;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .accordion-list[_ngcontent-%COMP%]   .icon-show[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .accordion-list[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%] {\r\n    color: #343a40;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .accordion-list[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]:hover {\r\n    color: #47b2e4;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .accordion-list[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]   .icon-show[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n\r\n.why-us[_ngcontent-%COMP%]   .accordion-list[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n@media (max-width: 1024px) {\r\n    .why-us[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .why-us[_ngcontent-%COMP%]   .accordion-list[_ngcontent-%COMP%] {\r\n      padding-left: 0;\r\n      padding-right: 0;\r\n    }\r\n  }\r\n\r\n@media (max-width: 992px) {\r\n    .why-us[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n      min-height: 400px;\r\n    }\r\n    .why-us[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n      padding-top: 30px;\r\n    }\r\n    .why-us[_ngcontent-%COMP%]   .accordion-list[_ngcontent-%COMP%] {\r\n      padding-bottom: 30px;\r\n    }\r\n  }\r\n\r\n@media (max-width: 575px) {\r\n    .why-us[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n      min-height: 200px;\r\n    }\r\n  }\r\n\r\n\r\n\r\n.skills[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-weight: 700;\r\n    font-size: 32px;\r\n    color: #37517e;\r\n    font-family: \"Poppins\", sans-serif;\r\n  }\r\n\r\n.skills[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n  }\r\n\r\n.skills[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding-bottom: 10px;\r\n  }\r\n\r\n.skills[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    padding-right: 4px;\r\n    color: #47b2e4;\r\n  }\r\n\r\n.skills[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n\r\n.skills[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    display: block;\r\n    background: none;\r\n  }\r\n\r\n.skills[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%] {\r\n    padding: 10px 0;\r\n    margin: 0 0 6px 0;\r\n    text-transform: uppercase;\r\n    display: block;\r\n    font-weight: 600;\r\n    font-family: \"Poppins\", sans-serif;\r\n    color: #37517e;\r\n  }\r\n\r\n.skills[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\r\n    float: right;\r\n    font-style: normal;\r\n  }\r\n\r\n.skills[_ngcontent-%COMP%]   .progress-bar-wrap[_ngcontent-%COMP%] {\r\n    background: #e8edf5;\r\n  }\r\n\r\n.skills[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\r\n    width: 1px;\r\n    height: 10px;\r\n    transition: .9s;\r\n    background-color: #4668a2;\r\n  }\r\n\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0px 0 25px 0 rgba(0, 0, 0, 0.1);\r\n    padding: 50px 30px;\r\n    transition: all ease-in-out 0.4s;\r\n    background: #fff;\r\n  }\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #47b2e4;\r\n    font-size: 36px;\r\n    transition: 0.3s;\r\n  }\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n    margin-bottom: 15px;\r\n    font-size: 24px;\r\n  }\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #37517e;\r\n    transition: ease-in-out 0.3s;\r\n  }\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 24px;\r\n    font-size: 14px;\r\n    margin-bottom: 0;\r\n  }\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-10px);\r\n  }\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #47b2e4;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n.cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-size: 28px;\r\n    font-weight: 700;\r\n  }\r\n\r\n.cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n  }\r\n\r\n.cta[_ngcontent-%COMP%]   .cta-btn[_ngcontent-%COMP%] {\r\n    font-family: \"Jost\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    display: inline-block;\r\n    padding: 12px 40px;\r\n    border-radius: 50px;\r\n    transition: 0.5s;\r\n    margin: 10px;\r\n    border: 2px solid #fff;\r\n    color: #fff;\r\n  }\r\n\r\n.cta[_ngcontent-%COMP%]   .cta-btn[_ngcontent-%COMP%]:hover {\r\n    background: #47b2e4;\r\n    border: 2px solid #47b2e4;\r\n  }\r\n\r\n@media (max-width: 1024px) {\r\n    .cta[_ngcontent-%COMP%] {\r\n      background-attachment: scroll;\r\n    }\r\n  }\r\n\r\n@media (min-width: 769px) {\r\n    .cta[_ngcontent-%COMP%]   .cta-btn-container[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: flex-end;\r\n    }\r\n  }\r\n\r\n\r\n\r\n.portfolio[_ngcontent-%COMP%]   #portfolio-flters[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n.portfolio[_ngcontent-%COMP%]   #portfolio-flters[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    margin: 10px 5px;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    line-height: 1;\r\n    color: #444444;\r\n    transition: all 0.3s;\r\n    padding: 8px 20px;\r\n    border-radius: 50px;\r\n    font-family: \"Poppins\", sans-serif;\r\n  }\r\n\r\n.portfolio[_ngcontent-%COMP%]   #portfolio-flters[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .portfolio[_ngcontent-%COMP%]   #portfolio-flters[_ngcontent-%COMP%]   li.filter-active[_ngcontent-%COMP%] {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n  }\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-img[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n  }\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: all 0.6s;\r\n  }\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    position: absolute;\r\n    left: 15px;\r\n    bottom: 0;\r\n    z-index: 3;\r\n    right: 15px;\r\n    transition: all 0.3s;\r\n    background: rgba(55, 81, 126, 0.8);\r\n    padding: 10px 15px;\r\n  }\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #f9fcfe;\r\n    font-size: 14px;\r\n    margin-bottom: 0;\r\n  }\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   .preview-link[_ngcontent-%COMP%], .portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   .details-link[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 40px;\r\n    font-size: 24px;\r\n    top: calc(50% - 18px);\r\n    color: #fff;\r\n    transition: 0.3s;\r\n  }\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   .preview-link[_ngcontent-%COMP%]:hover, .portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   .details-link[_ngcontent-%COMP%]:hover {\r\n    color: #47b2e4;\r\n  }\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   .details-link[_ngcontent-%COMP%] {\r\n    right: 10px;\r\n  }\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transform: scale(1.15);\r\n  }\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-info[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n  }\r\n\r\n\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\r\n    padding: 30px;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    transition: 0.5s;\r\n  }\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    width: 180px;\r\n    border-radius: 50%;\r\n  }\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: ease-in-out 0.3s;\r\n  }\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-10px);\r\n  }\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%] {\r\n    padding-left: 30px;\r\n  }\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-weight: 700;\r\n    margin-bottom: 5px;\r\n    font-size: 20px;\r\n    color: #37517e;\r\n  }\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 15px;\r\n    padding-bottom: 10px;\r\n    position: relative;\r\n    font-weight: 500;\r\n  }\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    display: block;\r\n    width: 50px;\r\n    height: 1px;\r\n    background: #cbd6e9;\r\n    bottom: 0;\r\n    left: 0;\r\n  }\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 10px 0 0 0;\r\n    font-size: 14px;\r\n  }\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\r\n    margin-top: 12px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    transition: ease-in-out 0.3s;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 50px;\r\n    width: 32px;\r\n    height: 32px;\r\n    background: #eff2f8;\r\n  }\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #37517e;\r\n    font-size: 16px;\r\n    margin: 0 2px;\r\n  }\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: #47b2e4;\r\n  }\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n  }\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\r\n    margin-left: 8px;\r\n  }\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n    padding-top: 40px;\r\n  }\r\n\r\n.pricing[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    padding: 60px 40px;\r\n    box-shadow: 0 3px 20px -2px rgba(20, 45, 100, 0.1);\r\n    background: #fff;\r\n    height: 100%;\r\n    border-top: 4px solid #fff;\r\n    border-radius: 5px;\r\n  }\r\n\r\n.pricing[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n    margin-bottom: 15px;\r\n    font-size: 20px;\r\n    color: #37517e;\r\n  }\r\n\r\n.pricing[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 48px;\r\n    color: #37517e;\r\n    font-weight: 400;\r\n    font-family: \"Jost\", sans-serif;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n.pricing[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n  }\r\n\r\n.pricing[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #47b2e4;\r\n    font-size: 18px;\r\n    display: block;\r\n  }\r\n\r\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding: 20px 0;\r\n    list-style: none;\r\n    color: #999;\r\n    text-align: left;\r\n    line-height: 20px;\r\n  }\r\n\r\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 10px 0 10px 30px;\r\n    position: relative;\r\n  }\r\n\r\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #28a745;\r\n    font-size: 24px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 6px;\r\n  }\r\n\r\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .na[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n  }\r\n\r\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .na[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n  }\r\n\r\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .na[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    text-decoration: line-through;\r\n  }\r\n\r\n.pricing[_ngcontent-%COMP%]   .buy-btn[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 12px 35px;\r\n    border-radius: 50px;\r\n    color: #47b2e4;\r\n    transition: none;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    font-family: \"Jost\", sans-serif;\r\n    transition: 0.3s;\r\n    border: 1px solid #47b2e4;\r\n  }\r\n\r\n.pricing[_ngcontent-%COMP%]   .buy-btn[_ngcontent-%COMP%]:hover {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n  }\r\n\r\n.pricing[_ngcontent-%COMP%]   .featured[_ngcontent-%COMP%] {\r\n    border-top-color: #47b2e4;\r\n  }\r\n\r\n.pricing[_ngcontent-%COMP%]   .featured[_ngcontent-%COMP%]   .buy-btn[_ngcontent-%COMP%] {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n  }\r\n\r\n.pricing[_ngcontent-%COMP%]   .featured[_ngcontent-%COMP%]   .buy-btn[_ngcontent-%COMP%]:hover {\r\n    background: #23a3df;\r\n  }\r\n\r\n@media (max-width: 992px) {\r\n    .pricing[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n      max-width: 60%;\r\n      margin: 0 auto 30px auto;\r\n    }\r\n  }\r\n\r\n@media (max-width: 767px) {\r\n    .pricing[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n      max-width: 80%;\r\n      margin: 0 auto 30px auto;\r\n    }\r\n  }\r\n\r\n@media (max-width: 420px) {\r\n    .pricing[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n      max-width: 100%;\r\n      margin: 0 auto 30px auto;\r\n    }\r\n  }\r\n\r\n\r\n\r\n.faq[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%] {\r\n    padding: 0 100px;\r\n  }\r\n\r\n.faq[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n\r\n.faq[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n  }\r\n\r\n.faq[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 4px;\r\n    position: relative;\r\n  }\r\n\r\n.faq[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: relative;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    font-weight: 500;\r\n    padding: 0 30px;\r\n    outline: none;\r\n  }\r\n\r\n.faq[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%]   .icon-help[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    position: absolute;\r\n    right: 0;\r\n    left: 20px;\r\n    color: #47b2e4;\r\n  }\r\n\r\n.faq[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%]   .icon-show[_ngcontent-%COMP%], .faq[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n\r\n.faq[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    padding: 10px 0 0 0;\r\n  }\r\n\r\n.faq[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%]   .icon-show[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n.faq[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%] {\r\n    color: #37517e;\r\n    transition: 0.3s;\r\n  }\r\n\r\n.faq[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]:hover {\r\n    color: #47b2e4;\r\n  }\r\n\r\n.faq[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]   .icon-show[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n\r\n.faq[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]   .icon-close[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n@media (max-width: 1200px) {\r\n    .faq[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%] {\r\n      padding: 0;\r\n    }\r\n  }\r\n\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\r\n    border-top: 3px solid #47b2e4;\r\n    border-bottom: 3px solid #47b2e4;\r\n    padding: 30px;\r\n    background: #fff;\r\n    width: 100%;\r\n    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #47b2e4;\r\n    float: left;\r\n    width: 44px;\r\n    height: 44px;\r\n    background: #e7f5fb;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 60px;\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    margin-bottom: 5px;\r\n    color: #37517e;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding: 0 0 10px 60px;\r\n    margin-bottom: 20px;\r\n    font-size: 14px;\r\n    color: #6182ba;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding-top: 5px;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\r\n    padding-left: 60px;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    background: #333;\r\n    color: #fff;\r\n    line-height: 1;\r\n    padding: 8px 0;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    width: 36px;\r\n    height: 36px;\r\n    transition: 0.3s;\r\n    margin-right: 10px;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    background: #47b2e4;\r\n    color: #fff;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border-top: 3px solid #47b2e4;\r\n    border-bottom: 3px solid #47b2e4;\r\n    padding: 30px;\r\n    background: #fff;\r\n    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    padding-bottom: 8px;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .validate[_ngcontent-%COMP%] {\r\n    display: none;\r\n    color: #EDEDEF;\r\n    margin: 0 0 15px 0;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\r\n    display: none;\r\n    color: #fff;\r\n    background:  #EDEDEF;\r\n    text-align: left;\r\n    padding: 15px;\r\n    font-weight: 600;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   br[_ngcontent-%COMP%]    + br[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .sent-message[_ngcontent-%COMP%] {\r\n    display: none;\r\n    color: #fff;\r\n    background: #18d26e;\r\n    text-align: center;\r\n    padding: 15px;\r\n    font-weight: 600;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\r\n    display: none;\r\n    background: #fff;\r\n    text-align: center;\r\n    padding: 15px;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n    width: 24px;\r\n    height: 24px;\r\n    margin: 0 10px -6px 0;\r\n    border: 3px solid #18d26e;\r\n    border-top-color: #eee;\r\n    animation: animate-loading 1s linear infinite;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n    font-size: 14px;\r\n    border-radius: 4px;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n    border-color: #47b2e4;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    height: 44px;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n    padding: 10px 12px;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n    background: #47b2e4;\r\n    border: 0;\r\n    padding: 12px 34px;\r\n    color: #fff;\r\n    transition: 0.4s;\r\n    border-radius: 50px;\r\n  }\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n    background: #209dd8;\r\n  }\r\n\r\n@keyframes animate-loading {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n\r\n\r\n.breadcrumbs[_ngcontent-%COMP%] {\r\n    padding: 15px 0;\r\n    background: #f3f5fa;\r\n    min-height: 40px;\r\n    margin-top: 72px;\r\n  }\r\n\r\n@media (max-width: 992px) {\r\n    .breadcrumbs[_ngcontent-%COMP%] {\r\n      margin-top: 68px;\r\n    }\r\n  }\r\n\r\n.breadcrumbs[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    color: #37517e;\r\n  }\r\n\r\n.breadcrumbs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    list-style: none;\r\n    padding: 0 0 10px 0;\r\n    margin: 0;\r\n    font-size: 14px;\r\n  }\r\n\r\n.breadcrumbs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\r\n    padding-left: 10px;\r\n  }\r\n\r\n.breadcrumbs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%]::before {\r\n    display: inline-block;\r\n    padding-right: 10px;\r\n    color: #4668a2;\r\n    content: \"/\";\r\n  }\r\n\r\n\r\n\r\n.portfolio-details[_ngcontent-%COMP%] {\r\n    padding-top: 40px;\r\n  }\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-details-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n  }\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-details-carousel[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-details-carousel[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%], .portfolio-details[_ngcontent-%COMP%]   .portfolio-details-carousel[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    text-align: left;\r\n  }\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-details-carousel[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin: 0 10px 0 0;\r\n    width: 12px;\r\n    height: 12px;\r\n    border-radius: 50%;\r\n    background-color: #ddd !important;\r\n  }\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-details-carousel[_ngcontent-%COMP%]   .owl-dot.active[_ngcontent-%COMP%] {\r\n    background-color: #47b2e4 !important;\r\n  }\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%] {\r\n    padding: 30px;\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: -70px;\r\n    background: #fff;\r\n    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\r\n    z-index: 2;\r\n  }\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    margin-bottom: 20px;\r\n    padding-bottom: 20px;\r\n    border-bottom: 1px solid #eee;\r\n  }\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n    font-size: 15px;\r\n  }\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n  }\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-description[_ngcontent-%COMP%] {\r\n    padding-top: 50px;\r\n  }\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding: 0 0 0 0;\r\n  }\r\n\r\n@media (max-width: 768px) {\r\n    .portfolio-details[_ngcontent-%COMP%]   .portfolio-description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n    .portfolio-details[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%] {\r\n      position: static;\r\n      margin-top: 30px;\r\n    }\r\n  }\r\n\r\n\r\n\r\n#footer[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    background: #37517e;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%] {\r\n    padding: 50px 0;\r\n    background: #f3f5fa;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    color: #444444;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    margin: 0 0 20px 0;\r\n    padding: 0;\r\n    line-height: 1;\r\n    font-weight: 600;\r\n    color: #37517e;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n    background: #fff;\r\n    padding: 6px 10px;\r\n    position: relative;\r\n    border-radius: 50px;\r\n    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.06);\r\n    text-align: left;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n    border: 0;\r\n    padding: 4px 8px;\r\n    width: calc(100% - 100px);\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    border: 0;\r\n    background: none;\r\n    font-size: 16px;\r\n    padding: 0 20px;\r\n    background: #47b2e4;\r\n    color: #fff;\r\n    transition: 0.3s;\r\n    border-radius: 50px;\r\n    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n    background: #209dd8;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\r\n    padding: 60px 0 30px 0;\r\n    background: #fff;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n    margin: 0 0 10px 0;\r\n    padding: 2px 0 2px 0;\r\n    line-height: 1;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    color: #37517e;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    margin-bottom: 0;\r\n    font-family: \"Jost\", sans-serif;\r\n    color: #5e5e5e;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    color: #37517e;\r\n    position: relative;\r\n    padding-bottom: 12px;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    padding-right: 2px;\r\n    color: #47b2e4;\r\n    font-size: 18px;\r\n    line-height: 1;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 10px 0;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\r\n    padding-top: 0;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #777777;\r\n    transition: 0.3s;\r\n    display: inline-block;\r\n    line-height: 1;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    color: #47b2e4;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    background: #47b2e4;\r\n    color: #fff;\r\n    line-height: 1;\r\n    padding: 8px 0;\r\n    margin-right: 4px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    width: 36px;\r\n    height: 36px;\r\n    transition: 0.3s;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: #209dd8;\r\n    color: #fff;\r\n    text-decoration: none;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    color: #fff;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .credits[_ngcontent-%COMP%] {\r\n    float: right;\r\n    font-size: 13px;\r\n  }\r\n\r\n#footer[_ngcontent-%COMP%]   .credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    transition: 0.3s;\r\n  }\r\n\r\n@media (max-width: 768px) {\r\n    #footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\r\n      padding-top: 20px;\r\n      padding-bottom: 20px;\r\n    }\r\n    #footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   .credits[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      float: none;\r\n    }\r\n    #footer[_ngcontent-%COMP%]   .credits[_ngcontent-%COMP%] {\r\n      padding-top: 4px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Q0FLQzs7QUFFRDs7K0RBRStEOztBQUMvRDtJQUNJLG9DQUFvQztJQUNwQyxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSwrQkFBK0I7RUFDakM7O0FBRUE7O2lFQUUrRDs7QUFDL0Q7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUVaLCtDQUErQztFQUNqRDs7QUFXQTtJQUNFO01BQ0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7RUFDRjs7QUFFQTs7aUVBRStEOztBQUMvRDtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7QUFFQTs7aUVBRStEOztBQUMvRDtJQUNFLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGlDQUFpQztFQUNuQzs7QUFFQTtJQUNFLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFFQTs7aUVBRStEOztBQUMvRCx1QkFBdUI7O0FBQ3ZCO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixvQ0FBb0M7RUFDdEM7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtEQUFrRDtJQUNsRCxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsU0FBUztJQUNULG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLE1BQU07SUFDTix1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsTUFBTTtJQUNOLFVBQVU7RUFDWjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7QUFFQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjtFQUNGOztBQUVBLHVCQUF1Qjs7QUFDdkI7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztFQUNiOztBQUVBO0lBQ0U7TUFDRSxrQkFBa0I7TUFDbEIsMEJBQTBCO0lBQzVCO0VBQ0Y7O0FBRUEsc0JBQXNCOztBQUN0QjtJQUNFLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixNQUFNO0lBQ04sT0FBTztJQUNQLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw0QkFBNEI7RUFDOUI7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBOztpRUFFK0Q7O0FBQy9EO0lBQ0UsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixtR0FBbUc7SUFDbkcsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxpRUFBaUU7RUFDbkU7O0FBRUE7SUFDRTtNQUNFLGFBQWE7TUFDYixrQkFBa0I7SUFDcEI7SUFDQTtNQUVFLGVBQWU7SUFDakI7SUFDQTtNQUNFLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsVUFBVTtJQUNaO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLGVBQWU7TUFDZixpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7QUFFQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxlQUFlO01BQ2YsNEJBQTRCO0lBQzlCO0lBQ0E7TUFDRSxlQUFlO01BQ2Ysd0JBQXdCO01BQ3hCLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsZUFBZTtNQUNmLFFBQVE7SUFDVjtFQUNGOztBQVdBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLDRCQUE0QjtJQUM5QjtFQUNGOztBQUVBOztpRUFFK0Q7O0FBQy9EO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7O2lFQUUrRDs7QUFDL0Q7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRjs7QUFFQTs7aUVBRStEOztBQUMvRDtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxjQUFjO0lBRWQscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjtFQUN2Qjs7QUFFQTs7aUVBRStEOztBQUMvRDtJQUNFLDJCQUEyQjtFQUM3Qjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixrQ0FBa0M7RUFDcEM7O0FBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOztBQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtFQUNSOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0U7TUFDRSxlQUFlO01BQ2YsZ0JBQWdCO0lBQ2xCO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxvQkFBb0I7SUFDdEI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsaUJBQWlCO0lBQ25CO0VBQ0Y7O0FBRUE7O2lFQUUrRDs7QUFDL0Q7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQ0FBa0M7RUFDcEM7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaOztBQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtFQUMzQjs7QUFFQTs7aUVBRStEOztBQUMvRDtJQUNFLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsY0FBYztJQUNkLDRCQUE0QjtFQUM5Qjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTs7aUVBRStEOztBQUMvRDs7OztLQUlHOztBQUVIO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsV0FBVztFQUNiOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFO01BQ0UsNkJBQTZCO0lBQy9CO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIseUJBQXlCO0lBQzNCO0VBQ0Y7O0FBRUE7O2lFQUUrRDs7QUFDL0Q7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtDQUFrQztFQUNwQzs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0FBRUE7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLFVBQVU7RUFDWjs7QUFFQTs7aUVBRStEOztBQUMvRDtJQUNFLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSw0QkFBNEI7RUFDOUI7O0FBRUE7SUFDRSw0QkFBNEI7RUFDOUI7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxPQUFPO0VBQ1Q7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtFQUM3Qjs7QUFFQTtJQUNFLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7RUFDZjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFFQTs7aUVBRStEOztBQUMvRDtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixrREFBa0Q7SUFDbEQsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtFQUNWOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UsNkJBQTZCO0VBQy9COztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRTtNQUNFLGNBQWM7TUFDZCx3QkFBd0I7SUFDMUI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsY0FBYztNQUNkLHdCQUF3QjtJQUMxQjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxlQUFlO01BQ2Ysd0JBQXdCO0lBQzFCO0VBQ0Y7O0FBRUE7O2lFQUUrRDs7QUFDL0Q7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7RUFDZjs7QUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtFQUNSOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7QUFFQTs7aUVBRStEOztBQUMvRDtJQUNFLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUNBQXlDO0VBQzNDOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDBDQUEwQztFQUM1Qzs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFFdEIsNkNBQTZDO0VBQy9DOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBV0E7SUFDRTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0Y7O0FBRUE7O2lFQUUrRDs7QUFDL0Q7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRTtNQUNFLGdCQUFnQjtJQUNsQjtFQUNGOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxlQUFlO0VBQ2pCOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtFQUNkOztBQUVBOztpRUFFK0Q7O0FBQy9EO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7QUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlDQUFpQztFQUNuQzs7QUFFQTtJQUNFLG9DQUFvQztFQUN0Qzs7QUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLFVBQVU7RUFDWjs7QUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiw2QkFBNkI7RUFDL0I7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRTtNQUNFLFdBQVc7SUFDYjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLGdCQUFnQjtJQUNsQjtFQUNGOztBQUVBOztpRUFFK0Q7O0FBQy9EO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsU0FBUztJQUNULGdCQUFnQjtJQUNoQix5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsU0FBUztJQUNULGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiwyQ0FBMkM7RUFDN0M7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztFQUNYOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsb0JBQW9CO0lBQ3RCO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsV0FBVztJQUNiO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuKiBUZW1wbGF0ZSBOYW1lOiBBcnNoYSAtIHYyLjMuMVxyXG4qIFRlbXBsYXRlIFVSTDogaHR0cHM6Ly9ib290c3RyYXBtYWRlLmNvbS9hcnNoYS1mcmVlLWJvb3RzdHJhcC1odG1sLXRlbXBsYXRlLWNvcnBvcmF0ZS9cclxuKiBBdXRob3I6IEJvb3RzdHJhcE1hZGUuY29tXHJcbiogTGljZW5zZTogaHR0cHM6Ly9ib290c3RyYXBtYWRlLmNvbS9saWNlbnNlL1xyXG4qL1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4jIEdlbmVyYWxcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgY29sb3I6ICM0N2IyZTQ7XHJcbiAgfVxyXG4gIFxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICM3M2M1ZWI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSm9zdFwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgIyBQcmVsb2FkZXJcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI3ByZWxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6ICMzNzUxN2U7XHJcbiAgfVxyXG4gIFxyXG4gICNwcmVsb2FkZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMzBweCk7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDMwcHgpO1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgIzM3NTE3ZTtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS1wcmVsb2FkZXIgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlLXByZWxvYWRlciAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXByZWxvYWRlciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZS1wcmVsb2FkZXIge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgIyBCYWNrIHRvIHRvcCBidXR0b25cclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLmJhY2stdG8tdG9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gIH1cclxuICBcclxuICAuYmFjay10by10b3AgaSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzQ3YjJlNDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrLXRvLXRvcCBpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMDlkZDg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICMgSGVhZGVyXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICNoZWFkZXIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICB6LWluZGV4OiA5OTc7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNoZWFkZXIuaGVhZGVyLXNjcm9sbGVkLCAjaGVhZGVyLmhlYWRlci1pbm5lci1wYWdlcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA1OCwgOTAsIDAuOSk7XHJcbiAgfVxyXG4gIFxyXG4gICNoZWFkZXIgLmxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICAjaGVhZGVyIC5sb2dvIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gICNoZWFkZXIgLmxvZ28gaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAjIE5hdmlnYXRpb24gTWVudVxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAvKiBEZXNrdG9wIE5hdmlnYXRpb24gKi9cclxuICAubmF2LW1lbnUgdWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtbWVudSA+IHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtbWVudSA+IHVsID4gbGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDI4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtbWVudSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAubmF2LW1lbnUgYTpob3ZlciwgLm5hdi1tZW51IC5hY3RpdmUgPiBhLCAubmF2LW1lbnUgbGk6aG92ZXIgPiBhIHtcclxuICAgIGNvbG9yOiAjNDdiMmU0O1xyXG4gIH1cclxuICBcclxuICAubmF2LW1lbnUgLmRyb3AtZG93biB1bCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE0cHg7XHJcbiAgICB0b3A6IGNhbGMoMTAwJSArIDMwcHgpO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCByZ2JhKDEyNywgMTM3LCAxNjEsIDAuMjUpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLm5hdi1tZW51IC5kcm9wLWRvd246aG92ZXIgPiB1bCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdi1tZW51IC5kcm9wLWRvd24gbGkge1xyXG4gICAgbWluLXdpZHRoOiAxODBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdi1tZW51IC5kcm9wLWRvd24gdWwgYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBjb2xvcjogIzBjM2M1MztcclxuICB9XHJcbiAgXHJcbiAgLm5hdi1tZW51IC5kcm9wLWRvd24gdWwgYTpob3ZlciwgLm5hdi1tZW51IC5kcm9wLWRvd24gdWwgLmFjdGl2ZSA+IGEsIC5uYXYtbWVudSAuZHJvcC1kb3duIHVsIGxpOmhvdmVyID4gYSB7XHJcbiAgICBjb2xvcjogIzQ3YjJlNDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdi1tZW51IC5kcm9wLWRvd24gPiBhOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxlYTk5XCI7XHJcbiAgICBmb250LWZhbWlseTogSWNvRm9udDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIH1cclxuICBcclxuICAubmF2LW1lbnUgLmRyb3AtZG93biAuZHJvcC1kb3duIHVsIHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gIH1cclxuICBcclxuICAubmF2LW1lbnUgLmRyb3AtZG93biAuZHJvcC1kb3duOmhvdmVyID4gdWwge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtbWVudSAuZHJvcC1kb3duIC5kcm9wLWRvd24gPiBhIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtbWVudSAuZHJvcC1kb3duIC5kcm9wLWRvd24gPiBhOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxlYWEwXCI7XHJcbiAgICBmb250LWZhbWlseTogSWNvRm9udDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XHJcbiAgICAubmF2LW1lbnUgLmRyb3AtZG93biAuZHJvcC1kb3duIHVsIHtcclxuICAgICAgbGVmdDogLTkwJTtcclxuICAgIH1cclxuICAgIC5uYXYtbWVudSAuZHJvcC1kb3duIC5kcm9wLWRvd246aG92ZXIgPiB1bCB7XHJcbiAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgfVxyXG4gICAgLm5hdi1tZW51IC5kcm9wLWRvd24gLmRyb3AtZG93biA+IGE6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlxcZWE5ZFwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBHZXQgU3RhcnRldCBCdXR0b24gKi9cclxuICAuZ2V0LXN0YXJ0ZWQtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDI1cHggN3B4IDI1cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0N2IyZTQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuICAuZ2V0LXN0YXJ0ZWQtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzMWE5ZTE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZ2V0LXN0YXJ0ZWQtYnRuIHtcclxuICAgICAgbWFyZ2luOiAwIDQ4cHggMCAwO1xyXG4gICAgICBwYWRkaW5nOiA2cHggMjBweCA3cHggMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogTW9iaWxlIE5hdmlnYXRpb24gKi9cclxuICAubW9iaWxlLW5hdi10b2dnbGUge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB6LWluZGV4OiA5OTk4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLm1vYmlsZS1uYXYtdG9nZ2xlIGkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2JpbGUtbmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuMnM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgLm1vYmlsZS1uYXYgKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLm1vYmlsZS1uYXYgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiAjMzc1MTdlO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2JpbGUtbmF2IGE6aG92ZXIsIC5tb2JpbGUtbmF2IC5hY3RpdmUgPiBhLCAubW9iaWxlLW5hdiBsaTpob3ZlciA+IGEge1xyXG4gICAgY29sb3I6ICM0N2IyZTQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2JpbGUtbmF2IC5kcm9wLWRvd24gPiBhOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxlYTk5XCI7XHJcbiAgICBmb250LWZhbWlseTogSWNvRm9udDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAubW9iaWxlLW5hdiAuYWN0aXZlLmRyb3AtZG93biA+IGE6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcXGVhYTFcIjtcclxuICB9XHJcbiAgXHJcbiAgLm1vYmlsZS1uYXYgLmRyb3AtZG93biA+IGEge1xyXG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcclxuICB9XHJcbiAgXHJcbiAgLm1vYmlsZS1uYXYgLmRyb3AtZG93biB1bCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLm1vYmlsZS1uYXYgLmRyb3AtZG93biBsaSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2JpbGUtbmF2LW92ZXJseSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTc7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg0MCwgNTgsIDkwLCAwLjYpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjJzO1xyXG4gIH1cclxuICBcclxuICAubW9iaWxlLW5hdi1hY3RpdmUge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLm1vYmlsZS1uYXYtYWN0aXZlIC5tb2JpbGUtbmF2IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICBcclxuICAubW9iaWxlLW5hdi1hY3RpdmUgLm1vYmlsZS1uYXYtdG9nZ2xlIGkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAjIEhlcm8gU2VjdGlvblxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAjaGVybyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMzQsMjM5LDI0Mik7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzQsMjM5LDI0MiwxKSAwJSwgcmdiYSgyNDUsMjI3LDIyNywwLjU0MTA1MzkyMTU2ODYyNzQpIDg5JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxuICBcclxuICAjaGVybyAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiA3MnB4O1xyXG4gIH1cclxuICBcclxuICAjaGVybyBoMSB7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbiAgICBjb2xvcjogcmdiKDQzLCA1MiwgNTQpO1xyXG4gIH1cclxuICBcclxuICAjaGVybyBoMiB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbiAgXHJcbiAgI2hlcm8gLmJ0bi1nZXQtc3RhcnRlZCB7XHJcbiAgICBmb250LWZhbWlseTogXCJKb3N0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMjhweCAxMXB4IDI4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzQ3YjJlNDtcclxuICB9XHJcbiAgXHJcbiAgI2hlcm8gLmJ0bi1nZXQtc3RhcnRlZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjA5ZGQ4O1xyXG4gIH1cclxuICBcclxuICAjaGVybyAuYnRuLXdhdGNoLXZpZGVvIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMCA4cHggNDBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwIDI1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgI2hlcm8gLmJ0bi13YXRjaC12aWRlbyBpIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogN3B4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICB9XHJcbiAgXHJcbiAgI2hlcm8gLmJ0bi13YXRjaC12aWRlbzpob3ZlciBpIHtcclxuICAgIGNvbG9yOiAjNDdiMmU0O1xyXG4gIH1cclxuICBcclxuICAjaGVybyAuYW5pbWF0ZWQge1xyXG4gICAgYW5pbWF0aW9uOiB1cC1kb3duIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlIGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgI2hlcm8ge1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAjaGVybyAuYW5pbWF0ZWQge1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcclxuICAgICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgI2hlcm8gLmhlcm8taW1nIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgI2hlcm8gLmhlcm8taW1nIGltZyB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgI2hlcm8gaDEge1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG4gICAgI2hlcm8gaDIge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgI2hlcm8gLmhlcm8taW1nIGltZyB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgI2hlcm8gLmhlcm8taW1nIGltZyB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAjaGVybyAuYnRuLWdldC1zdGFydGVkIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDI0cHggMTFweCAyNHB4O1xyXG4gICAgfVxyXG4gICAgI2hlcm8gLmJ0bi13YXRjaC12aWRlbyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgcGFkZGluZzogMTBweCAwIDhweCA0MHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgICNoZXJvIC5idG4td2F0Y2gtdmlkZW8gaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgdG9wOiA3cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyB1cC1kb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgdXAtZG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgIyBTZWN0aW9ucyBHZW5lcmFsXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogNjBweCAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLnNlY3Rpb24tYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjVmYTtcclxuICB9XHJcbiAgXHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWN0aW9uLXRpdGxlIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiAjMzc1MTdlO1xyXG4gIH1cclxuICBcclxuICAuc2VjdGlvbi10aXRsZSBoMjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBib3R0b206IDFweDtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNjBweCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWN0aW9uLXRpdGxlIGgyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICM0N2IyZTQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDIwcHgpO1xyXG4gIH1cclxuICBcclxuICAuc2VjdGlvbi10aXRsZSBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAjIENsaWVuc1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAuY2xpZW5zIHtcclxuICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNsaWVucyBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiA0NSU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbGllbnMgaW1nOmhvdmVyIHtcclxuICAgIGZpbHRlcjogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY2xpZW5zIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogNDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgIyBBYm91dCBVc1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAuYWJvdXQgLmNvbnRlbnQgaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgLmFib3V0IC5jb250ZW50IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICAuYWJvdXQgLmNvbnRlbnQgdWwgbGkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuYWJvdXQgLmNvbnRlbnQgdWwgbGkgKyBsaSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuYWJvdXQgLmNvbnRlbnQgdWwgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzQ3YjJlNDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIH1cclxuICBcclxuICAuYWJvdXQgLmNvbnRlbnQgcDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5hYm91dCAuY29udGVudCAuYnRuLWxlYXJuLW1vcmUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDMycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBjb2xvcjogIzQ3YjJlNDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzQ3YjJlNDtcclxuICB9XHJcbiAgXHJcbiAgLmFib3V0IC5jb250ZW50IC5idG4tbGVhcm4tbW9yZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDdiMmU0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAjIFdoeSBVc1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAud2h5LXVzIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDYwcHggMTAwcHggMCAxMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLndoeS11cyAuY29udGVudCBoMyB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgY29sb3I6ICMzNzUxN2U7XHJcbiAgfVxyXG4gIFxyXG4gIC53aHktdXMgLmNvbnRlbnQgaDQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLndoeS11cyAuY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjODQ4NDg0O1xyXG4gIH1cclxuICBcclxuICAud2h5LXVzIC5pbWcge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC53aHktdXMgLmFjY29yZGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDAgMTAwcHggNjBweCAxMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLndoeS11cyAuYWNjb3JkaW9uLWxpc3QgdWwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53aHktdXMgLmFjY29yZGlvbi1saXN0IGxpICsgbGkge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLndoeS11cyAuYWNjb3JkaW9uLWxpc3QgbGkge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53aHktdXMgLmFjY29yZGlvbi1saXN0IGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLndoeS11cyAuYWNjb3JkaW9uLWxpc3Qgc3BhbiB7XHJcbiAgICBjb2xvcjogIzQ3YjJlNDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAud2h5LXVzIC5hY2NvcmRpb24tbGlzdCBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICBcclxuICAud2h5LXVzIC5hY2NvcmRpb24tbGlzdCBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xyXG4gIH1cclxuICBcclxuICAud2h5LXVzIC5hY2NvcmRpb24tbGlzdCAuaWNvbi1zaG93IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53aHktdXMgLmFjY29yZGlvbi1saXN0IGEuY29sbGFwc2VkIHtcclxuICAgIGNvbG9yOiAjMzQzYTQwO1xyXG4gIH1cclxuICBcclxuICAud2h5LXVzIC5hY2NvcmRpb24tbGlzdCBhLmNvbGxhcHNlZDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzQ3YjJlNDtcclxuICB9XHJcbiAgXHJcbiAgLndoeS11cyAuYWNjb3JkaW9uLWxpc3QgYS5jb2xsYXBzZWQgLmljb24tc2hvdyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC53aHktdXMgLmFjY29yZGlvbi1saXN0IGEuY29sbGFwc2VkIC5pY29uLWNsb3NlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC53aHktdXMgLmNvbnRlbnQsIC53aHktdXMgLmFjY29yZGlvbi1saXN0IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC53aHktdXMgLmltZyB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgLndoeS11cyAuY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLndoeS11cyAuYWNjb3JkaW9uLWxpc3Qge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAud2h5LXVzIC5pbWcge1xyXG4gICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICMgU2tpbGxzXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC5za2lsbHMgLmNvbnRlbnQgaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjMzc1MTdlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAuc2tpbGxzIC5jb250ZW50IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICAuc2tpbGxzIC5jb250ZW50IHVsIGxpIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2tpbGxzIC5jb250ZW50IHVsIGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gICAgY29sb3I6ICM0N2IyZTQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5za2lsbHMgLmNvbnRlbnQgcDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5za2lsbHMgLnByb2dyZXNzIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnNraWxscyAucHJvZ3Jlc3MgLnNraWxsIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIG1hcmdpbjogMCAwIDZweCAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMzc1MTdlO1xyXG4gIH1cclxuICBcclxuICAuc2tpbGxzIC5wcm9ncmVzcyAuc2tpbGwgLnZhbCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG4gIFxyXG4gIC5za2lsbHMgLnByb2dyZXNzLWJhci13cmFwIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOGVkZjU7XHJcbiAgfVxyXG4gIFxyXG4gIC5za2lsbHMgLnByb2dyZXNzLWJhciB7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjlzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NjhhMjtcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICMgU2VydmljZXNcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLnNlcnZpY2VzIC5pY29uLWJveCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgcGFkZGluZzogNTBweCAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNHM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuc2VydmljZXMgLmljb24tYm94IC5pY29uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZXJ2aWNlcyAuaWNvbi1ib3ggLmljb24gaSB7XHJcbiAgICBjb2xvcjogIzQ3YjJlNDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZXJ2aWNlcyAuaWNvbi1ib3ggaDQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZXJ2aWNlcyAuaWNvbi1ib3ggaDQgYSB7XHJcbiAgICBjb2xvcjogIzM3NTE3ZTtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZXJ2aWNlcyAuaWNvbi1ib3ggcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZXJ2aWNlcyAuaWNvbi1ib3g6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgLnNlcnZpY2VzIC5pY29uLWJveDpob3ZlciBoNCBhIHtcclxuICAgIGNvbG9yOiAjNDdiMmU0O1xyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgIyBDdGFcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLyogLmN0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg0MCwgNTgsIDkwLCAwLjkpLCByZ2JhKDQwLCA1OCwgOTAsIDAuOSkpLCB1cmwoXCIuLi9pbWcvY3RhLWJnLmpwZ1wiKSBmaXhlZCBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmc6IDEyMHB4IDA7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIC5jdGEgaDMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICBcclxuICAuY3RhIHAge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdGEgLmN0YS1idG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSm9zdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmN0YSAuY3RhLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDdiMmU0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzQ3YjJlNDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgLmN0YSB7XHJcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgIC5jdGEgLmN0YS1idG4tY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICMgUG9ydGZvbGlvXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC5wb3J0Zm9saW8gI3BvcnRmb2xpby1mbHRlcnMge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3J0Zm9saW8gI3BvcnRmb2xpby1mbHRlcnMgbGkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3J0Zm9saW8gI3BvcnRmb2xpby1mbHRlcnMgbGk6aG92ZXIsIC5wb3J0Zm9saW8gI3BvcnRmb2xpby1mbHRlcnMgbGkuZmlsdGVyLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDdiMmU0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIC5wb3J0Zm9saW8taW1nIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIC5wb3J0Zm9saW8taW1nIGltZyB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcclxuICB9XHJcbiAgXHJcbiAgLnBvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1pbmZvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDU1LCA4MSwgMTI2LCAwLjgpO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIH1cclxuICBcclxuICAucG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSAucG9ydGZvbGlvLWluZm8gaDQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIC5wb3J0Zm9saW8taW5mbyBwIHtcclxuICAgIGNvbG9yOiAjZjlmY2ZlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgLnBvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1pbmZvIC5wcmV2aWV3LWxpbmssIC5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIC5wb3J0Zm9saW8taW5mbyAuZGV0YWlscy1saW5rIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtIDE4cHgpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIH1cclxuICBcclxuICAucG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSAucG9ydGZvbGlvLWluZm8gLnByZXZpZXctbGluazpob3ZlciwgLnBvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1pbmZvIC5kZXRhaWxzLWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6ICM0N2IyZTQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIC5wb3J0Zm9saW8taW5mbyAuZGV0YWlscy1saW5rIHtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAucG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbTpob3ZlciAucG9ydGZvbGlvLWltZyBpbWcge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcclxuICB9XHJcbiAgXHJcbiAgLnBvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW06aG92ZXIgLnBvcnRmb2xpby1pbmZvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAjIFRlYW1cclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLnRlYW0gLm1lbWJlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIH1cclxuICBcclxuICAudGVhbSAubWVtYmVyIC5waWMge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRlYW0gLm1lbWJlciAucGljIGltZyB7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xyXG4gIH1cclxuICBcclxuICAudGVhbSAubWVtYmVyOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZWFtIC5tZW1iZXIgLm1lbWJlci1pbmZvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRlYW0gLm1lbWJlciBoNCB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMzNzUxN2U7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZWFtIC5tZW1iZXIgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgLnRlYW0gLm1lbWJlciBzcGFuOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICNjYmQ2ZTk7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAudGVhbSAubWVtYmVyIHAge1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAudGVhbSAubWVtYmVyIC5zb2NpYWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuICBcclxuICAudGVhbSAubWVtYmVyIC5zb2NpYWwgYSB7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZmYyZjg7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZWFtIC5tZW1iZXIgLnNvY2lhbCBhIGkge1xyXG4gICAgY29sb3I6ICMzNzUxN2U7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gIH1cclxuICBcclxuICAudGVhbSAubWVtYmVyIC5zb2NpYWwgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDdiMmU0O1xyXG4gIH1cclxuICBcclxuICAudGVhbSAubWVtYmVyIC5zb2NpYWwgYTpob3ZlciBpIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAudGVhbSAubWVtYmVyIC5zb2NpYWwgYSArIGEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICMgUHJpY2luZ1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAucHJpY2luZyAucm93IHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAucHJpY2luZyAuYm94IHtcclxuICAgIHBhZGRpbmc6IDYwcHggNDBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDIwcHggLTJweCByZ2JhKDIwLCA0NSwgMTAwLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBcclxuICAucHJpY2luZyBoMyB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMzc1MTdlO1xyXG4gIH1cclxuICBcclxuICAucHJpY2luZyBoNCB7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBjb2xvcjogIzM3NTE3ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogXCJKb3N0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAucHJpY2luZyBoNCBzdXAge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIH1cclxuICBcclxuICAucHJpY2luZyBoNCBzcGFuIHtcclxuICAgIGNvbG9yOiAjNDdiMmU0O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmljaW5nIHVsIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnByaWNpbmcgdWwgbGkge1xyXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLnByaWNpbmcgdWwgaSB7XHJcbiAgICBjb2xvcjogIzI4YTc0NTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDZweDtcclxuICB9XHJcbiAgXHJcbiAgLnByaWNpbmcgdWwgLm5hIHtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gIH1cclxuICBcclxuICAucHJpY2luZyB1bCAubmEgaSB7XHJcbiAgICBjb2xvcjogI2NjYztcclxuICB9XHJcbiAgXHJcbiAgLnByaWNpbmcgdWwgLm5hIHNwYW4ge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmljaW5nIC5idXktYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEycHggMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjb2xvcjogIzQ3YjJlNDtcclxuICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSm9zdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0N2IyZTQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmljaW5nIC5idXktYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0N2IyZTQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLnByaWNpbmcgLmZlYXR1cmVkIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICM0N2IyZTQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmljaW5nIC5mZWF0dXJlZCAuYnV5LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDdiMmU0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmljaW5nIC5mZWF0dXJlZCAuYnV5LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjNhM2RmO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5wcmljaW5nIC5ib3gge1xyXG4gICAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG8gMzBweCBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5wcmljaW5nIC5ib3gge1xyXG4gICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG8gMzBweCBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgIC5wcmljaW5nIC5ib3gge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvIDMwcHggYXV0bztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICMgRnJlcXVlbnRseSBBc2tlZCBRdWVzdGlvbnNcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLmZhcSAuZmFxLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMCAxMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZhcSAuZmFxLWxpc3QgdWwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYXEgLmZhcS1saXN0IGxpICsgbGkge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmZhcSAuZmFxLWxpc3QgbGkge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYXEgLmZhcS1saXN0IGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZmFxIC5mYXEtbGlzdCAuaWNvbi1oZWxwIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIGNvbG9yOiAjNDdiMmU0O1xyXG4gIH1cclxuICBcclxuICAuZmFxIC5mYXEtbGlzdCAuaWNvbi1zaG93LCAuZmFxIC5mYXEtbGlzdCAuaWNvbi1jbG9zZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmZhcSAuZmFxLWxpc3QgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAwIDAgMDtcclxuICB9XHJcbiAgXHJcbiAgLmZhcSAuZmFxLWxpc3QgLmljb24tc2hvdyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZmFxIC5mYXEtbGlzdCBhLmNvbGxhcHNlZCB7XHJcbiAgICBjb2xvcjogIzM3NTE3ZTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYXEgLmZhcS1saXN0IGEuY29sbGFwc2VkOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNDdiMmU0O1xyXG4gIH1cclxuICBcclxuICAuZmFxIC5mYXEtbGlzdCBhLmNvbGxhcHNlZCAuaWNvbi1zaG93IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmZhcSAuZmFxLWxpc3QgYS5jb2xsYXBzZWQgLmljb24tY2xvc2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmZhcSAuZmFxLWxpc3Qge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgIyBDb250YWN0XHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC5jb250YWN0IC5pbmZvIHtcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjNDdiMmU0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM0N2IyZTQ7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDI0cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0IC5pbmZvIGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM0N2IyZTQ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZjVmYjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0IC5pbmZvIGg0IHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDYwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgY29sb3I6ICMzNzUxN2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0IC5pbmZvIHAge1xyXG4gICAgcGFkZGluZzogMCAwIDEwcHggNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzYxODJiYTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QgLmluZm8gLmVtYWlsIHAge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QgLmluZm8gLnNvY2lhbC1saW5rcyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0IC5pbmZvIC5zb2NpYWwtbGlua3MgYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdCAuaW5mbyAuc29jaWFsLWxpbmtzIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzQ3YjJlNDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdCAuaW5mbyAuZW1haWw6aG92ZXIgaSwgLmNvbnRhY3QgLmluZm8gLmFkZHJlc3M6aG92ZXIgaSwgLmNvbnRhY3QgLmluZm8gLnBob25lOmhvdmVyIGkge1xyXG4gICAgYmFja2dyb3VuZDogIzQ3YjJlNDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdCAucGhwLWVtYWlsLWZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzQ3YjJlNDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNDdiMmU0O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjRweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0IC5waHAtZW1haWwtZm9ybSAuZm9ybS1ncm91cCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdCAucGhwLWVtYWlsLWZvcm0gLnZhbGlkYXRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBjb2xvcjogI0VERURFRjtcclxuICAgIG1hcmdpbjogMCAwIDE1cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0IC5waHAtZW1haWwtZm9ybSAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAgI0VERURFRjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QgLnBocC1lbWFpbC1mb3JtIC5lcnJvci1tZXNzYWdlIGJyICsgYnIge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QgLnBocC1lbWFpbC1mb3JtIC5zZW50LW1lc3NhZ2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzE4ZDI2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdCAucGhwLWVtYWlsLWZvcm0gLmxvYWRpbmcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdCAucGhwLWVtYWlsLWZvcm0gLmxvYWRpbmc6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbjogMCAxMHB4IC02cHggMDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxOGQyNmU7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZWVlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGUtbG9hZGluZyAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGUtbG9hZGluZyAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0IC5waHAtZW1haWwtZm9ybSBpbnB1dCwgLmNvbnRhY3QgLnBocC1lbWFpbC1mb3JtIHRleHRhcmVhIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdCAucGhwLWVtYWlsLWZvcm0gaW5wdXQ6Zm9jdXMsIC5jb250YWN0IC5waHAtZW1haWwtZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICM0N2IyZTQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0IC5waHAtZW1haWwtZm9ybSBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0IC5waHAtZW1haWwtZm9ybSB0ZXh0YXJlYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0IC5waHAtZW1haWwtZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDdiMmU0O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMTJweCAzNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QgLnBocC1lbWFpbC1mb3JtIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMDlkZDg7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLWxvYWRpbmcge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGFuaW1hdGUtbG9hZGluZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAjIEJyZWFkY3J1bWJzXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC5icmVhZGNydW1icyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmNWZhO1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDcycHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmJyZWFkY3J1bWJzIHtcclxuICAgICAgbWFyZ2luLXRvcDogNjhweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJyZWFkY3J1bWJzIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzM3NTE3ZTtcclxuICB9XHJcbiAgXHJcbiAgLmJyZWFkY3J1bWJzIG9sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMCAwIDEwcHggMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLmJyZWFkY3J1bWJzIG9sIGxpICsgbGkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuYnJlYWRjcnVtYnMgb2wgbGkgKyBsaTo6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBjb2xvcjogIzQ2NjhhMjtcclxuICAgIGNvbnRlbnQ6IFwiL1wiO1xyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgIyBQb3J0Zm9saW8gRGV0YWlsc1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAucG9ydGZvbGlvLWRldGFpbHMge1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3J0Zm9saW8tZGV0YWlscyAucG9ydGZvbGlvLWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLnBvcnRmb2xpby1kZXRhaWxzIC5wb3J0Zm9saW8tZGV0YWlscy1jYXJvdXNlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1kZXRhaWxzLWNhcm91c2VsIC5vd2wtbmF2LCAucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1kZXRhaWxzLWNhcm91c2VsIC5vd2wtZG90cyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1kZXRhaWxzLWNhcm91c2VsIC5vd2wtZG90IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1kZXRhaWxzLWNhcm91c2VsIC5vd2wtZG90LmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiMmU0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3J0Zm9saW8tZGV0YWlscyAucG9ydGZvbGlvLWluZm8ge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAtNzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgXHJcbiAgLnBvcnRmb2xpby1kZXRhaWxzIC5wb3J0Zm9saW8taW5mbyBoMyB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3J0Zm9saW8tZGV0YWlscyAucG9ydGZvbGlvLWluZm8gdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3J0Zm9saW8tZGV0YWlscyAucG9ydGZvbGlvLWluZm8gdWwgbGkgKyBsaSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1kZXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBvcnRmb2xpby1kZXRhaWxzIC5wb3J0Zm9saW8tZGVzY3JpcHRpb24gaDIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1kZXNjcmlwdGlvbiBwIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnBvcnRmb2xpby1kZXRhaWxzIC5wb3J0Zm9saW8tZGVzY3JpcHRpb24gaDIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5wb3J0Zm9saW8tZGV0YWlscyAucG9ydGZvbGlvLWluZm8ge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgIyBGb290ZXJcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI2Zvb3RlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzc1MTdlO1xyXG4gIH1cclxuICBcclxuICAjZm9vdGVyIC5mb290ZXItbmV3c2xldHRlciB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmNWZhO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgfVxyXG4gIFxyXG4gICNmb290ZXIgLmZvb3Rlci1uZXdzbGV0dGVyIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzM3NTE3ZTtcclxuICB9XHJcbiAgXHJcbiAgI2Zvb3RlciAuZm9vdGVyLW5ld3NsZXR0ZXIgZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgI2Zvb3RlciAuZm9vdGVyLW5ld3NsZXR0ZXIgZm9ybSBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgfVxyXG4gIFxyXG4gICNmb290ZXIgLmZvb3Rlci1uZXdzbGV0dGVyIGZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDdiMmU0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gICNmb290ZXIgLmZvb3Rlci1uZXdzbGV0dGVyIGZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjA5ZGQ4O1xyXG4gIH1cclxuICBcclxuICAjZm9vdGVyIC5mb290ZXItdG9wIHtcclxuICAgIHBhZGRpbmc6IDYwcHggMCAzMHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAjZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItY29udGFjdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAjZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItY29udGFjdCBoMyB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgICBwYWRkaW5nOiAycHggMCAycHggMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzM3NTE3ZTtcclxuICB9XHJcbiAgXHJcbiAgI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWNvbnRhY3QgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LWZhbWlseTogXCJKb3N0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzVlNWU1ZTtcclxuICB9XHJcbiAgXHJcbiAgI2Zvb3RlciAuZm9vdGVyLXRvcCBoNCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMzc1MTdlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gICNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAjZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB1bCBpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICAgIGNvbG9yOiAjNDdiMmU0O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgfVxyXG4gIFxyXG4gICNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB1bCBsaSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gIH1cclxuICBcclxuICAjZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgYSB7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcbiAgXHJcbiAgI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM0N2IyZTQ7XHJcbiAgfVxyXG4gIFxyXG4gICNmb290ZXIgLmZvb3Rlci10b3AgLnNvY2lhbC1saW5rcyBhIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICM0N2IyZTQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICB9XHJcbiAgXHJcbiAgI2Zvb3RlciAuZm9vdGVyLXRvcCAuc29jaWFsLWxpbmtzIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzIwOWRkODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAjZm9vdGVyIC5mb290ZXItYm90dG9tIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgI2Zvb3RlciAuY29weXJpZ2h0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAjZm9vdGVyIC5jcmVkaXRzIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgXHJcbiAgI2Zvb3RlciAuY3JlZGl0cyBhIHtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgI2Zvb3RlciAuZm9vdGVyLWJvdHRvbSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgICNmb290ZXIgLmNvcHlyaWdodCwgI2Zvb3RlciAuY3JlZGl0cyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAjZm9vdGVyIC5jcmVkaXRzIHtcclxuICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ "JfTL":
/*!***********************************************************************!*\
  !*** ./src/app/components/promedio-movil/promedio-movil.component.ts ***!
  \***********************************************************************/
/*! exports provided: PromedioMovilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromedioMovilComponent", function() { return PromedioMovilComponent; });
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/global */ "p9xo");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/service */ "NwxT");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PromedioMovilComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PromedioMovilComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.generarGrafico(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Generar gr\u00E1fico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PromedioMovilComponent_div_13_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r11);
} }
function PromedioMovilComponent_div_13_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PromedioMovilComponent_div_13_tbody_9_tr_1_Template, 3, 1, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.x);
} }
function PromedioMovilComponent_div_13_tbody_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r13);
} }
function PromedioMovilComponent_div_13_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PromedioMovilComponent_div_13_tbody_16_tr_1_Template, 3, 1, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.MMO3);
} }
function PromedioMovilComponent_div_13_tbody_23_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r15);
} }
function PromedioMovilComponent_div_13_tbody_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PromedioMovilComponent_div_13_tbody_23_tr_1_Template, 3, 1, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.MMO4);
} }
function PromedioMovilComponent_div_13_tbody_30_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r17);
} }
function PromedioMovilComponent_div_13_tbody_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PromedioMovilComponent_div_13_tbody_30_tr_1_Template, 3, 1, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.eMM3);
} }
function PromedioMovilComponent_div_13_tbody_37_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r19);
} }
function PromedioMovilComponent_div_13_tbody_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PromedioMovilComponent_div_13_tbody_37_tr_1_Template, 3, 1, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r9.eMM4);
} }
function PromedioMovilComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "thead", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "MUESTRA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, PromedioMovilComponent_div_13_tbody_9_Template, 2, 1, "tbody", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "thead", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "MMO_3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, PromedioMovilComponent_div_13_tbody_16_Template, 2, 1, "tbody", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "thead", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "MMO_4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, PromedioMovilComponent_div_13_tbody_23_Template, 2, 1, "tbody", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "thead", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "e_MM3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, PromedioMovilComponent_div_13_tbody_30_Template, 2, 1, "tbody", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "thead", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "e_MM4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, PromedioMovilComponent_div_13_tbody_37_Template, 2, 1, "tbody", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.x);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.MMO3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.MMO4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.eMM3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.eMM4);
} }
function PromedioMovilComponent_img_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r2.url + "graficopm/" + ctx_r2.x + "/" + ctx_r2.MMO3 + "/" + ctx_r2.MMO4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { standalone: true }; };
class PromedioMovilComponent {
    constructor(_service) {
        this._service = _service;
        this.lista = [];
        this.grafico = false;
        this.mostrar = false;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_0__["global"].url;
    }
    ngOnInit() {
    }
    aggMuestra() {
        if (this.muestra) {
            this.muestra.split(',').forEach((element, i) => {
                this.lista.push(+element);
            });
            this._service.promedioMovil(this.lista).subscribe(response => {
                this.x = response.MUESTRA;
                this.MMO3 = response.MM03;
                this.MMO4 = response.MMO4;
                this.eMM3 = response.eMM03;
                this.eMM4 = response.eMM04;
                this.lista = [];
                this.grafico = true;
                this.limpiar();
            }, error => {
                console.log(error);
            });
        }
        else {
            this.camposVacios();
        }
    }
    limpiar() {
        this.muestra = '';
    }
    generarGrafico() {
        this.mostrar = true;
        // let datos = {'x': this.x, 'm3': this.MMO3, 'm4': this.MMO4}
        // this._service.graficoPM(datos).subscribe(
        //   response => { 
        //   },
        //   error => {
        //     console.log(error)
        //   }
        // ) 
    }
    success() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Correcto',
            icon: 'success',
            timer: 600,
            showConfirmButton: false
        });
    }
    camposVacios() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Validacion',
            text: 'No deje campos vacios',
            icon: 'warning',
        });
    }
}
PromedioMovilComponent.ɵfac = function PromedioMovilComponent_Factory(t) { return new (t || PromedioMovilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"])); };
PromedioMovilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PromedioMovilComponent, selectors: [["app-promedio-movil"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([src_app_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"]])], decls: 18, vars: 6, consts: [[1, "container"], [1, "text-center"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "col-4", "mt-5"], [1, "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "999, 877, 54, 111, 545, 22, 22, 45, 44, 4", "required", "", 1, "form-control", 2, "height", "80px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "submit", 1, "btn", "btn-danger", "col-12", 3, "click"], ["type", "button", "class", "btn btn-info col-12 mt-2", 3, "click", 4, "ngIf"], ["class", "col m-auto text-center ", 4, "ngIf"], ["width", "600px", 3, "src", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "col-12", "mt-2", 3, "click"], [1, "col", "m-auto", "text-center"], [1, "container", "mt-5", 2, "overflow-y", "auto", "overflow-x", "hidden", "max-height", "400px"], [1, "row"], [1, "col"], [1, "table"], [1, "bg-info"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["width", "600px", 3, "src"]], template: function PromedioMovilComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "M\u00E9todo promedio movil");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Agregue la muestra separada con una coma");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PromedioMovilComponent_Template_textarea_ngModelChange_9_listener($event) { return ctx.muestra = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PromedioMovilComponent_Template_button_click_10_listener() { return ctx.aggMuestra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Agregar y calcular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, PromedioMovilComponent_button_12_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PromedioMovilComponent_div_13_Template, 38, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, PromedioMovilComponent_img_17_Template, 1, 1, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.muestra)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mostrar);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9tZWRpby1tb3ZpbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Nrrp":
/*!***********************************************************************************!*\
  !*** ./src/app/components/congruencial-aditivo/congruencial-aditivo.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CongruencialAditivoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongruencialAditivoComponent", function() { return CongruencialAditivoComponent; });
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ "2G9v");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global */ "p9xo");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service */ "NwxT");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CongruencialAditivoComponent_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CongruencialAditivoComponent_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.generarGrafico(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Generar gr\u00E1fico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CongruencialAditivoComponent_div_42_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r14);
} }
function CongruencialAditivoComponent_div_42_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CongruencialAditivoComponent_div_42_tbody_9_tr_1_Template, 3, 1, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r11.xn);
} }
function CongruencialAditivoComponent_div_42_tbody_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r16);
} }
function CongruencialAditivoComponent_div_42_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CongruencialAditivoComponent_div_42_tbody_16_tr_1_Template, 3, 1, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r12.ri);
} }
function CongruencialAditivoComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "thead", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "XN");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CongruencialAditivoComponent_div_42_tbody_9_Template, 2, 1, "tbody", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "thead", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "ri");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, CongruencialAditivoComponent_div_42_tbody_16_Template, 2, 1, "tbody", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.xn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.ri);
} }
function CongruencialAditivoComponent_img_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 31);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r8.url + "grafico/" + ctx_r8.ri, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { standalone: true }; };
class CongruencialAditivoComponent {
    constructor(_service) {
        this._service = _service;
        this.mostrar = false;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_1__["global"].url;
        this.congruencialAditivoModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["CongruencialAditivoModel"](null, null, null, null, null);
        this.grafico = false;
    }
    ngOnInit() {
    }
    congruencialAditivo(form) {
        if (this.congruencialAditivoModel.a && this.congruencialAditivoModel.c &&
            this.congruencialAditivoModel.m && this.congruencialAditivoModel.n &&
            this.congruencialAditivoModel.x0) {
            this._service.congruencialAditivo(this.congruencialAditivoModel).subscribe(response => {
                this.xn = response.Xn;
                this.ri = response.ri;
                this.grafico = true;
            }, error => {
                console.log(error);
            });
        }
        else {
            this.camposVacios();
        }
    }
    limpiar() {
        this.congruencialAditivoModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["CongruencialAditivoModel"](null, null, null, null, null);
        this.grafico = false;
    }
    generarGrafico() {
        this.mostrar = true;
        // this._service.grafico(this.ri).subscribe(
        //   response => { 
        //     this.limpiar()
        //   },
        //   error => {
        //     console.log(error)
        //   }
        // ) 
    }
    success() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Correcto',
            icon: 'success',
            timer: 600,
            showConfirmButton: false
        });
    }
    camposVacios() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Validacion',
            text: 'No deje campos vacios',
            icon: 'warning',
        });
    }
}
CongruencialAditivoComponent.ɵfac = function CongruencialAditivoComponent_Factory(t) { return new (t || CongruencialAditivoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_service__WEBPACK_IMPORTED_MODULE_2__["Service"])); };
CongruencialAditivoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CongruencialAditivoComponent, selectors: [["app-congruencial-aditivo"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_services_service__WEBPACK_IMPORTED_MODULE_2__["Service"]])], decls: 47, vars: 19, consts: [[1, "container"], [1, "text-center"], [1, "col", "mt-5", 3, "ngSubmit"], ["congruencialAditivoForm", "ngForm"], [1, "row"], [1, "col"], [1, "mb-3"], [1, "form-label"], ["type", "number", "placeholder", " 4", "name", "modulo", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["modulo", "ngModel"], ["type", "number", "placeholder", " 2", "name", "semilla", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["semilla", "ngModel"], ["type", "number", "placeholder", " 3", "name", "multiplicador", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["multiplicador", "ngModel"], ["type", "number", "placeholder", " 1", "name", "incremento", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["incremento", "ngModel"], ["type", "number", "placeholder", " 10", "name", "interacciones", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["interacciones", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "col-3", 3, "disabled"], ["type", "button", "class", "btn btn-info  col-3 ml-2", 3, "click", 4, "ngIf"], ["class", "col-6 m-auto text-center ", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center"], ["width", "600px", 3, "src", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "col-3", "ml-2", 3, "click"], [1, "col-6", "m-auto", "text-center"], [1, "container", "mt-5", 2, "overflow-y", "auto", "overflow-x", "hidden", "max-height", "400px"], [1, "table"], [1, "bg-info"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["width", "600px", 3, "src"]], template: function CongruencialAditivoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "M\u00E9todo congruencial aditivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CongruencialAditivoComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5); return ctx.congruencialAditivo(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Modulo (m):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CongruencialAditivoComponent_Template_input_ngModelChange_11_listener($event) { return ctx.congruencialAditivoModel.m = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Semilla (X0):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CongruencialAditivoComponent_Template_input_ngModelChange_17_listener($event) { return ctx.congruencialAditivoModel.x0 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Multiplicador (a):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CongruencialAditivoComponent_Template_input_ngModelChange_23_listener($event) { return ctx.congruencialAditivoModel.a = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Incremento (c):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CongruencialAditivoComponent_Template_input_ngModelChange_29_listener($event) { return ctx.congruencialAditivoModel.c = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Interacciones (n):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CongruencialAditivoComponent_Template_input_ngModelChange_35_listener($event) { return ctx.congruencialAditivoModel.n = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, " Calcular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, CongruencialAditivoComponent_button_41_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, CongruencialAditivoComponent_div_42_Template, 17, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, CongruencialAditivoComponent_img_46_Template, 1, 1, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.congruencialAditivoModel.m)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.congruencialAditivoModel.x0)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.congruencialAditivoModel.a)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.congruencialAditivoModel.c)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.congruencialAditivoModel.n)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mostrar);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25ncnVlbmNpYWwtYWRpdGl2by5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "NwxT":
/*!*************************************!*\
  !*** ./src/app/services/service.ts ***!
  \*************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "p9xo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class Service {
    constructor(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_1__["global"].url;
    }
    cuadradoMedio(datos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'cuadrado-medio/', datos, { headers: headers });
    }
    congruencialAditivo(datos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'congruencial-lineal/', datos, { headers: headers });
    }
    congruencialMultiplicativo(datos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'congruencial-multiplicativo/', datos, { headers: headers });
    }
    promedioMovil(datos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'promedio-movil/', datos, { headers: headers });
    }
    alisamientoExponencial(datos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'alisamiento-exponencial/', datos, { headers: headers });
    }
    regresionLineal(datos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'regresion-lineal/', datos, { headers: headers });
    }
    regresionNoLineal(datos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'regresion-no-lineal/', datos, { headers: headers });
    }
    montecarlo(datos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'montecarlo/', datos, { headers: headers });
    }
    inversaAditivo(datos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'inversa-aditivo/', datos, { headers: headers });
    }
    inversaMultiplicativo(datos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'inversa-multiplicativo/', datos, { headers: headers });
    }
    lineaEspera(datos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'linea-espera/', datos, { headers: headers });
    }
    lineaEsperaNuevo(datos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'linea-espera-nuevo/', datos, { headers: headers });
    }
    inventario(datos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'modelo-inventario/', datos, { headers: headers });
    }
    estadisticos(datos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'estadisticos/', datos, { headers: headers });
    }
    // GRAFICOS
    grafico(datos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'grafico/', datos, { headers: headers });
    }
    graficoPM(datos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'graficopm/', datos, { headers: headers });
    }
}
Service.ɵfac = function Service_Factory(t) { return new (t || Service)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Service, factory: Service.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/estadisticos"]; };
class AppComponent {
    constructor() {
        this.title = 'proyectoSimulacion1';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 2, consts: [[1, "sidebar"], [1, "text-center", "mt-2"], [1, "ml-3"], [1, "dropdown-item", "active", 3, "routerLink"], [1, "content"], [1, "mt-5"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "M\u00E9todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Estadisticos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Media Mediana y Moda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 200px;\r\n  background-color: #f5fcfa;\r\n  position: fixed;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: black;\r\n  padding: 16px;\r\n  text-decoration: none;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: #04AA6D;\r\n  color: white;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\r\n  background-color: #555;\r\n  color: white;\r\n}\r\n\r\ndiv.content[_ngcontent-%COMP%] {\r\n  margin-left: 200px;\r\n  padding: 1px 16px;\r\n  height: 1000px;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .sidebar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n    position: relative;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {float: left;}\r\n  div.content[_ngcontent-%COMP%] {margin-left: 0;}\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n  .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    float: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7RUFDQSxZQUFZLFdBQVcsQ0FBQztFQUN4QixhQUFhLGNBQWMsQ0FBQztBQUM5Qjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmY2ZhO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5zaWRlYmFyIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4gXHJcbi5zaWRlYmFyIGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNpZGViYXIgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5kaXYuY29udGVudCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gIHBhZGRpbmc6IDFweCAxNnB4O1xyXG4gIGhlaWdodDogMTAwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuc2lkZWJhciBhIHtmbG9hdDogbGVmdDt9XHJcbiAgZGl2LmNvbnRlbnQge21hcmdpbi1sZWZ0OiAwO31cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAuc2lkZWJhciBhIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "TaAD":
/*!*********************************************************************************!*\
  !*** ./src/app/components/regresion-no-lineal/regresion-no-lineal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RegresionNoLinealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegresionNoLinealComponent", function() { return RegresionNoLinealComponent; });
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ "2G9v");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/service */ "NwxT");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function RegresionNoLinealComponent_div_24_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r12);
} }
function RegresionNoLinealComponent_div_24_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegresionNoLinealComponent_div_24_tbody_9_tr_1_Template, 3, 1, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.xcopy);
} }
function RegresionNoLinealComponent_div_24_tbody_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r14);
} }
function RegresionNoLinealComponent_div_24_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegresionNoLinealComponent_div_24_tbody_16_tr_1_Template, 3, 1, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.ycopy);
} }
function RegresionNoLinealComponent_div_24_tbody_23_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r16);
} }
function RegresionNoLinealComponent_div_24_tbody_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegresionNoLinealComponent_div_24_tbody_23_tr_1_Template, 3, 1, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.x2);
} }
function RegresionNoLinealComponent_div_24_tbody_30_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r18);
} }
function RegresionNoLinealComponent_div_24_tbody_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegresionNoLinealComponent_div_24_tbody_30_tr_1_Template, 3, 1, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.x3);
} }
function RegresionNoLinealComponent_div_24_tbody_37_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r20);
} }
function RegresionNoLinealComponent_div_24_tbody_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegresionNoLinealComponent_div_24_tbody_37_tr_1_Template, 3, 1, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.x4);
} }
function RegresionNoLinealComponent_div_24_tbody_44_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r22);
} }
function RegresionNoLinealComponent_div_24_tbody_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegresionNoLinealComponent_div_24_tbody_44_tr_1_Template, 3, 1, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r9.xy);
} }
function RegresionNoLinealComponent_div_24_tbody_51_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r24);
} }
function RegresionNoLinealComponent_div_24_tbody_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegresionNoLinealComponent_div_24_tbody_51_tr_1_Template, 3, 1, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r10.x2y);
} }
function RegresionNoLinealComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "thead", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RegresionNoLinealComponent_div_24_tbody_9_Template, 2, 1, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "thead", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, RegresionNoLinealComponent_div_24_tbody_16_Template, 2, 1, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "thead", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "X^2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, RegresionNoLinealComponent_div_24_tbody_23_Template, 2, 1, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "thead", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "X^3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, RegresionNoLinealComponent_div_24_tbody_30_Template, 2, 1, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "thead", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "X^4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, RegresionNoLinealComponent_div_24_tbody_37_Template, 2, 1, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "thead", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "XY");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, RegresionNoLinealComponent_div_24_tbody_44_Template, 2, 1, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "thead", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "(X^2)Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, RegresionNoLinealComponent_div_24_tbody_51_Template, 2, 1, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.xcopy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.ycopy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.x2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.x3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.x4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.xy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.x2y);
} }
const _c0 = function () { return { standalone: true }; };
class RegresionNoLinealComponent {
    constructor(_service) {
        this._service = _service;
        this.listaX = [];
        this.listaY = [];
        this.grafico = false;
        this.regresionNoLinealModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["RegresionNoLinealModel"](null, null);
    }
    ngOnInit() {
    }
    regresionNoLineal(form) {
        if (this.regresionNoLinealModel.x && this.regresionNoLinealModel.y) {
            this.regresionNoLinealModel.x.split(',').forEach((elementx) => {
                this.listaX.push(+elementx);
            });
            this.regresionNoLinealModel.y.split(',').forEach((elementy) => {
                this.listaY.push(+elementy);
            });
            // longitud igual de x, y
            if (this.listaX.length === this.listaY.length) {
                this.regresionNoLinealModel.x = this.listaX;
                this.regresionNoLinealModel.y = this.listaY;
                this._service.regresionNoLineal(this.regresionNoLinealModel).subscribe(response => {
                    this.xcopy = response.X;
                    this.xy = response.XY;
                    this.x2 = response.X2;
                    this.x2y = response.X2Y;
                    this.ycopy = response.Y;
                    this.x3 = response.X3;
                    this.x4 = response.X4;
                    this.result = response.Result;
                    this.regresionNoLinealModel.x = null;
                    this.regresionNoLinealModel.y = null;
                    this.grafico = true;
                    this.limpiar();
                }, error => {
                    console.log(error);
                    this.listaX = [];
                    this.listaY = [];
                });
            }
            else {
                this.listaX = [];
                this.listaY = [];
                this.noIguales();
            }
        }
        else {
            this.camposVacios();
        }
    }
    limpiar() {
        this.regresionNoLinealModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["RegresionNoLinealModel"](null, null);
    }
    success() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Correcto',
            icon: 'success',
            timer: 600,
            showConfirmButton: false,
        });
    }
    camposVacios() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Campos vacios',
            text: 'Asegurese de llenar todos los campos',
            icon: 'warning',
        });
    }
    noIguales() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Advertencia',
            text: 'Los valores no tienen la misma longitud',
            icon: 'warning',
        });
    }
}
RegresionNoLinealComponent.ɵfac = function RegresionNoLinealComponent_Factory(t) { return new (t || RegresionNoLinealComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"])); };
RegresionNoLinealComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegresionNoLinealComponent, selectors: [["app-regresion-no-lineal"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([src_app_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"]])], decls: 25, vars: 8, consts: [[1, "container"], [1, "text-center"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "col-8", "mt-5", 3, "ngSubmit"], ["regresionNoLinealForm", "ngForm"], [1, "row"], [1, "col"], [1, "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "8, 6, 4, 4, 5, 5, 2", "name", "x", "required", "", 1, "form-control", 2, "height", "100px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["x", "ngModel"], ["type", "text", "placeholder", "8, 6, 4, 4, 5, 5, 2", "name", "y", "required", "", 1, "form-control", 2, "height", "100px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["y", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "col-6", 3, "disabled"], ["class", "m-auto text-center ", 4, "ngIf"], [1, "m-auto", "text-center"], [1, "container", "mt-5", 2, "overflow-y", "auto", "overflow-x", "hidden", "max-height", "400px"], [1, "table"], [1, "bg-info"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function RegresionNoLinealComponent_Template(rf, ctx) { if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "M\u00E9todo regresion no lineal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegresionNoLinealComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6); return ctx.regresionNoLineal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Valores de 'X' ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "textarea", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegresionNoLinealComponent_Template_textarea_ngModelChange_12_listener($event) { return ctx.regresionNoLinealModel.x = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Valores de 'Y'");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "textarea", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegresionNoLinealComponent_Template_textarea_ngModelChange_19_listener($event) { return ctx.regresionNoLinealModel.y = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Calcular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, RegresionNoLinealComponent_div_24_Template, 52, 7, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.regresionNoLinealModel.x)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.regresionNoLinealModel.y)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.grafico);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdyZXNpb24tbm8tbGluZWFsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "XSc8":
/*!***************************************************************!*\
  !*** ./src/app/components/montecarlo/montecarlo.component.ts ***!
  \***************************************************************/
/*! exports provided: MontecarloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MontecarloComponent", function() { return MontecarloComponent; });
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ "2G9v");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/service */ "NwxT");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function MontecarloComponent_div_45_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r16);
} }
function MontecarloComponent_div_45_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MontecarloComponent_div_45_tbody_9_tr_1_Template, 3, 1, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.muestra);
} }
function MontecarloComponent_div_45_tbody_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r18);
} }
function MontecarloComponent_div_45_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MontecarloComponent_div_45_tbody_16_tr_1_Template, 3, 1, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r9.probabilidad);
} }
function MontecarloComponent_div_45_tbody_23_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r20);
} }
function MontecarloComponent_div_45_tbody_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MontecarloComponent_div_45_tbody_23_tr_1_Template, 3, 1, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r10.FPA);
} }
function MontecarloComponent_div_45_tbody_30_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r22);
} }
function MontecarloComponent_div_45_tbody_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MontecarloComponent_div_45_tbody_30_tr_1_Template, 3, 1, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r11.min);
} }
function MontecarloComponent_div_45_tbody_37_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r24);
} }
function MontecarloComponent_div_45_tbody_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MontecarloComponent_div_45_tbody_37_tr_1_Template, 3, 1, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r12.max);
} }
function MontecarloComponent_div_45_tbody_44_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r26);
} }
function MontecarloComponent_div_45_tbody_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MontecarloComponent_div_45_tbody_44_tr_1_Template, 3, 1, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r13.ri);
} }
function MontecarloComponent_div_45_tbody_51_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r28);
} }
function MontecarloComponent_div_45_tbody_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MontecarloComponent_div_45_tbody_51_tr_1_Template, 3, 1, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r14.simulacion);
} }
function MontecarloComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "thead", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Muestra");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MontecarloComponent_div_45_tbody_9_Template, 2, 1, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "thead", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Probabilidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, MontecarloComponent_div_45_tbody_16_Template, 2, 1, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "thead", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "FPA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, MontecarloComponent_div_45_tbody_23_Template, 2, 1, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "thead", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Min");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, MontecarloComponent_div_45_tbody_30_Template, 2, 1, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "thead", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Max");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, MontecarloComponent_div_45_tbody_37_Template, 2, 1, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "thead", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "ri");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, MontecarloComponent_div_45_tbody_44_Template, 2, 1, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "thead", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Simulacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, MontecarloComponent_div_45_tbody_51_Template, 2, 1, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.muestra);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.probabilidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.FPA);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.ri);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.simulacion);
} }
const _c0 = function () { return { standalone: true }; };
class MontecarloComponent {
    constructor(_service) {
        this._service = _service;
        this.lista = [];
        this.grafico = false;
        this.montecarloModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["MontecarloModel"](null, null, null, null, null, null);
    }
    ngOnInit() {
    }
    montecarlo(form) {
        if (this.montecarloModel.a && this.montecarloModel.c &&
            this.montecarloModel.lista && this.montecarloModel.m &&
            this.montecarloModel.m && this.montecarloModel.n &&
            this.montecarloModel.x0) {
            this.montecarloModel.lista.split(',').forEach((elementx) => {
                this.lista.push(+elementx);
            });
            this.montecarloModel.lista = this.lista;
            this._service.montecarlo(this.montecarloModel).subscribe(response => {
                this.FPA = response.FPA;
                this.max = response.Max;
                this.min = response.Min;
                this.muestra = response.Muestra;
                this.probabilidad = response.Probabilidad;
                this.simulacion = response.Simulacion;
                this.ri = response.ri;
                this.lista = [];
                this.grafico = true;
                this.limpiar();
            }, error => {
                console.log(error);
            });
        }
        else {
            this.camposVacios();
        }
    }
    limpiar() {
        this.montecarloModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["MontecarloModel"](null, null, null, null, null, null);
    }
    success() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Correcto',
            icon: 'success',
            timer: 600,
            showConfirmButton: false,
        });
    }
    camposVacios() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Validacion',
            text: 'No deje campos vacios',
            icon: 'warning',
        });
    }
}
MontecarloComponent.ɵfac = function MontecarloComponent_Factory(t) { return new (t || MontecarloComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"])); };
MontecarloComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MontecarloComponent, selectors: [["app-montecarlo"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([src_app_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"]])], decls: 46, vars: 20, consts: [[1, "container"], [1, "text-center"], [1, "col", "mt-5", 3, "ngSubmit"], ["montecarloForm", "ngForm"], [1, "row"], [1, "col"], [1, "mb-3"], [1, "form-label"], ["type", "number", "placeholder", " 4", "name", "modulo", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["modulo", "ngModel"], ["type", "number", "placeholder", " 2", "name", "semilla", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["semilla", "ngModel"], ["type", "number", "placeholder", " 3", "name", "multiplicador", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["multiplicador", "ngModel"], ["type", "number", "placeholder", " 3", "name", "incremento", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["incremento", "ngModel"], ["type", "number", "placeholder", " 10", "name", "interacciones", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["interacciones", "ngModel"], ["type", "text", "placeholder", "10, 20, 12, 32, 11, 14", "name", "lista", "required", "", 1, "form-control", "col-4", 2, "height", "100px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["lista", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "col-3", 3, "disabled"], ["class", "m-auto text-center ", 4, "ngIf"], [1, "m-auto", "text-center"], [1, "container", "mt-5", 2, "overflow-y", "auto", "overflow-x", "hidden", "max-height", "400px"], [1, "table"], [1, "bg-info"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function MontecarloComponent_Template(rf, ctx) { if (rf & 1) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "M\u00E9todo montecarlo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function MontecarloComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); return ctx.montecarlo(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Modulo (m):");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MontecarloComponent_Template_input_ngModelChange_11_listener($event) { return ctx.montecarloModel.m = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Semilla (X0):");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MontecarloComponent_Template_input_ngModelChange_17_listener($event) { return ctx.montecarloModel.x0 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Multiplicador (a):");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MontecarloComponent_Template_input_ngModelChange_23_listener($event) { return ctx.montecarloModel.a = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Incremento (c):");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MontecarloComponent_Template_input_ngModelChange_29_listener($event) { return ctx.montecarloModel.c = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Interacciones (n):");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MontecarloComponent_Template_input_ngModelChange_35_listener($event) { return ctx.montecarloModel.n = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Valores de la muestra");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "textarea", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MontecarloComponent_Template_textarea_ngModelChange_40_listener($event) { return ctx.montecarloModel.lista = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " Calcular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, MontecarloComponent_div_45_Template, 52, 7, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.montecarloModel.m)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.montecarloModel.x0)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.montecarloModel.a)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.montecarloModel.c)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.montecarloModel.n)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.montecarloModel.lista)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.grafico);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb250ZWNhcmxvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "Z12j":
/*!*******************************************************************!*\
  !*** ./src/app/components/estadisticos/estadisticos.component.ts ***!
  \*******************************************************************/
/*! exports provided: EstadisticosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticosComponent", function() { return EstadisticosComponent; });
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/global */ "p9xo");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/service */ "NwxT");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function EstadisticosComponent_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.url + "grafico/" + ctx_r0.x, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function EstadisticosComponent_div_15_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r7);
} }
function EstadisticosComponent_div_15_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EstadisticosComponent_div_15_tbody_9_tr_1_Template, 3, 1, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.x);
} }
function EstadisticosComponent_div_15_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.media);
} }
function EstadisticosComponent_div_15_tbody_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.mediana);
} }
function EstadisticosComponent_div_15_tbody_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.moda);
} }
function EstadisticosComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "thead", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Valores");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, EstadisticosComponent_div_15_tbody_9_Template, 2, 1, "tbody", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "thead", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Media calculada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, EstadisticosComponent_div_15_tbody_16_Template, 4, 1, "tbody", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "thead", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Mediana calculada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, EstadisticosComponent_div_15_tbody_23_Template, 4, 1, "tbody", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "thead", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Moda calculada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, EstadisticosComponent_div_15_tbody_30_Template, 4, 1, "tbody", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.x);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.media);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.mediana);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.moda);
} }
const _c0 = function () { return { standalone: true }; };
class EstadisticosComponent {
    constructor(_service) {
        this._service = _service;
        this.lista = [];
        this.grafico = false;
        this.mostrar = false;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_0__["global"].url;
    }
    ngOnInit() {
    }
    aggMuestra() {
        if (this.muestra) {
            this.muestra.split(',').forEach((element, i) => {
                this.lista.push(+element);
            });
            this._service.estadisticos(this.lista).subscribe(response => {
                console.log(response);
                this.x = response.Datos;
                this.media = response.media;
                this.mediana = response.mediana;
                this.moda = response.moda;
                // this.eMM4 = response.eMM04;
                this.lista = [];
                this.grafico = true;
                this.limpiar();
                this.mostrar = true;
            }, error => {
                console.log(error);
            });
        }
        else {
            this.camposVacios();
        }
    }
    limpiar() {
        this.muestra = '';
    }
    generarGrafico() {
        this.mostrar = true;
        // let datos = {'x': this.x, 'm3': this.MMO3, 'm4': this.MMO4}
        // this._service.graficoPM(datos).subscribe(
        //   response => { 
        //   },
        //   error => {
        //     console.log(error)
        //   }
        // ) 
    }
    success() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Correcto',
            icon: 'success',
            timer: 600,
            showConfirmButton: false
        });
    }
    camposVacios() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Validacion',
            text: 'No deje campos vacios',
            icon: 'warning',
        });
    }
}
EstadisticosComponent.ɵfac = function EstadisticosComponent_Factory(t) { return new (t || EstadisticosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"])); };
EstadisticosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EstadisticosComponent, selectors: [["app-estadisticos"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([src_app_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"]])], decls: 18, vars: 5, consts: [[1, "container"], [1, "text-center", "letras"], [1, "row"], [1, "col-6"], [1, "mt-5"], [1, "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "Ejemplo: 21, 54, 32, 65, 12, 45, 21, 54, 32", "required", "", 1, "form-control", 2, "height", "120px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", "col-12", 3, "click"], ["width", "600px", 3, "src", 4, "ngIf"], ["class", "col m-auto text-center ", 4, "ngIf"], ["width", "600px", 3, "src"], [1, "col", "m-auto", "text-center"], [1, "container", "mt-5", 2, "overflow-y", "auto", "overflow-x", "hidden", "max-height", "400px"], [1, "col"], [1, "table"], [1, "bg-success"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function EstadisticosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Media Mediana y Moda");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Agregue los datos a calcular separados por coma (,)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EstadisticosComponent_Template_textarea_ngModelChange_10_listener($event) { return ctx.muestra = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EstadisticosComponent_Template_button_click_11_listener() { return ctx.aggMuestra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Calcular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, EstadisticosComponent_img_14_Template, 1, 1, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EstadisticosComponent_div_15_Template, 31, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.muestra)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mostrar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.grafico);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc3RhZGlzdGljb3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_cuadrado_medio_cuadrado_medio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cuadrado-medio/cuadrado-medio.component */ "iTvm");
/* harmony import */ var _components_congruencial_aditivo_congruencial_aditivo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/congruencial-aditivo/congruencial-aditivo.component */ "Nrrp");
/* harmony import */ var _components_congruencial_multiplicativo_congruencial_multiplicativo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/congruencial-multiplicativo/congruencial-multiplicativo.component */ "5w1F");
/* harmony import */ var _components_promedio_movil_promedio_movil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/promedio-movil/promedio-movil.component */ "JfTL");
/* harmony import */ var _components_alisamiento_exponencial_alisamiento_exponencial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/alisamiento-exponencial/alisamiento-exponencial.component */ "+SbH");
/* harmony import */ var _components_regresion_lineal_regresion_lineal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/regresion-lineal/regresion-lineal.component */ "aiz5");
/* harmony import */ var _components_regresion_no_lineal_regresion_no_lineal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/regresion-no-lineal/regresion-no-lineal.component */ "TaAD");
/* harmony import */ var _components_montecarlo_montecarlo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/montecarlo/montecarlo.component */ "XSc8");
/* harmony import */ var _components_inversa_aditivo_inversa_aditivo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/inversa-aditivo/inversa-aditivo.component */ "pZs0");
/* harmony import */ var _components_inversa_multiplicativo_inversa_multiplicativo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/inversa-multiplicativo/inversa-multiplicativo.component */ "8txY");
/* harmony import */ var _components_linea_espera_linea_espera_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/linea-espera/linea-espera.component */ "Alcz");
/* harmony import */ var _components_modelo_inventario_modelo_inventario_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/modelo-inventario/modelo-inventario.component */ "8zAS");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_linea_espera_nuevo_linea_espera_nuevo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/linea-espera-nuevo/linea-espera-nuevo.component */ "rYEj");
/* harmony import */ var _components_estadisticos_estadisticos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/estadisticos/estadisticos.component */ "Z12j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "tyNb");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_app_routing__WEBPACK_IMPORTED_MODULE_1__["appRoutingProviders"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_1__["routing"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_cuadrado_medio_cuadrado_medio_component__WEBPACK_IMPORTED_MODULE_5__["CuadradoMedioComponent"],
        _components_congruencial_aditivo_congruencial_aditivo_component__WEBPACK_IMPORTED_MODULE_6__["CongruencialAditivoComponent"],
        _components_congruencial_multiplicativo_congruencial_multiplicativo_component__WEBPACK_IMPORTED_MODULE_7__["CongruencialMultiplicativoComponent"],
        _components_promedio_movil_promedio_movil_component__WEBPACK_IMPORTED_MODULE_8__["PromedioMovilComponent"],
        _components_alisamiento_exponencial_alisamiento_exponencial_component__WEBPACK_IMPORTED_MODULE_9__["AlisamientoExponencialComponent"],
        _components_regresion_lineal_regresion_lineal_component__WEBPACK_IMPORTED_MODULE_10__["RegresionLinealComponent"],
        _components_regresion_no_lineal_regresion_no_lineal_component__WEBPACK_IMPORTED_MODULE_11__["RegresionNoLinealComponent"],
        _components_montecarlo_montecarlo_component__WEBPACK_IMPORTED_MODULE_12__["MontecarloComponent"],
        _components_inversa_aditivo_inversa_aditivo_component__WEBPACK_IMPORTED_MODULE_13__["InversaAditivoComponent"],
        _components_inversa_multiplicativo_inversa_multiplicativo_component__WEBPACK_IMPORTED_MODULE_14__["InversaMultiplicativoComponent"],
        _components_linea_espera_linea_espera_component__WEBPACK_IMPORTED_MODULE_15__["LineaEsperaComponent"],
        _components_modelo_inventario_modelo_inventario_component__WEBPACK_IMPORTED_MODULE_16__["ModeloInventarioComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        _components_linea_espera_nuevo_linea_espera_nuevo_component__WEBPACK_IMPORTED_MODULE_18__["LineaEsperaNuevoComponent"],
        _components_estadisticos_estadisticos_component__WEBPACK_IMPORTED_MODULE_19__["EstadisticosComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();


/***/ }),

/***/ "aiz5":
/*!***************************************************************************!*\
  !*** ./src/app/components/regresion-lineal/regresion-lineal.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegresionLinealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegresionLinealComponent", function() { return RegresionLinealComponent; });
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ "2G9v");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/service */ "NwxT");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function RegresionLinealComponent_div_24_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r10);
} }
function RegresionLinealComponent_div_24_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegresionLinealComponent_div_24_tbody_9_tr_1_Template, 3, 1, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.xcopy);
} }
function RegresionLinealComponent_div_24_tbody_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r12);
} }
function RegresionLinealComponent_div_24_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegresionLinealComponent_div_24_tbody_16_tr_1_Template, 3, 1, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.ycopy);
} }
function RegresionLinealComponent_div_24_tbody_23_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r14);
} }
function RegresionLinealComponent_div_24_tbody_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegresionLinealComponent_div_24_tbody_23_tr_1_Template, 3, 1, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.x2);
} }
function RegresionLinealComponent_div_24_tbody_30_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r16);
} }
function RegresionLinealComponent_div_24_tbody_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegresionLinealComponent_div_24_tbody_30_tr_1_Template, 3, 1, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.xy);
} }
function RegresionLinealComponent_div_24_tbody_37_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r18);
} }
function RegresionLinealComponent_div_24_tbody_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegresionLinealComponent_div_24_tbody_37_tr_1_Template, 3, 1, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.y2);
} }
function RegresionLinealComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "thead", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RegresionLinealComponent_div_24_tbody_9_Template, 2, 1, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "thead", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, RegresionLinealComponent_div_24_tbody_16_Template, 2, 1, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "thead", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "X^2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, RegresionLinealComponent_div_24_tbody_23_Template, 2, 1, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "thead", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "XY");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, RegresionLinealComponent_div_24_tbody_30_Template, 2, 1, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "thead", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Y^2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, RegresionLinealComponent_div_24_tbody_37_Template, 2, 1, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.xcopy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.ycopy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.x2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.xy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.y2);
} }
const _c0 = function () { return { standalone: true }; };
class RegresionLinealComponent {
    constructor(_service) {
        this._service = _service;
        this.listaX = [];
        this.listaY = [];
        this.grafico = false;
        this.regresionLinealModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["RegresionLinealModel"](null, null);
    }
    ngOnInit() { }
    regresionLineal(form) {
        if (this.regresionLinealModel.x && this.regresionLinealModel.y) {
            this.regresionLinealModel.x.split(',').forEach((elementx) => {
                this.listaX.push(+elementx);
            });
            this.regresionLinealModel.y.split(',').forEach((elementy) => {
                this.listaY.push(+elementy);
            });
            // longitud igual de x, y
            if (this.listaX.length === this.listaY.length) {
                this.regresionLinealModel.x = this.listaX;
                this.regresionLinealModel.y = this.listaY;
                this._service.regresionLineal(this.regresionLinealModel).subscribe((response) => {
                    this.xcopy = response.X;
                    this.xy = response.XY;
                    this.x2 = response.X2;
                    this.ycopy = response.Y;
                    this.y2 = response.Y2;
                    this.result = response.Result;
                    this.regresionLinealModel.x = null;
                    this.regresionLinealModel.y = null;
                    this.grafico = true;
                    this.limpiar();
                }, (error) => {
                    console.log(error);
                    this.listaX = [];
                    this.listaY = [];
                });
            }
            else {
                this.listaX = [];
                this.listaY = [];
                this.noIguales();
            }
        }
        else {
            this.camposVacios();
        }
    }
    limpiar() {
        this.regresionLinealModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["RegresionLinealModel"](null, null);
    }
    success() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Correcto',
            icon: 'success',
            timer: 600,
            showConfirmButton: false,
        });
    }
    camposVacios() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Validacion',
            text: 'No deje campos vacios',
            icon: 'warning',
        });
    }
    noIguales() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Advertencia',
            text: 'Los valores no tienen la misma longitud',
            icon: 'warning',
        });
    }
}
RegresionLinealComponent.ɵfac = function RegresionLinealComponent_Factory(t) { return new (t || RegresionLinealComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"])); };
RegresionLinealComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegresionLinealComponent, selectors: [["app-regresion-lineal"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([src_app_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"]])], decls: 25, vars: 8, consts: [[1, "container"], [1, "text-center"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "col-8", "mt-5", 3, "ngSubmit"], ["regresionLinealForm", "ngForm"], [1, "row"], [1, "col"], [1, "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "8, 6, 4, 4, 5, 5, 2", "name", "x", "required", "", 1, "form-control", 2, "height", "100px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["x", "ngModel"], ["type", "text", "placeholder", "8, 6, 4, 4, 5, 5, 2", "name", "y", "required", "", 1, "form-control", 2, "height", "100px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["y", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "col-6", 3, "disabled"], ["class", "m-auto text-center ", 4, "ngIf"], [1, "m-auto", "text-center"], [1, "container", "mt-5", 2, "overflow-y", "auto", "overflow-x", "hidden", "max-height", "400px"], [1, "table"], [1, "bg-info"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function RegresionLinealComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "M\u00E9todo regresion lineal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegresionLinealComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6); return ctx.regresionLineal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Valores de 'X' ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "textarea", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegresionLinealComponent_Template_textarea_ngModelChange_12_listener($event) { return ctx.regresionLinealModel.x = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Valores de 'Y'");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "textarea", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegresionLinealComponent_Template_textarea_ngModelChange_19_listener($event) { return ctx.regresionLinealModel.y = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Calcular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, RegresionLinealComponent_div_24_Template, 38, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.regresionLinealModel.x)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.regresionLinealModel.y)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.grafico);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdyZXNpb24tbGluZWFsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_alisamiento_exponencial_alisamiento_exponencial_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/alisamiento-exponencial/alisamiento-exponencial.component */ "+SbH");
/* harmony import */ var _components_congruencial_aditivo_congruencial_aditivo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/congruencial-aditivo/congruencial-aditivo.component */ "Nrrp");
/* harmony import */ var _components_congruencial_multiplicativo_congruencial_multiplicativo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/congruencial-multiplicativo/congruencial-multiplicativo.component */ "5w1F");
/* harmony import */ var _components_cuadrado_medio_cuadrado_medio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cuadrado-medio/cuadrado-medio.component */ "iTvm");
/* harmony import */ var _components_inversa_aditivo_inversa_aditivo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/inversa-aditivo/inversa-aditivo.component */ "pZs0");
/* harmony import */ var _components_inversa_multiplicativo_inversa_multiplicativo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/inversa-multiplicativo/inversa-multiplicativo.component */ "8txY");
/* harmony import */ var _components_linea_espera_linea_espera_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/linea-espera/linea-espera.component */ "Alcz");
/* harmony import */ var _components_modelo_inventario_modelo_inventario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modelo-inventario/modelo-inventario.component */ "8zAS");
/* harmony import */ var _components_montecarlo_montecarlo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/montecarlo/montecarlo.component */ "XSc8");
/* harmony import */ var _components_promedio_movil_promedio_movil_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/promedio-movil/promedio-movil.component */ "JfTL");
/* harmony import */ var _components_regresion_lineal_regresion_lineal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/regresion-lineal/regresion-lineal.component */ "aiz5");
/* harmony import */ var _components_regresion_no_lineal_regresion_no_lineal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/regresion-no-lineal/regresion-no-lineal.component */ "TaAD");
/* harmony import */ var _components_linea_espera_nuevo_linea_espera_nuevo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/linea-espera-nuevo/linea-espera-nuevo.component */ "rYEj");
/* harmony import */ var _components_estadisticos_estadisticos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/estadisticos/estadisticos.component */ "Z12j");




// importar componentes











// definir las rutas
const appRoutes = [
    { path: '', component: _components_estadisticos_estadisticos_component__WEBPACK_IMPORTED_MODULE_14__["EstadisticosComponent"] },
    { path: 'cuadrado-medio', component: _components_cuadrado_medio_cuadrado_medio_component__WEBPACK_IMPORTED_MODULE_4__["CuadradoMedioComponent"] },
    { path: 'congruencial-lineal', component: _components_congruencial_aditivo_congruencial_aditivo_component__WEBPACK_IMPORTED_MODULE_2__["CongruencialAditivoComponent"] },
    { path: 'congruencial-multiplicativo', component: _components_congruencial_multiplicativo_congruencial_multiplicativo_component__WEBPACK_IMPORTED_MODULE_3__["CongruencialMultiplicativoComponent"] },
    { path: 'promedio-movil', component: _components_promedio_movil_promedio_movil_component__WEBPACK_IMPORTED_MODULE_10__["PromedioMovilComponent"] },
    { path: 'asilamiento-exponencial', component: _components_alisamiento_exponencial_alisamiento_exponencial_component__WEBPACK_IMPORTED_MODULE_1__["AlisamientoExponencialComponent"] },
    { path: 'regresion-lineal', component: _components_regresion_lineal_regresion_lineal_component__WEBPACK_IMPORTED_MODULE_11__["RegresionLinealComponent"] },
    { path: 'regresion-no-lineal', component: _components_regresion_no_lineal_regresion_no_lineal_component__WEBPACK_IMPORTED_MODULE_12__["RegresionNoLinealComponent"] },
    { path: 'montecarlo', component: _components_montecarlo_montecarlo_component__WEBPACK_IMPORTED_MODULE_9__["MontecarloComponent"] },
    { path: 'inversa-aditiva', component: _components_inversa_aditivo_inversa_aditivo_component__WEBPACK_IMPORTED_MODULE_5__["InversaAditivoComponent"] },
    { path: 'inversa-multiplicativa', component: _components_inversa_multiplicativo_inversa_multiplicativo_component__WEBPACK_IMPORTED_MODULE_6__["InversaMultiplicativoComponent"] },
    { path: 'linea-espera', component: _components_linea_espera_linea_espera_component__WEBPACK_IMPORTED_MODULE_7__["LineaEsperaComponent"] },
    { path: 'inventario', component: _components_modelo_inventario_modelo_inventario_component__WEBPACK_IMPORTED_MODULE_8__["ModeloInventarioComponent"] },
    { path: 'linea-espera-nuevo', component: _components_linea_espera_nuevo_linea_espera_nuevo_component__WEBPACK_IMPORTED_MODULE_13__["LineaEsperaNuevoComponent"] },
    { path: 'estadisticos', component: _components_estadisticos_estadisticos_component__WEBPACK_IMPORTED_MODULE_14__["EstadisticosComponent"] },
];
// exportar configuracion
const appRoutingProviders = [];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "iTvm":
/*!***********************************************************************!*\
  !*** ./src/app/components/cuadrado-medio/cuadrado-medio.component.ts ***!
  \***********************************************************************/
/*! exports provided: CuadradoMedioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuadradoMedioComponent", function() { return CuadradoMedioComponent; });
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ "2G9v");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/service */ "NwxT");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global */ "p9xo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CuadradoMedioComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CuadradoMedioComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.generarGrafico(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Generar gr\u00E1fico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CuadradoMedioComponent_div_27_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r12);
} }
function CuadradoMedioComponent_div_27_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CuadradoMedioComponent_div_27_tbody_9_tr_1_Template, 3, 1, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r8.x2);
} }
function CuadradoMedioComponent_div_27_tbody_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r14);
} }
function CuadradoMedioComponent_div_27_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CuadradoMedioComponent_div_27_tbody_16_tr_1_Template, 3, 1, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.xi);
} }
function CuadradoMedioComponent_div_27_tbody_23_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r16);
} }
function CuadradoMedioComponent_div_27_tbody_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CuadradoMedioComponent_div_27_tbody_23_tr_1_Template, 3, 1, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.ri);
} }
function CuadradoMedioComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "thead", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "X2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CuadradoMedioComponent_div_27_tbody_9_Template, 2, 1, "tbody", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "thead", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Xi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, CuadradoMedioComponent_div_27_tbody_16_Template, 2, 1, "tbody", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "thead", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "ri");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, CuadradoMedioComponent_div_27_tbody_23_Template, 2, 1, "tbody", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.x2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.xi);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.ri);
} }
function CuadradoMedioComponent_img_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 26);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r5.url + "grafico/" + ctx_r5.ri, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { standalone: true }; };
class CuadradoMedioComponent {
    constructor(_service) {
        this._service = _service;
        this.mostrar = false;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["global"].url;
        this.cuadradoMedioModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["CuadradoMedioModel"](null, null);
        this.grafico = false;
    }
    ngOnInit() {
    }
    cuadradoMedio(form) {
        if (this.cuadradoMedioModel.n && this.cuadradoMedioModel.r) {
            this._service.cuadradoMedio(this.cuadradoMedioModel).subscribe(response => {
                this.x2 = response.X2;
                this.xi = response.Xi;
                this.ri = response.ri;
                this.grafico = true;
            }, error => {
                console.log(error);
            });
        }
        else {
            this.camposVacios();
        }
    }
    limpiar() {
        this.cuadradoMedioModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["CuadradoMedioModel"](null, null);
        this.grafico = false;
    }
    generarGrafico() {
        this.mostrar = true;
        // this._service.grafico(this.ri).subscribe(
        //   response => { 
        //     this.limpiar()
        //   },
        //   error => {
        //     console.log(error)
        //   }
        // ) 
    }
    success() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Correcto',
            icon: 'success',
            timer: 600,
            showConfirmButton: false
        });
    }
    camposVacios() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Validacion',
            text: 'No deje campos vacios',
            icon: 'warning',
        });
    }
}
CuadradoMedioComponent.ɵfac = function CuadradoMedioComponent_Factory(t) { return new (t || CuadradoMedioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"])); };
CuadradoMedioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CuadradoMedioComponent, selectors: [["app-cuadrado-medio"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"]])], decls: 32, vars: 10, consts: [[1, "container"], [1, "text-center"], [1, ""], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "col-6", "mt-5", 3, "ngSubmit"], ["cuadradoMedioForm", "ngForm"], [1, "row"], [1, "col"], [1, "mb-3"], [1, "form-label"], ["type", "number", "placeholder", " 2", "name", "semilla", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["semilla", "ngModel"], ["type", "number", "placeholder", " 10", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["interacciones", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "col-12", 3, "disabled"], ["type", "button", "class", "btn btn-info col-12", 3, "click", 4, "ngIf"], ["class", "col-8 m-auto text-center ", 4, "ngIf"], ["width", "600px", 3, "src", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "col-12", 3, "click"], [1, "col-8", "m-auto", "text-center"], [1, "container", "mt-5", 2, "overflow-y", "auto", "overflow-x", "hidden", "max-height", "400px"], [1, "table"], [1, "bg-info"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["width", "600px", 3, "src"]], template: function CuadradoMedioComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "M\u00E9todo cuadrado medio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CuadradoMedioComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7); return ctx.cuadradoMedio(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Ingrese valor semilla:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CuadradoMedioComponent_Template_input_ngModelChange_13_listener($event) { return ctx.cuadradoMedioModel.r = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Ingrese numero de interacciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CuadradoMedioComponent_Template_input_ngModelChange_19_listener($event) { return ctx.cuadradoMedioModel.n = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Calcular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, CuadradoMedioComponent_button_26_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, CuadradoMedioComponent_div_27_Template, 24, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, CuadradoMedioComponent_img_31_Template, 1, 1, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.cuadradoMedioModel.r)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.cuadradoMedioModel.n)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mostrar);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdWFkcmFkby1tZWRpby5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "p9xo":
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/*! exports provided: global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global", function() { return global; });
var global = {
    // url: 'http://localhost:8000/api/',
    url: 'https://backend-simulacion.herokuapp.com/api/',
};


/***/ }),

/***/ "pZs0":
/*!*************************************************************************!*\
  !*** ./src/app/components/inversa-aditivo/inversa-aditivo.component.ts ***!
  \*************************************************************************/
/*! exports provided: InversaAditivoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InversaAditivoComponent", function() { return InversaAditivoComponent; });
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ "2G9v");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global */ "p9xo");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service */ "NwxT");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function InversaAditivoComponent_button_47_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InversaAditivoComponent_button_47_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.generarGrafico(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Generar gr\u00E1fico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InversaAditivoComponent_div_48_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r16);
} }
function InversaAditivoComponent_div_48_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InversaAditivoComponent_div_48_tbody_9_tr_1_Template, 3, 1, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r12.xn);
} }
function InversaAditivoComponent_div_48_tbody_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r18);
} }
function InversaAditivoComponent_div_48_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InversaAditivoComponent_div_48_tbody_16_tr_1_Template, 3, 1, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r13.ri);
} }
function InversaAditivoComponent_div_48_tbody_23_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r20);
} }
function InversaAditivoComponent_div_48_tbody_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InversaAditivoComponent_div_48_tbody_23_tr_1_Template, 3, 1, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r14.inversa);
} }
function InversaAditivoComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "thead", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "XN");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, InversaAditivoComponent_div_48_tbody_9_Template, 2, 1, "tbody", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "thead", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "ri");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, InversaAditivoComponent_div_48_tbody_16_Template, 2, 1, "tbody", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "thead", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Inversa");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, InversaAditivoComponent_div_48_tbody_23_Template, 2, 1, "tbody", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.xn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.ri);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.inversa);
} }
function InversaAditivoComponent_img_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 33);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r9.url + "grafico/" + ctx_r9.ri, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { standalone: true }; };
class InversaAditivoComponent {
    constructor(_service) {
        this._service = _service;
        this.mostrar = false;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_1__["global"].url;
        this.inversoAditivoModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["InversoAditivoModel"](null, null, null, null, null, null);
        this.grafico = false;
    }
    ngOnInit() {
    }
    inversaAditivo(form) {
        if (this.inversoAditivoModel.a && this.inversoAditivoModel.c &&
            this.inversoAditivoModel.landa && this.inversoAditivoModel.m &&
            this.inversoAditivoModel.n && this.inversoAditivoModel.x0) {
            this._service.inversaAditivo(this.inversoAditivoModel).subscribe(response => {
                this.xn = response.Xn;
                this.ri = response.ri;
                this.inversa = response.inversa;
                this.grafico = true;
                this.limpiar();
            }, error => {
                console.log(error);
            });
        }
        else {
            this.camposVacios();
        }
    }
    limpiar() {
        this.inversoAditivoModel = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["InversoAditivoModel"](null, null, null, null, null, null);
        // this.grafico = false
    }
    generarGrafico() {
        this.mostrar = true;
        // this._service.grafico(this.ri).subscribe(
        //   response => { 
        //   },
        //   error => {
        //     console.log(error)
        //   }
        // ) 
    }
    success() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Correcto',
            icon: 'success',
            timer: 600,
            showConfirmButton: false,
        });
    }
    camposVacios() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Validacion',
            text: 'No deje campos vacios',
            icon: 'warning',
        });
    }
}
InversaAditivoComponent.ɵfac = function InversaAditivoComponent_Factory(t) { return new (t || InversaAditivoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_service__WEBPACK_IMPORTED_MODULE_2__["Service"])); };
InversaAditivoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: InversaAditivoComponent, selectors: [["app-inversa-aditivo"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_services_service__WEBPACK_IMPORTED_MODULE_2__["Service"]])], decls: 53, vars: 22, consts: [[1, "container"], [1, "text-center"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "col-8", "mt-5", 3, "ngSubmit"], ["inversoAditivoForm", "ngForm"], [1, "row"], [1, "col"], [1, "mb-3"], [1, "form-label"], ["type", "number", "placeholder", " 4", "name", "modulo", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["modulo", "ngModel"], ["type", "number", "placeholder", " 2", "name", "semilla", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["semilla", "ngModel"], ["type", "number", "placeholder", " 3", "name", "multiplicador", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["multiplicador", "ngModel"], ["type", "number", "placeholder", " 1", "name", "incremento", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["incremento", "ngModel"], ["type", "number", "placeholder", " 10", "name", "interacciones", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["interacciones", "ngModel"], ["type", "number", "placeholder", " 10", "name", "landa", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["landa", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "col-12", 3, "disabled"], ["type", "button", "class", "btn btn-info  col-12 mt-2", 3, "click", 4, "ngIf"], ["class", "m-auto text-center ", 4, "ngIf"], ["width", "600px", 3, "src", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "col-12", "mt-2", 3, "click"], [1, "m-auto", "text-center"], [1, "container", "mt-5", 2, "overflow-y", "auto", "overflow-x", "hidden", "max-height", "400px"], [1, "table"], [1, "bg-info"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["width", "600px", 3, "src"]], template: function InversaAditivoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Transformada inversa aditivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function InversaAditivoComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6); return ctx.inversaAditivo(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Modulo (m):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InversaAditivoComponent_Template_input_ngModelChange_12_listener($event) { return ctx.inversoAditivoModel.m = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Semilla (X0):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InversaAditivoComponent_Template_input_ngModelChange_18_listener($event) { return ctx.inversoAditivoModel.x0 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Multiplicador (a):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InversaAditivoComponent_Template_input_ngModelChange_24_listener($event) { return ctx.inversoAditivoModel.a = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Incremento (c):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InversaAditivoComponent_Template_input_ngModelChange_31_listener($event) { return ctx.inversoAditivoModel.c = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Interacciones (n):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InversaAditivoComponent_Template_input_ngModelChange_37_listener($event) { return ctx.inversoAditivoModel.n = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Landa (\u03BB):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InversaAditivoComponent_Template_input_ngModelChange_43_listener($event) { return ctx.inversoAditivoModel.landa = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " Calcular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, InversaAditivoComponent_button_47_Template, 2, 0, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, InversaAditivoComponent_div_48_Template, 24, 3, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, InversaAditivoComponent_img_52_Template, 1, 1, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.inversoAditivoModel.m)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.inversoAditivoModel.x0)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.inversoAditivoModel.a)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.inversoAditivoModel.c)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.inversoAditivoModel.n)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.inversoAditivoModel.landa)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mostrar);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlcnNhLWFkaXRpdm8uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "rYEj":
/*!*******************************************************************************!*\
  !*** ./src/app/components/linea-espera-nuevo/linea-espera-nuevo.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LineaEsperaNuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineaEsperaNuevoComponent", function() { return LineaEsperaNuevoComponent; });
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ "2G9v");
/* harmony import */ var src_app_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/service */ "NwxT");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global */ "p9xo");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LineaEsperaNuevoComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LineaEsperaNuevoComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.generarGrafico(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Generar gr\u00E1fico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LineaEsperaNuevoComponent_div_36_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r22);
} }
function LineaEsperaNuevoComponent_div_36_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LineaEsperaNuevoComponent_div_36_tbody_9_tr_1_Template, 3, 1, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.ALL);
} }
function LineaEsperaNuevoComponent_div_36_tbody_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r24);
} }
function LineaEsperaNuevoComponent_div_36_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LineaEsperaNuevoComponent_div_36_tbody_16_tr_1_Template, 3, 1, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.TILL);
} }
function LineaEsperaNuevoComponent_div_36_tbody_23_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r26);
} }
function LineaEsperaNuevoComponent_div_36_tbody_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LineaEsperaNuevoComponent_div_36_tbody_23_tr_1_Template, 3, 1, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r11.TISE);
} }
function LineaEsperaNuevoComponent_div_36_tbody_30_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r28);
} }
function LineaEsperaNuevoComponent_div_36_tbody_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LineaEsperaNuevoComponent_div_36_tbody_30_tr_1_Template, 3, 1, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r12.TIRLL);
} }
function LineaEsperaNuevoComponent_div_36_tbody_37_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r30);
} }
function LineaEsperaNuevoComponent_div_36_tbody_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LineaEsperaNuevoComponent_div_36_tbody_37_tr_1_Template, 3, 1, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r13.TIISE);
} }
function LineaEsperaNuevoComponent_div_36_tbody_44_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r32);
} }
function LineaEsperaNuevoComponent_div_36_tbody_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LineaEsperaNuevoComponent_div_36_tbody_44_tr_1_Template, 3, 1, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r14.TIFSE);
} }
function LineaEsperaNuevoComponent_div_36_tbody_51_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r34);
} }
function LineaEsperaNuevoComponent_div_36_tbody_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LineaEsperaNuevoComponent_div_36_tbody_51_tr_1_Template, 3, 1, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r15.TIESP);
} }
function LineaEsperaNuevoComponent_div_36_tbody_58_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r36);
} }
function LineaEsperaNuevoComponent_div_36_tbody_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LineaEsperaNuevoComponent_div_36_tbody_58_tr_1_Template, 3, 1, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r16.TIESA);
} }
function LineaEsperaNuevoComponent_div_36_tbody_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r17.suma1);
} }
function LineaEsperaNuevoComponent_div_36_tbody_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r18.suma2);
} }
function LineaEsperaNuevoComponent_div_36_tbody_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r19.promedio1);
} }
function LineaEsperaNuevoComponent_div_36_tbody_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r20.promedio2);
} }
function LineaEsperaNuevoComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "ALL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, LineaEsperaNuevoComponent_div_36_tbody_9_Template, 2, 1, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "TILL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, LineaEsperaNuevoComponent_div_36_tbody_16_Template, 2, 1, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "TISE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, LineaEsperaNuevoComponent_div_36_tbody_23_Template, 2, 1, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "TIRLL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, LineaEsperaNuevoComponent_div_36_tbody_30_Template, 2, 1, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "TIISE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, LineaEsperaNuevoComponent_div_36_tbody_37_Template, 2, 1, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "TIFSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, LineaEsperaNuevoComponent_div_36_tbody_44_Template, 2, 1, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "TIESP");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, LineaEsperaNuevoComponent_div_36_tbody_51_Template, 2, 1, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "TIESA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, LineaEsperaNuevoComponent_div_36_tbody_58_Template, 2, 1, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "SUMA TIESP");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, LineaEsperaNuevoComponent_div_36_tbody_67_Template, 4, 1, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "SUMA TIESA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, LineaEsperaNuevoComponent_div_36_tbody_74_Template, 4, 1, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "PROMEDIO TIESP");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](81, LineaEsperaNuevoComponent_div_36_tbody_81_Template, 4, 1, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "PROMEDIO TIESA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](88, LineaEsperaNuevoComponent_div_36_tbody_88_Template, 4, 1, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.ALL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.TILL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.TISE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.TIRLL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.TIISE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.TIFSE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.TIESP);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.TIESA);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.ALL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.TILL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.TISE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.TIRLL);
} }
function LineaEsperaNuevoComponent_img_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 28);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r6.url + "graficols/" + ctx_r6.ALL + "/" + ctx_r6.TILL + "/" + ctx_r6.TISE + "/" + ctx_r6.TIRLL + "/" + ctx_r6.TIISE + "/" + ctx_r6.TIFSE + "/" + ctx_r6.TIESP + "/" + ctx_r6.TIESA, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { standalone: true }; };
class LineaEsperaNuevoComponent {
    constructor(_service) {
        this._service = _service;
        this.grafico = false;
        this.mostrar = false;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["global"].url;
        this.x = [];
        this.y = [];
        this.lineaEsperaNuevo = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["LineaEsperaNuevoModel"](null, null, null, null, null);
    }
    ngOnInit() {
    }
    calcular() {
        // console.log(this.lineaEsperaNuevo)
        if (this.lineaEsperaNuevo.landa && this.lineaEsperaNuevo.nu) {
            this.lineaEsperaNuevo.x.split(',').forEach((element, i) => {
                this.x.push(+element);
            });
            this.lineaEsperaNuevo.y.split(',').forEach((element, i) => {
                this.y.push(+element);
            });
            if (this.x.length === this.y.length) {
                let datos = { x: this.x, y: this.y, landa: this.lineaEsperaNuevo.landa, nu: this.lineaEsperaNuevo.nu };
                this._service.lineaEsperaNuevo(datos).subscribe(response => {
                    // console.log(response)
                    this.ALL = response.ALL;
                    this.TILL = response.TILL;
                    this.TISE = response.TISE;
                    this.TIRLL = response.TIRLL;
                    this.TIISE = response.TIISE;
                    this.TIFSE = response.TIFSE;
                    this.TIESP = response.TIESP;
                    this.TIESA = response.TIESA;
                    this.numClientes = response.numClientes;
                    this.suma1 = response.suma1;
                    this.suma2 = response.suma2;
                    this.promedio1 = response.promedio1;
                    this.promedio2 = response.promedio2;
                    this.success();
                    this.limpiar();
                    this.grafico = true;
                }, error => {
                    console.log(error);
                });
            }
            else {
                this.noIguales();
                window.location.href = "/linea-espera-nuevo";
            }
        }
        else {
            this.camposVacios();
        }
    }
    limpiar() {
        this.lineaEsperaNuevo = new src_app_models__WEBPACK_IMPORTED_MODULE_0__["LineaEsperaNuevoModel"](null, null, null, null, null);
    }
    generarGrafico() {
        this.mostrar = true;
    }
    success() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Correcto',
            icon: 'success',
            timer: 600,
            showConfirmButton: false,
        });
    }
    camposVacios() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Validacion',
            text: 'No deje campos vacios',
            icon: 'warning',
        });
    }
    noIguales() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Advertencia',
            text: 'Los valores no tienen la misma longitud',
            icon: 'warning',
        });
    }
}
LineaEsperaNuevoComponent.ɵfac = function LineaEsperaNuevoComponent_Factory(t) { return new (t || LineaEsperaNuevoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"])); };
LineaEsperaNuevoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LineaEsperaNuevoComponent, selectors: [["app-linea-espera-nuevo"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_services_service__WEBPACK_IMPORTED_MODULE_1__["Service"]])], decls: 41, vars: 15, consts: [[1, "container"], [1, "text-center"], [1, "col", "mt-5"], [1, "row"], [1, "col"], [1, "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "8, 6, 4, 4, 5, 5, 2", "name", "x", "required", "", 1, "form-control", 2, "height", "100px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["x", "ngModel"], ["type", "text", "placeholder", "8, 6, 4, 4, 5, 5, 2", "name", "y", "required", "", 1, "form-control", 2, "height", "100px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["y", "ngModel"], ["type", "number", "placeholder", " 1", "name", "landa", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["landa", "ngModel"], ["type", "number", "placeholder", " 10", "name", "nu", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["nu", "ngModel"], ["type", "submit", 1, "btn", "btn-danger", "col-3", 3, "click"], ["type", "button", "class", "btn btn-info  col-3 ml-2", 3, "click", 4, "ngIf"], ["class", "m-auto text-center ", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center"], ["width", "600px", 3, "src", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "col-3", "ml-2", 3, "click"], [1, "m-auto", "text-center"], [1, "container", "mt-5", 2, "overflow-y", "auto", "overflow-x", "hidden", "max-height", "400px"], [1, "table"], [1, "bg-info"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["width", "600px", 3, "src"]], template: function LineaEsperaNuevoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Simulaci\u00F3n linea de espera");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Tiempo llegada ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "textarea", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LineaEsperaNuevoComponent_Template_textarea_ngModelChange_10_listener($event) { return ctx.lineaEsperaNuevo.x = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Tiempo de servicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "textarea", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LineaEsperaNuevoComponent_Template_textarea_ngModelChange_17_listener($event) { return ctx.lineaEsperaNuevo.y = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Ingrese el valor de landa (\u03BB)):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LineaEsperaNuevoComponent_Template_input_ngModelChange_25_listener($event) { return ctx.lineaEsperaNuevo.landa = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Ingrese el valor de Mui:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LineaEsperaNuevoComponent_Template_input_ngModelChange_31_listener($event) { return ctx.lineaEsperaNuevo.nu = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LineaEsperaNuevoComponent_Template_button_click_33_listener() { return ctx.calcular(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Calcular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, LineaEsperaNuevoComponent_button_35_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, LineaEsperaNuevoComponent_div_36_Template, 89, 12, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, LineaEsperaNuevoComponent_img_40_Template, 1, 1, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.lineaEsperaNuevo.x)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.lineaEsperaNuevo.y)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.lineaEsperaNuevo.landa)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.lineaEsperaNuevo.nu)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.grafico);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mostrar);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5lYS1lc3BlcmEtbnVldm8uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map