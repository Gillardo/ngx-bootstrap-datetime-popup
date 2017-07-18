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
const core_1 = require("@angular/core");
let DatetimePopupComponent = class DatetimePopupComponent {
    constructor() {
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
    offClick() {
        this.showPopup = false;
        this.showPopupChange.emit(false);
    }
    onNow() {
        this.onDateChange(new Date());
    }
    onClear() {
        this.onDateChange(null);
    }
    onDateChange(val) {
        this.valueChange.emit(val);
    }
    onTimeChange() {
        this.valueChange.emit(this.value);
    }
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
        template: `
        <div class="dropdown" [ngClass]="{ 'show': showPopup }">
            <ul class="dropdown-menu" role="menu" (offClick)="offClick($event)">
                <li class="my-2 mx-2">
                    <datepicker *ngIf="showDate" [(ngModel)]="value" 
                                (selectionDone)="onDateChange($event)"
                                [showWeeks]="showWeeks"
                                [datepickerMode]="datepickerMode"
                                [minDate]="minDate"
                                [maxDate]="maxDate"
                                [dateDisabled]="dateDisabled"></datepicker>
                    <timepicker *ngIf="showTime" [(ngModel)]="value" (change)="onTimeChange()"></timepicker>
                </li>
                <li class="mx-2 mb-2">
                    <span class="btn-group pull-left">
                        <button class="btn btn-secondary btn-sm" (click)="onNow()">Now</button>
                        <button class="btn btn-secondary btn-sm" (click)="onClear()">Clear</button>
                    </span>
                    <span class="btn-group pull-right">
                        <button class="btn btn-secondary btn-sm" (click)="offClick()">Close</button>
                    </span>
                </li>
            </ul>
        </div>
    `
    })
], DatetimePopupComponent);
exports.DatetimePopupComponent = DatetimePopupComponent;
//# sourceMappingURL=datetime-popup.component.js.map