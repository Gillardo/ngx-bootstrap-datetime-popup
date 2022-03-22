import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BsDatepickerConfig,
  BsDatepickerModule,
} from 'ngx-bootstrap/datepicker';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { DatetimePopupComponent } from './ngx-bootstrap-datetime-popup.component';
import { OffClickDirective } from './offclick.directive';

@NgModule({
  declarations: [DatetimePopupComponent, OffClickDirective],
  imports: [
    CommonModule,
    FormsModule,
    TimepickerModule,
    BsDatepickerModule,
    BsDropdownModule,
  ],
  exports: [DatetimePopupComponent],
  providers: [BsDatepickerConfig, BsDropdownConfig],
})
export class DatetimePopupModule {}
