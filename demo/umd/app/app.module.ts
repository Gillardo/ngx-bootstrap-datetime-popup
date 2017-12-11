import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { DatetimePopupModule } from 'DatetimePopupModule';

@NgModule({
  imports: [ CommonModule, FormsModule, BrowserModule, DatetimePopupModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
