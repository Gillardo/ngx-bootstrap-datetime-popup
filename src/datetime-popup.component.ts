import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {DatetimePopupButtonOptions, IDatetimePopupButtonOptions} from './button-options';

@Component({
    selector: 'datetime-popup',
    template: `
        <div class="dropdown" [ngClass]="{ 'show': showPopup === true }" (offClick)="offClick($event)">
            <ul class="dropdown-menu" role="menu" [ngClass]="{ 'show': showPopup === true }">
                <li class="my-2 mx-2">
                    <datepicker *ngIf="showDate" 
                                [(ngModel)]="localValue" 
                                (ngModelChange)="onPickerChange()"
                                [showWeeks]="showWeeks"
                                [datepickerMode]="datepickerMode"
                                [minDate]="minDate"
                                [maxDate]="maxDate"
                                [dateDisabled]="dateDisabled"></datepicker>
                    <timepicker *ngIf="showTime" 
                                [(ngModel)]="localValue" 
                                (ngModelChange)="onPickerChange()"></timepicker>
                </li>
                <li class="mx-2 mb-2">
                    <span class="btn-group pull-left">
                        <button (click)="onNow()" 
                                *ngIf="nowButton.show" 
                                [ngClass]="nowButton.cssClass">{{ nowButton.label }}</button>
                        <button (click)="onClear()" 
                                *ngIf="clearButton.show" 
                                [ngClass]="clearButton.cssClass">{{ clearButton.label }}</button>
                    </span>
                    <span class="btn-group pull-right">
                        <button (click)="offClick()" 
                                *ngIf="closeButton.show" 
                                [ngClass]="closeButton.cssClass">{{ closeButton.label }}</button>
                    </span>
                </li>
            </ul>
        </div>
    `
})

export class DatetimePopupComponent implements OnChanges {

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
    datepickerMode = 'day';

    @Input()
    initDate: Date = null;

    @Input()
    minDate: Date = null;

    @Input()
    maxDate: Date = null;

    @Input()
    dateDisabled: any[] = [];

    @Input()
    nowButton: IDatetimePopupButtonOptions;

    @Input()
    clearButton: IDatetimePopupButtonOptions;

    @Input()
    closeButton: IDatetimePopupButtonOptions;

    localValue: Date = null;

    ngOnChanges(changes: any) {
        if (!this.nowButton) {
            this.nowButton = new DatetimePopupButtonOptions('Now');
        }

        if (!this.clearButton) {
            this.clearButton = new DatetimePopupButtonOptions('Clear');
        }

        if (!this.closeButton) {
            this.closeButton = new DatetimePopupButtonOptions('Close');
        }

        // user maybe typing a value into an input box, so would come in as string
        if (typeof this.value === 'string') {
            // check if the string is a valid date
            if (!isNaN(new Date(this.value).getTime())) {
                this.localValue = new Date(this.value);
            }
        } else if (this.value) {
            this.localValue = this.value;
        }
    }

    offClick() {
        this.showPopup = false;
        this.showPopupChange.emit(false);
    }

    onNow() {
        this.localValue = new Date();
        this.onPickerChange();
    }

    onClear() {
        this.valueChange.emit(null);
    }

    onPickerChange() {
        this.valueChange.emit(this.localValue);

        // close when value changed if only using date
        if (this.showDate === true && this.showTime === false) {
            this.offClick();
        }
    }
}
