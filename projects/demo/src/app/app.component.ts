import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public localValue1: Date = null;
  public showPicker1 = false;
  public localValue2: Date = null;
  public showPicker2 = false;
  public localValue3: Date = null;
  public showPicker3 = false;
}
