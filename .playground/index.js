"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is only for local test
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_2 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ngx_bootstrap_datetime_popup_1 = require("ngx-bootstrap-datetime-popup");
var AppComponent = (function () {
    function AppComponent() {
        this.showPicker = false;
        this.myDate = new Date();
        this.showDate = true;
        this.showTime = true;
        this.closeButton = { show: true, label: 'Close Me!', cssClass: 'btn btn-sm btn-primary' };
    }
    AppComponent.prototype.onTogglePicker = function () {
        if (this.showPicker === false) {
            this.showPicker = true;
        }
    };
    AppComponent.prototype.onValueChange = function (val) {
        this.myDate = val;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_2.Component({
        selector: 'my-app',
        template: "\n        <div class=\"container\">\n            <h1>ngx-bootstrap-datetime-popup</h1>\n            <div class=\"row form-group\">\n                <div class=\"col-md-6\">\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" [(ngModel)]=\"myDate\" />\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-outline-secondary\" (click)=\"onTogglePicker()\">\n                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                            </button>\n                        </span>\n                    </div>\n                    <datetime-popup [value]=\"myDate\" (valueChange)=\"onValueChange($event)\"\n                                    [(showPopup)]=\"showPicker\"\n                                    [showDate]=\"showDate\"\n                                    [showTime]=\"showTime\"\n                                    [closeButton]=\"closeButton\"\n                                    ></datetime-popup>\n                </div>\n            </div>\n            Formatted with pipe: {{ myDate | date: 'dd-MM-yyyy HH:mm:ss' }}\n        </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            ngx_bootstrap_datetime_popup_1.DatetimePopupModule
        ],
        declarations: [
            AppComponent
        ],
        bootstrap: [
            AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=index.js.map