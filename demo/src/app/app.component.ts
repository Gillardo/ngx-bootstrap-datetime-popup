import { Component, ViewChild } from '@angular/core';
import { BsDropdownDirective } from 'ngx-bootstrap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
  @ViewChild('dropdown', { static: true })
  public dropdown: BsDropdownDirective;

  private localValue: Date = null;
  private showPopup: boolean = false;
  private isDropUp: boolean = false;

  public onTogglePicker() {
    this.showPopup = !this.showPopup;

    if (this.showPopup === true) {
      this.dropdown.show();
    } else {
      this.dropdown.hide();
    }
  }

  public onHidden() {
    this.showPopup = false;
  }

  public onPickerChange() {
    this.onHidden();
  }
}
