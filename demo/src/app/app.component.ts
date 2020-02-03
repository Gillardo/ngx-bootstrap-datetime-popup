import { Component, ViewChild } from '@angular/core';
import { BsDropdownDirective } from 'ngx-bootstrap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
  public localValue1: Date = null;
  public showPicker1: boolean = false;
  public localValue2: Date = null;
  public showPicker2: boolean = false;
  public localValue3: Date = null;
  public showPicker3: boolean = false;
}
