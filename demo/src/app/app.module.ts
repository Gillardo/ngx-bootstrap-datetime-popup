import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DatetimePopupModule } from '../../../dist';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      DatepickerModule.forRoot(),
      TimepickerModule.forRoot(),
      BsDropdownModule.forRoot(),
      DatetimePopupModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}
