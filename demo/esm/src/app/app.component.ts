import { Component } from '@angular/core';

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
            <div *ngIf="isValid()">
                Formatted with pipe: {{ myDate | date: 'dd-MM-yyyy HH:mm:ss' }}    
            </div>
        </div>
    `
})

export class AppComponent {

  public showPicker = false;
  public myDate: Date = new Date();
  public showDate = true;
  public showTime = true;
  public closeButton: any = { show: true, label: 'Close Me!', cssClass: 'btn btn-sm btn-primary' };

  public onTogglePicker() {
    if (this.showPicker === false) {
      this.showPicker = true;
    }
  }

  public onValueChange(val: Date) {
    this.myDate = val;
  }

  public isValid(): boolean {
    return this.myDate && (typeof this.myDate !== 'string') && !isNaN(this.myDate.getTime());
  }
}
