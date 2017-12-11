import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatepickerModule, DatepickerConfig } from 'ngx-bootstrap';
import { TimepickerModule, TimepickerConfig } from 'ngx-bootstrap/timepicker';

import { DatetimePopupComponent, OffClickDirective } from './components';

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
    ]
})

export class DatetimePopupModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: DatetimePopupModule,
            providers: [
                DatepickerConfig,
                TimepickerConfig
            ]
        };
    }
}
