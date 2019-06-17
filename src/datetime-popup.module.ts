import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { DatepickerModule, DatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TimepickerModule, TimepickerConfig, TimepickerActions, TimepickerStore } from 'ngx-bootstrap/timepicker';
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
  ],
  providers: [
    ComponentLoaderFactory,
    PositioningService,
    DatepickerConfig,
    TimepickerConfig,
    TimepickerActions,
    TimepickerStore,
    BsDropdownConfig,
    BsDropdownState
  ]
})

export class DatetimePopupModule {

}
