import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatepickerModule, DatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TimepickerModule, TimepickerConfig, TimepickerActions } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule, BsDropdownConfig, BsDropdownState } from 'ngx-bootstrap/dropdown';

import { DatetimePopupComponent, OffClickDirective } from './components';

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
        DatepickerConfig,
        TimepickerConfig,
        TimepickerActions,
        BsDropdownConfig,
        BsDropdownState
      ]
    };
  }
}
