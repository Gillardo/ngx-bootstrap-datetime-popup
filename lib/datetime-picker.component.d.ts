import { EventEmitter, OnInit } from '@angular/core';
export declare class DatetimePickerComponent implements OnInit {
    value: Date;
    valueChange: EventEmitter<{}>;
    showPicker: boolean;
    showDate: boolean;
    showTime: boolean;
    className: string;
    ngOnInit(): void;
    offClick(): void;
    onDateChange(val: Date): void;
    onTimeChange(): void;
}
