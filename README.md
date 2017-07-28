# ngx-bootstrap-datetime-popup
Date and time popup picker using ngx-bootstrap library

Simple example in demo folder, found [here](https://rawgit.com/Gillardo/ngx-bootstrap-datetime-popup/master/demo/src/index.html)

To use the component, import the `DatetimePopupModule` via your .ts code, and add it to your modules

```
import { DatetimePopupModule } from 'ngx-bootstrap-datetime-popup';
```

Now add the component to your HTML.

```
<datetime-popup [(value)]="myDate"></datetime-popup>
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
