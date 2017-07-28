import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'datetime-popup',
    template: `
        <div class="dropdown" [ngClass]="{ 'show': showPopup === true }" (offClick)="offClick($event)">
            <ul class="dropdown-menu" role="menu" [ngClass]="{ 'show': showPopup === true }">
                <li class="my-2 mx-2">
                    <datepicker *ngIf="showDate" [(ngModel)]="value" 
                                (ngModelChange)="onPickerChange()"
                                [showWeeks]="showWeeks"
                                [datepickerMode]="datepickerMode"
                                [minDate]="minDate"
                                [maxDate]="maxDate"
                                [dateDisabled]="dateDisabled"></datepicker>
                    <timepicker *ngIf="showTime" [(ngModel)]="value" (ngModelChange)="onPickerChange()"></timepicker>
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

export class DatetimePopupComponent {

    @Input()
    value: Date;

    @Output()
    valueChange = new EventEmitter();

    @Input()
    showPopup = false;

    @Output()
    showPopupChange = new EventEmitter();

    @Input()
    showDate = true;

    @Input()
    showTime = true;

    @Input()
    showWeeks = false;

    @Input()
    datepickerMode: string = 'day';

    @Input()
    initDate: Date = null;

    @Input()
    minDate: Date = null;

    @Input()
    maxDate: Date = null;

    @Input()
    dateDisabled: any[] = [];

    offClick() {
        this.showPopup = false;
        this.showPopupChange.emit(false);
    }

    onNow() {
        this.value = new Date();
        this.valueChange.emit(this.value);
    }

    onClear() {
        this.value = null;
        this.valueChange.emit(this.value);
    }

    onPickerChange() {
        this.valueChange.emit(this.value);
    }
}
