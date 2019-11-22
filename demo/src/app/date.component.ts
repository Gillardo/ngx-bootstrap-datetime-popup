import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'input-date',
  templateUrl: './date.component.html'
})

export class DateComponent {

  @Input()
  public name: string;

  @Input()
  public showDate: boolean = true;

  @Input()
  public showTime: boolean = false;

  @Input()
  public defaultTimeEndOfDay: boolean = false;

  @Input()
  public appendTo: string = undefined;

  @Input()
  public value: Date;

  @Input()
  public minDate: Date = null;

  @Input()
  public maxDate: Date = null;

  @Input()
  public placeholder: string = '';

  @Output()
  public valueChange = new EventEmitter();

  @Input()
  public showPicker: boolean = false;

  @Output()
  public showPickerChange = new EventEmitter();

  public onBlur(value: string) {
    console.log('blur event');
  }

  public onFocus($event: any) {
    $event.stopPropagation();
    $event.preventDefault();

    this.showPicker = true;
    this.showPickerChange.emit(true);
  }

  public onChange(value: string) {
    this.valueChange.emit(value);
  }

  public onTogglePicker($event, showPicker) {
    $event.stopPropagation();
    $event.preventDefault();

    this.showPicker = showPicker;
    this.showPickerChange.emit(showPicker);
  }

  public onPopupChange(val: Date) {
    // if we're going from NULL to a DATE default the time to the end of the day
    if (this.value == null && val != null && this.defaultTimeEndOfDay) {
      val.setHours(23, 59, 59, 0);
    }

    this.valueChange.emit(val);

    if (this.showDate === true && this.showTime === false) {
      this.showPicker = false;
      this.showPickerChange.emit(false);
    }
  }
}
