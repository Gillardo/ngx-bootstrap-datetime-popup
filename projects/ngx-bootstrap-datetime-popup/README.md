## NOTES
- DO NOT USE 5.0.0 THIS IS BROKEN!! PLEASE USE 5.0.1 WITH NGX-BOOTSTRAP 5.0.0.  If you require ngx-bootstrap v4+ then continue to use 4.3.0+
- VERSION 6.0.0+ of this library uses a Library template built from Angular/Cli so it will be compatible with Ivy  


# ngx-bootstrap-datetime-popup
Date and time popup picker using ngx-bootstrap library

This is currently a very simple date time picker, with only the features i needed for a project that i use this in.  Happy to add more features

![image](https://user-images.githubusercontent.com/7406381/32741384-fc825748-c89d-11e7-94d9-063cd36bcac9.png)
![image](https://user-images.githubusercontent.com/7406381/32741493-5668de62-c89e-11e7-98ce-1f718a98c3f8.png)
![image](https://user-images.githubusercontent.com/7406381/32741456-327c57f4-c89e-11e7-9f16-9023e4df5500.png)

Simple example in demo folder, which can also be found on github pages at https://gillardo.github.io/ngx-bootstrap-datetime-popup/

To use the component, import the `DatetimePopupModule` via your .ts code, and add it to your modules using `forRoot()` method.  You must also import the modules `datepicker`, `timepicker` and `dropdown` from `ngx-bootstrap` as there are services that are used

```
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgxBootstrapDatetimePopupModule } from 'ngx-bootstrap-datetime-popup';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    NgxBootstrapDatetimePopupModule.forRoot()
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  
}

```

Now add the component to your HTML.

```
<ngx-bootstrap-datetime-popup [(value)]="myDate"></ngx-bootstrap-datetime-popup>
```

I have now added code so you can change attributes on the "Clear", "Now" and "Close" buttons.  in order to do this, you must use an object that implements the same properties as the INgxBootstrapDatetimePopupButtonOptions interface

```
export interface INgxBootstrapDatetimePopupButtonOptions {
    // should the button be shown
    show: boolean;

    // What text label should it be given
    label: string;

    // css classes to be used, default is 'btn btn-sm btn-secondary'
    cssClass: string;
}
```

The component accepts 3 inputs `closeButton`, `clearButton` and `nowButton`, so you can bind your options like so:

```
<ngx-bootstrap-datetime-popup [(value)]="myDate" [closeButton]="myCloseOptions"></ngx-bootstrap-datetime-popup>
```

Since i dont really like the style of the ngx-bootstrap datePicker, you can override the css like any other style, here is an example

This css also overrides the glyphicon icons that are no longer used in bootstrap 4.

```
ngx-bootstrap-datetime-popup.dropdown .glyphicon {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

ngx-bootstrap-datetime-popup.dropdown timepicker {
    display: flex;
    justify-content: center;
}

ngx-bootstrap-datetime-popup.dropdown .bg-faded {
    border:0;
    background-color: #fff;
}

ngx-bootstrap-datetime-popup.dropdown datepicker button {
    border:0;
    background-color: #fff;
}

ngx-bootstrap-datetime-popup.dropdown datepicker button.active {
    background-color: #ddd;
}

ngx-bootstrap-datetime-popup.dropdown .glyphicon.glyphicon-remove-circle:before {
    content: "\f05c";
}

ngx-bootstrap-datetime-popup.dropdown .glyphicon.glyphicon-chevron-down:before {
    content: "\f078";
}

ngx-bootstrap-datetime-popup.dropdown .glyphicon.glyphicon-chevron-up:before {
    content: "\f077";
}

ngx-bootstrap-datetime-popup.dropdown .glyphicon.glyphicon-chevron-left:before {
    content: "\f053";
}

ngx-bootstrap-datetime-popup.dropdown .glyphicon.glyphicon-chevron-right:before {
    content: "\f054";
}

ngx-bootstrap-datetime-popup.dropdown .glyphicon.hidden {
    display: none !important;
}
```

If you want more features please create a PR as i am a little struck for time at the moment.  Happy coding!
