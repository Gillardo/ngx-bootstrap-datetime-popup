import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'datetime-picker',
    template: `
        <div *ngIf="showPicker" (offClick)="offClick()" [ngClass]="className">
            <div class="wrapper">
                <datepicker *ngIf="showDate" [(ngModel)]="value" (selectionDone)="onDateChange($event)"></datepicker>
                <timepicker *ngIf="showTime" [(ngModel)]="value" (change)="onTimeChange()"></timepicker>
            </div>
        </div>
    `,
    styles: [
        `
            .datetime-picker-default {
                position: relative;
                z-index: 1000;
            }

            .datetime-picker-default > .wrapper {
                position: absolute;
                background: white;
                padding: .5rem;
                border: 1px solid #efefef;
                border-radius: .5rem;
                margin-top: 3px;
            }

            .datetime-picker-default > .wrapper > timepicker {
                display: flex;
                justify-content: center;
            }
        `
    ]
})

export class DatetimePickerComponent implements OnInit {

    @Input()
    value: Date;

    @Output()
    valueChange = new EventEmitter();

    @Input()
    showPicker = false;

    @Input()
    showDate = true;

    @Input()
    showTime = true;

    @Input()
    className = '';

    ngOnInit() {
        // setup class if empty
        if (this.className.length === 0) {
            this.className = 'datetime-picker-default';
        }
    }

    offClick() {
        this.showPicker = false;
    }

    onDateChange(val: Date) {
        this.valueChange.emit(val);
    }

    onTimeChange() {
        this.valueChange.emit(this.value);
    }
}
