import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { IDatetimePopupButtonOptions } from '../../interfaces/button-options';

@Component({
  selector: 'datetime-popup',
  templateUrl: './datetime-popup.component.html'
})

export class DatetimePopupComponent implements OnChanges {

  @Input()
  public value: Date;

  @Output()
  public valueChange = new EventEmitter();

  @Input()
  public showPopup = false;

  @Output()
  public showPopupChange = new EventEmitter();

  @Input()
  public showDate = true;

  @Input()
  public showTime = true;

  @Input()
  public showWeeks = false;

  @Input()
  public datepickerMode = 'day';

  @Input()
  public initDate: Date = null;

  @Input()
  public minDate: Date = null;

  @Input()
  public maxDate: Date = null;

  @Input()
  public dateDisabled: any[] = [];

  @Input()
  public nowButton: IDatetimePopupButtonOptions;

  @Input()
  public clearButton: IDatetimePopupButtonOptions;

  @Input()
  public closeButton: IDatetimePopupButtonOptions;

  public localValue: Date = null;

  public ngOnChanges(changes: any) {
    if (!this.nowButton) {
      this.nowButton = { show: true, label: 'Now', cssClass: 'btn btn-secondary btn-sm'};
    }

    if (!this.clearButton) {
      this.clearButton = { show: true, label: 'Clear', cssClass: 'btn btn-secondary btn-sm'};
    }

    if (!this.closeButton) {
      this.closeButton = { show: true, label: 'Close', cssClass: 'btn btn-secondary btn-sm'};
    }

    // user maybe typing a value into an input box, so would come in as string
    if (typeof this.value === 'string') {
      // check if the string is a valid date
      if (!isNaN(new Date(this.value).getTime())) {
        this.localValue = new Date(this.value);
      }
    } else if (this.value) {
      this.localValue = this.value;
    }
  }

  public offClick() {
    this.showPopup = false;
    this.showPopupChange.emit(false);
  }

  public onNow() {
    this.localValue = new Date();
    this.onPickerChange();
  }

  public onClear() {
    this.valueChange.emit(null);
  }

  public onPickerChange() {
    this.valueChange.emit(this.localValue);

    // close when value changed if only using date
    if (this.showDate === true && this.showTime === false) {
      this.offClick();
    }
  }
}
