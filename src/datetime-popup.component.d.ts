/// <reference types="core-js" />
import { EventEmitter } from '@angular/core';
export declare class DatetimePopupComponent {
    value: Date;
    valueChange: EventEmitter<{}>;
    showPopup: boolean;
    showPopupChange: EventEmitter<{}>;
    showDate: boolean;
    showTime: boolean;
    showWeeks: boolean;
    datepickerMode: string;
    initDate: Date;
    minDate: Date;
    maxDate: Date;
    dateDisabled: any[];
    offClick(): void;
    onNow(): void;
    onClear(): void;
    onDateChange(val: Date): void;
    onTimeChange(): void;
}
