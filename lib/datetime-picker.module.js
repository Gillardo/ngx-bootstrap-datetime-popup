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
var datepicker_1 = require('ngx-bootstrap/datepicker');
var timepicker_1 = require('ngx-bootstrap/timepicker');
var datetime_picker_component_1 = require('./datetime-picker.component');
var offclick_directive_1 = require('./offclick.directive');
var DatetimePickerModule = (function () {
    function DatetimePickerModule() {
    }
    DatetimePickerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                datepicker_1.DatepickerModule,
                timepicker_1.TimepickerModule
            ],
            declarations: [
                datetime_picker_component_1.DatetimePickerComponent,
                offclick_directive_1.OffClickDirective
            ],
            exports: [
                datetime_picker_component_1.DatetimePickerComponent
            ],
            entryComponents: [
                datetime_picker_component_1.DatetimePickerComponent
            ],
            providers: [
                datepicker_1.DatepickerConfig,
                timepicker_1.TimepickerConfig
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DatetimePickerModule);
    return DatetimePickerModule;
}());
exports.DatetimePickerModule = DatetimePickerModule;
//# sourceMappingURL=datetime-picker.module.js.map