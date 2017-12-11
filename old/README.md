# ngx-bootstrap-datetime-popup
Date and time popup picker using ngx-bootstrap library

This is currently a very simple date time picker, with only the features i needed for a project that i use this in.  Happy to add more features

![image](https://user-images.githubusercontent.com/7406381/32741384-fc825748-c89d-11e7-94d9-063cd36bcac9.png)
![image](https://user-images.githubusercontent.com/7406381/32741493-5668de62-c89e-11e7-98ce-1f718a98c3f8.png)
![image](https://user-images.githubusercontent.com/7406381/32741456-327c57f4-c89e-11e7-9f16-9023e4df5500.png)

Simple example in demo folder, which can also be found on plunkr https://plnkr.co/edit/nYNzcgXd9Wz8pxMsPY29

To use the component, import the `DatetimePopupModule` via your .ts code, and add it to your modules, using `.forRoot` method, similar to `ngx-bootstrap`

```
import { DatetimePopupModule } from 'ngx-bootstrap-datetime-popup';
```

Now add the component to your HTML.

```
<datetime-popup [(value)]="myDate"></datetime-popup>
```

I have now added code so you can change attributes on the "Clear", "Now" and "Close" buttons.  in order to do this, you must use an object that implements the same properties as the IDatetimePopupButtonOptions interface

```
export interface IDatetimePopupButtonOptions {
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
<datetime-popup [(value)]="myDate" [closeButton]="myCloseOptions"></datetime-popup>
```

Since i dont really like the style of the ngx-bootstrap datePicker, you can override the css like any other style, here is an example

This css also overrides the glyphicon icons that are no longer used in bootstrap 4.

```
datetime-popup > .dropdown .glyphicon {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

datetime-popup > .dropdown timepicker {
    display: flex;
    justify-content: center;
}

datetime-popup > .dropdown .bg-faded {
    border:0;
    background-color: #fff;
}

datetime-popup > .dropdown datepicker button {
    border:0;
    background-color: #fff;
}

datetime-popup > .dropdown datepicker button.active {
    background-color: #ddd;
}

datetime-popup > .dropdown .glyphicon.glyphicon-remove-circle:before {
    content: "\f05c";
}

datetime-popup > .dropdown .glyphicon.glyphicon-chevron-down:before {
    content: "\f078";
}

datetime-popup > .dropdown .glyphicon.glyphicon-chevron-up:before {
    content: "\f077";
}

datetime-popup > .dropdown .glyphicon.glyphicon-chevron-left:before {
    content: "\f053";
}

datetime-popup > .dropdown .glyphicon.glyphicon-chevron-right:before {
    content: "\f054";
}

datetime-popup > .dropdown .glyphicon.hidden {
    display: none !important;
}
```

If you want more features please create a PR as i am a little struck for time at the moment.  Happy coding!
