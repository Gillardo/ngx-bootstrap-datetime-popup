import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatepickerModule, DatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TimepickerModule, TimepickerConfig } from 'ngx-bootstrap/timepicker';

import { DatetimePopupComponent } from './datetime-popup.component';
import { OffClickDirective } from './offclick.directive';
import { IDatetimePopupButtonOptions } from './button-options';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DatepickerModule,
        TimepickerModule
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
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DatetimePopupModule,
            providers: [
                DatepickerConfig,
                TimepickerConfig
            ]
        };
    }
}

export {
    IDatetimePopupButtonOptions
}
