import {
  Component,
  ElementRef,
  EventEmitter, HostListener,
  Input,
  OnChanges,
  Output,
  ViewChild
} from '@angular/core';
import {
  BsDatepickerConfig,
  BsDatepickerViewMode,
} from 'ngx-bootstrap/datepicker';
import { BsDropdownDirective } from 'ngx-bootstrap/dropdown';
import { IDatetimePopupButtonOptions } from './ngx-bootstrap-datetime-popup-button-options.interface';

@Component({
  selector: 'datetime-popup',
  templateUrl: './ngx-bootstrap-datetime-popup.component.html',
  styles: [],
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
  public showMeridian = false;

  @Input()
  public showSeconds = false;

  @Input()
  public datepickerMode: BsDatepickerViewMode = 'day';

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
  public minuteStep = 5;

  @Input()
  public hourStep = 1;

  @Input()
  public secondsStep = 1;

  public localValue: Date = null;
  public isOpening = false;
  public isDropUp = false;
  public datepickerConfig: BsDatepickerConfig;

  constructor(private elementRef: ElementRef) {}

  public ngOnChanges(changes: any) {
    this.datepickerConfig = {
      minMode: this.datepickerMode,
      showWeekNumbers: this.showWeeks,
    } as BsDatepickerConfig;
    if (!this.nowButton) {
      this.nowButton = {
        show: true,
        label: 'Now',
        cssClass: 'btn btn-secondary btn-sm',
      };
    }

    if (!this.clearButton) {
      this.clearButton = {
        show: true,
        label: 'Clear',
        cssClass: 'btn btn-secondary btn-sm',
      };
    }

    if (!this.closeButton) {
      this.closeButton = {
        show: true,
        label: 'Close',
        cssClass: 'btn btn-secondary btn-sm',
      };
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

    if (changes.showPopup && this.dropdown) {
      if (changes.showPopup.currentValue === true) {
        this.dropdown.show();
      } else if (changes.showPopup.currentValue === false) {
        this.dropdown.hide();
      }
    }
  }

  @HostListener('window:scroll', [])
  @HostListener('window:resize', [])
  public onWindowScroll() {
    const nativeEl: HTMLElement = this.elementRef.nativeElement;
    const clientRect: ClientRect = nativeEl.getBoundingClientRect();
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const offsetTop = clientRect.top + window.pageYOffset;
    const height = clientRect.height;
    const dropdownEl: HTMLElement = nativeEl.children.item(0) as HTMLElement;
    const menuEl: HTMLElement =
      dropdownEl.children.length > 0
        ? (dropdownEl.children.item(0) as HTMLElement)
        : null;
    let menuHeight =
      this.showDate && this.showTime ? 402 : this.showDate ? 300 : 102;

    if (menuEl != null) {
      // get the style
      const display = menuEl.style.display;
      menuEl.style.display = 'block';

      menuHeight = menuEl.getBoundingClientRect().height;
      menuEl.style.display = display;
    }

    if (offsetTop - menuHeight <= 0) {
      this.isDropUp = false;
    } else {
      this.isDropUp =
        offsetTop + height + menuHeight >
        scrollTop + document.documentElement.clientHeight;
    }
  }

  public onOpenChange(opened: boolean) {
    if (opened === true) {
      this.isOpening = true;
      this.onWindowScroll();
      this.dropdown.show();

      setTimeout(() => (this.isOpening = false), 250);
    } else {
      this.showPopupChange.emit(false);
    }
  }

  public onNow() {
    this.localValue = new Date();
    this.onPickerChange('timepicker');
  }

  public onClear() {
    this.valueChange.emit(null);
  }

  public onClose() {
    this.showPopupChange.emit(false);
  }

  public onOffClick($event: any) {
    this.showPopupChange.emit(false);
  }

  public onPickerChange(picker: string, event?: Date) {
    if (this.isOpening === true) {
      return;
    }

    if (picker === 'datepicker' && event !== null) {
      this.localValue = event;
    }

    this.value = this.localValue;
    this.valueChange.emit(this.localValue);

    if (this.showDate === true && this.showTime === false) {
      this.dropdown.hide();
    }
  }
}
