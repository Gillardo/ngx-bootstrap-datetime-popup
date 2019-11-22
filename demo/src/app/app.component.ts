import { Component, ViewChild } from '@angular/core';
import { BsDropdownDirective } from 'ngx-bootstrap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
  private localValue1: Date = null;
  private showPicker1: boolean = false;
  private localValue2: Date = null;
  private showPicker2: boolean = false;
}
