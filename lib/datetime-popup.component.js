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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DatetimePopupComponent = (function () {
    function DatetimePopupComponent() {
        this.valueChange = new core_1.EventEmitter();
        this.showPopup = false;
        this.showPopupChange = new core_1.EventEmitter();
        this.showDate = true;
        this.showTime = true;
        this.showWeeks = false;
        this.datepickerMode = 'day';
        this.initDate = null;
        this.minDate = null;
        this.maxDate = null;
        this.dateDisabled = [];
    }
    DatetimePopupComponent.prototype.offClick = function () {
        this.showPopup = false;
        this.showPopupChange.emit(false);
    };
    DatetimePopupComponent.prototype.onNow = function () {
        this.value = new Date();
        this.valueChange.emit(this.value);
    };
    DatetimePopupComponent.prototype.onClear = function () {
        this.value = null;
        this.valueChange.emit(this.value);
    };
    DatetimePopupComponent.prototype.onPickerChange = function () {
        this.valueChange.emit(this.value);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], DatetimePopupComponent.prototype, "value", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DatetimePopupComponent.prototype, "valueChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatetimePopupComponent.prototype, "showPopup", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DatetimePopupComponent.prototype, "showPopupChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatetimePopupComponent.prototype, "showDate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatetimePopupComponent.prototype, "showTime", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatetimePopupComponent.prototype, "showWeeks", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatetimePopupComponent.prototype, "datepickerMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], DatetimePopupComponent.prototype, "initDate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], DatetimePopupComponent.prototype, "minDate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], DatetimePopupComponent.prototype, "maxDate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DatetimePopupComponent.prototype, "dateDisabled", void 0);
    DatetimePopupComponent = __decorate([
        core_1.Component({
            selector: 'datetime-popup',
            template: "\n        <div class=\"dropdown\" [ngClass]=\"{ 'show': showPopup === true }\" (offClick)=\"offClick($event)\">\n            <ul class=\"dropdown-menu\" role=\"menu\" [ngClass]=\"{ 'show': showPopup === true }\">\n                <li class=\"my-2 mx-2\">\n                    <datepicker *ngIf=\"showDate\" [(ngModel)]=\"value\" \n                                (ngModelChange)=\"onPickerChange()\"\n                                [showWeeks]=\"showWeeks\"\n                                [datepickerMode]=\"datepickerMode\"\n                                [minDate]=\"minDate\"\n                                [maxDate]=\"maxDate\"\n                                [dateDisabled]=\"dateDisabled\"></datepicker>\n                    <timepicker *ngIf=\"showTime\" [(ngModel)]=\"value\" (ngModelChange)=\"onPickerChange()\"></timepicker>\n                </li>\n                <li class=\"mx-2 mb-2\">\n                    <span class=\"btn-group pull-left\">\n                        <button class=\"btn btn-secondary btn-sm\" (click)=\"onNow()\">Now</button>\n                        <button class=\"btn btn-secondary btn-sm\" (click)=\"onClear()\">Clear</button>\n                    </span>\n                    <span class=\"btn-group pull-right\">\n                        <button class=\"btn btn-secondary btn-sm\" (click)=\"offClick()\">Close</button>\n                    </span>\n                </li>\n            </ul>\n        </div>\n    "
        })
    ], DatetimePopupComponent);
    return DatetimePopupComponent;
}());
exports.DatetimePopupComponent = DatetimePopupComponent;
//# sourceMappingURL=datetime-popup.component.js.map