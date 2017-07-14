"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var ngx_bootstrap_1 = require('ngx-bootstrap');
var ngx_bootstrap_2 = require('ngx-bootstrap');
var datetime_picker_component_js_1 = require('./datetime-picker.component.js');
var offclick_directive_js_1 = require('./offclick.directive.js');
var DatetimePickerModule = (function () {
    function DatetimePickerModule() {
    }
    DatetimePickerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ngx_bootstrap_1.DatepickerModule,
                ngx_bootstrap_2.TimepickerModule
            ],
            declarations: [
                datetime_picker_component_js_1.DatetimePickerComponent,
                offclick_directive_js_1.OffClickDirective
            ],
            exports: [
                datetime_picker_component_js_1.DatetimePickerComponent
            ],
            entryComponents: [
                datetime_picker_component_js_1.DatetimePickerComponent
            ],
            providers: [
                ngx_bootstrap_1.DatepickerConfig,
                ngx_bootstrap_2.TimepickerConfig
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DatetimePickerModule);
    return DatetimePickerModule;
}());
exports.DatetimePickerModule = DatetimePickerModule;
//# sourceMappingURL=datetime-picker.module.js.map