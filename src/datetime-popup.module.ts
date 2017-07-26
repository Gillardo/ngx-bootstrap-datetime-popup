import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatepickerModule, DatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TimepickerModule, TimepickerConfig } from 'ngx-bootstrap/timepicker';

import { DatetimePopupComponent } from './datetime-popup.component';
import { OffClickDirective } from './offclick.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DatepickerModule.forRoot(),
        TimepickerModule.forRoot()
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
        DatepickerConfig,
        TimepickerConfig
    ]
})

export class DatetimePopupModule {

}
