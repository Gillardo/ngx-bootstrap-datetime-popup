/**
 * This is only for local test
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DatetimePopupModule} from 'ngx-bootstrap-datetime-popup';

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
                    <datetime-popup [value]="myDate" (valueChange)="onValueChange($event)"
                                    [(showPopup)]="showPicker"
                                    [showDate]="showDate"
                                    [showTime]="showTime"
                                    [closeButton]="closeButton"
                                    ></datetime-popup>
                </div>
            </div>
            Formatted with pipe: {{ myDate | date: 'dd-MM-yyyy HH:mm:ss' }}
        </div>
    `
})

export class AppComponent {

    showPicker = false;
    myDate: Date = new Date();
    showDate = true;
    showTime = true;
    closeButton: any = { show: true, label: 'Close Me!', cssClass: 'btn btn-sm btn-primary' };

    onTogglePicker() {
        if (this.showPicker === false) {
            this.showPicker = true;
        }
    }

    onValueChange(val: Date) {
        this.myDate = val;
    }
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        DatetimePopupModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
