import { Component, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <h1>ngx-bootstrap-datetime-popup</h1>
            <div class="row form-group">
                <div class="col-md-6">
                    <div class="input-group">
                        <input class="form-control" [(ngModel)]="myDate" />
                        <span class="input-group-btn">
                            <button class="btn btn-outline-secondary" (click)="onTogglePicker()">
                                <i class="fa fa-calendar" aria-hidden="true"></i>
                            </button>
                        </span>
                    </div>
                    <datetime-popup [(value)]="myDate"
                                    [(showPopup)]="showPicker"
                                    [showDate]="showDate"
                                    [showTime]="showTime"></datetime-popup>
                </div>
            </div>
            Formatted with pipe: {{ myDate | date: 'dd-MM-yyyy HH:ss' }}
        </div>
    `
})

export class AppComponent {

    showPicker: boolean = false;
    myDate: Date = new Date();
    showDate: boolean = true;
    showTime: boolean = true;

    public constructor(
        private viewContainerRef: ViewContainerRef) {

    }

    onTogglePicker() {
        if (this.showPicker === false) {
            this.showPicker = true;
        }
    }
}
