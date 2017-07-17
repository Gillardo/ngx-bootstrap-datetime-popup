import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'datetime-picker',
    template: `
        <div class="dropdown" [ngClass]="{ 'show': showPicker }">
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

export class DatetimePickerComponent {

    @Input()
    value: Date;

    @Output()
    valueChange = new EventEmitter();

    @Input()
    showPicker = false;

    @Output()
    showPickerChange = new EventEmitter();

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
        this.showPicker = false;
        this.showPickerChange.emit(false);
    }

    onNow() {
        this.onDateChange(new Date());
    }

    onClear() {
        this.onDateChange(null);
    }

    onDateChange(val: Date) {
        this.valueChange.emit(val);
    }

    onTimeChange() {
        this.valueChange.emit(this.value);
    }
}
