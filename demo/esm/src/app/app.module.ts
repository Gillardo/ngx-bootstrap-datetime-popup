import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { DatetimePopupModule } from '../../lib';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    DatetimePopupModule.forRoot()
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
