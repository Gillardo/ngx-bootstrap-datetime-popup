import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import { DatetimePopupModule } from '../../lib/datetime-popup.module';

import {AppComponent}  from './app.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        DatetimePopupModule
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
