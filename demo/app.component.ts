import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Pick a date and time</h1>
        <div class="row">
            <div class="col-6">
                <div class="input-group">
                    <div class="form-control">{{ myDate| date:'dd-MMM-yyyy HH:mm:ss'}}</div>
    
                    <span class="input-group-btn">
                        <button class="btn btn-secondary" (click)="showPicker = showPicker == true ? false : true">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                        </button>
                    </span>
                </div>
    
                <datetime-picker [(value)]="myDate" [(showPicker)]="showPicker"></datetime-picker>
            </div>
        </div>
    `
})

export class AppComponent {
    myDate: Date = new Date();
    showPicker = false;
}
