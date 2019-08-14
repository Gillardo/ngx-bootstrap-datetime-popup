import {
  Component,
  ElementRef,
  EventEmitter, HostListener,
  Input,
  OnChanges,
  Output,
  ViewChild
} from '@angular/core';
import { IDatetimePopupButtonOptions } from '../../interfaces';
import { BsDropdownDirective } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'datetime-popup',
  templateUrl: './datetime-popup.component.html'
})

export class DatetimePopupComponent implements OnChanges {

  @ViewChild('dropdown', { static: true })
  public dropdown: BsDropdownDirective;

  @Input()
  public appendTo: string = undefined;

  @Input()
  public value: Date;

  @Output()
  public valueChange = new EventEmitter();

  @Input()
  public showPopup: boolean = false;

  @Output()
  public showPopupChange = new EventEmitter();

  @Input()
  public showDate: boolean = true;

  @Input()
  public showTime: boolean = true;

  @Input()
  public showWeeks: boolean = false;

  @Input()
  public showMeridian: boolean = false;

  @Input()
  public showSeconds: boolean = false;

  @Input()
  public datepickerMode: string = 'day';

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

  @Input()
  public minuteStep: number = 5;

  @Input()
  public hourStep: number = 1;

  @Input()
  public secondsStep: number = 1;

  public localValue: Date = null;
  public isOpening: boolean = false;
  public isDropUp: boolean = false;

  constructor(private elementRef: ElementRef) {

  }

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

    // toggle if open
    if (changes.showPopup && this.dropdown) {
      if (changes.showPopup.currentValue === true && this.dropdown.isOpen === false) {
        this.onWindowScroll();
        this.dropdown.show();
      } else if (changes.showPopup.currentValue === false && this.dropdown.isOpen === true) {
        this.dropdown.hide();
      }
    }
  }

  @HostListener('window:scroll', [])
  @HostListener('window:resize', [])
  public onWindowScroll() {
    const nativeEl: HTMLElement = this.elementRef.nativeElement;
    const clientRect: ClientRect = nativeEl.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const offsetTop = clientRect.top + window.pageYOffset;
    const height = clientRect.height;
    const dropdownEl: HTMLElement = nativeEl.children.item(0) as HTMLElement;
    const menuEl: HTMLElement = dropdownEl.children.length > 0 ? dropdownEl.children.item(0) as HTMLElement : null;
    let menuHeight = this.showDate && this.showTime ? 402 : this.showDate ? 300 : 102;

    if (menuEl != null) {
      // get the style
      const display = menuEl.style.display;
      menuEl.style.display = 'block';

      menuHeight = menuEl.getBoundingClientRect().height;
      menuEl.style.display = display;
    }

    this.isDropUp = ((offsetTop + height + menuHeight) > (scrollTop + document.documentElement.clientHeight));
  }

  public onOpenChange() {
    if (this.dropdown.isOpen === true) {
      this.isOpening = true;

      setTimeout(() => this.isOpening = false, 250);
    }
  }

  public onHidden() {
    this.showPopup = false;
    this.showPopupChange.emit(false);
  }

  public onNow() {
    this.localValue = new Date();
    this.onPickerChange('timepicker');
  }

  public onClear() {
    this.valueChange.emit(null);
  }

  public onClose() {
    this.showPopup = false;
    this.showPopupChange.emit(false);
  }

  public onPickerChange(picker: string) {
    if (this.isOpening === true) {
      return;
    }

    if (picker === 'datepicker' && this.value != null) {
      const hours = this.value.getHours();
      const minutes = this.value.getMinutes();
      const seconds = this.value.getSeconds();
      const milliseconds = this.value.getMilliseconds();

      this.localValue.setHours(hours, minutes, seconds, milliseconds);
    }

    this.valueChange.emit(this.localValue);

    if (this.showDate === true && this.showTime === false) {
      this.onHidden();
    }
  }
}
