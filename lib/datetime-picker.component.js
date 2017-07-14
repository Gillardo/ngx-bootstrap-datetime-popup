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
var DatetimePickerComponent = (function () {
    function DatetimePickerComponent() {
        this.valueChange = new core_1.EventEmitter();
        this.showPicker = false;
        this.showDate = true;
        this.showTime = true;
        this.className = '';
    }
    DatetimePickerComponent.prototype.ngOnInit = function () {
        if (this.className.length === 0) {
            this.className = 'datetime-picker-default';
        }
    };
    DatetimePickerComponent.prototype.offClick = function () {
        this.showPicker = false;
    };
    DatetimePickerComponent.prototype.onDateChange = function (val) {
        this.valueChange.emit(val);
    };
    DatetimePickerComponent.prototype.onTimeChange = function () {
        this.valueChange.emit(this.value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date)
    ], DatetimePickerComponent.prototype, "value", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DatetimePickerComponent.prototype, "valueChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatetimePickerComponent.prototype, "showPicker", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatetimePickerComponent.prototype, "showDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatetimePickerComponent.prototype, "showTime", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatetimePickerComponent.prototype, "className", void 0);
    DatetimePickerComponent = __decorate([
        core_1.Component({
            selector: 'datetime-picker',
            template: "\n        <div *ngIf=\"showPicker\" (offClick)=\"offClick()\" [ngClass]=\"className\">\n            <div class=\"wrapper\">\n                <datepicker *ngIf=\"showDate\" [(ngModel)]=\"value\" (selectionDone)=\"onDateChange($event)\"></datepicker>\n                <timepicker *ngIf=\"showTime\" [(ngModel)]=\"value\" (change)=\"onTimeChange()\"></timepicker>\n            </div>\n        </div>\n    ",
            styles: [
                "\n            .datetime-picker-default {\n                position: relative;\n                z-index: 1000;\n            }\n\n            .datetime-picker-default > .wrapper {\n                position: absolute;\n                background: white;\n                padding: .5rem;\n                border: 1px solid #efefef;\n                border-radius: .5rem;\n                margin-top: 3px;\n            }\n\n            .datetime-picker-default > .wrapper > timepicker {\n                display: flex;\n                justify-content: center;\n            }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DatetimePickerComponent);
    return DatetimePickerComponent;
}());
exports.DatetimePickerComponent = DatetimePickerComponent;
//# sourceMappingURL=datetime-picker.component.js.map