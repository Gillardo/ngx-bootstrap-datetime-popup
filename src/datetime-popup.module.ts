import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DatetimePopupComponent, OffClickDirective } from './components';
import { DatetimePopupService } from './services/datetime-popup';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DatepickerModule,
    TimepickerModule,
    BsDropdownModule
  ],
  declarations: [
    DatetimePopupComponent,
    OffClickDirective
  ],
  exports: [
    DatetimePopupComponent
  ],
  entryComponents: [
    DatetimePopupComponent
  ]
})

export class DatetimePopupModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DatetimePopupModule,
      providers: [
        DatetimePopupService
      ]
    };
  }
}
