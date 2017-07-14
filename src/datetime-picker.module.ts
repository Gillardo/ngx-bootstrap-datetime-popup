import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatepickerModule, DatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TimepickerModule, TimepickerConfig } from 'ngx-bootstrap/timepicker';

import { DatetimePickerComponent } from './datetime-picker.component';
import { OffClickDirective } from './offclick.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DatepickerModule,
        TimepickerModule
    ],
    declarations: [
        DatetimePickerComponent,
        OffClickDirective
    ],
    exports: [
        DatetimePickerComponent
    ],
    entryComponents: [
        DatetimePickerComponent
    ],
    providers: [
        DatepickerConfig,
        TimepickerConfig
    ]
})

export class DatetimePickerModule {

}
