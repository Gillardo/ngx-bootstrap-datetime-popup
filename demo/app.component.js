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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.myDate = new Date();
        this.showPicker = false;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>Pick a date and time</h1>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"input-group\">\n                    <div class=\"form-control\">{{ myDate| date:'dd-MMM-yyyy HH:mm:ss'}}</div>\n    \n                    <span class=\"input-group-btn\">\n                        <button class=\"btn btn-secondary\" (click)=\"showPicker = showPicker == true ? false : true\">\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                        </button>\n                    </span>\n                </div>\n    \n                <datetime-picker [(value)]=\"myDate\" [showPicker]=\"showPicker\"></datetime-picker>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map