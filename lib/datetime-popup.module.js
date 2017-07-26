"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var datepicker_1 = require("ngx-bootstrap/datepicker");
var timepicker_1 = require("ngx-bootstrap/timepicker");
var datetime_popup_component_1 = require("./datetime-popup.component");
var offclick_directive_1 = require("./offclick.directive");
var DatetimePopupModule = (function () {
    function DatetimePopupModule() {
    }
    DatetimePopupModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                datepicker_1.DatepickerModule.forRoot(),
                timepicker_1.TimepickerModule.forRoot()
            ],
            declarations: [
                datetime_popup_component_1.DatetimePopupComponent,
                offclick_directive_1.OffClickDirective
            ],
            exports: [
                datetime_popup_component_1.DatetimePopupComponent
            ],
            entryComponents: [
                datetime_popup_component_1.DatetimePopupComponent
            ],
            providers: [
                datepicker_1.DatepickerConfig,
                timepicker_1.TimepickerConfig
            ]
        })
    ], DatetimePopupModule);
    return DatetimePopupModule;
}());
exports.DatetimePopupModule = DatetimePopupModule;
//# sourceMappingURL=datetime-popup.module.js.map