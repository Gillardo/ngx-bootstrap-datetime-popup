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
                        <button class="btn btn-secondary" (click)="showPopup = showPopup == true ? false : true">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                        </button>
                    </span>
                </div>
    
                <datetime-popup [(value)]="myDate" [(showPopup)]="showPopup"></datetime-popup>
            </div>
        </div>
    `
})

export class AppComponent {
    myDate: Date = new Date();
    showPopup = false;
}
