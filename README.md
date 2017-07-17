# ngx-bootstrap-datetime-picker
Date and time picker using ngx-bootstrap library

To use the component, import the `DateTimePickerModule` via your .ts code, and add it to your modules

```
import { DateTimePickerModule } from 'ngx-bootstrap-datetime-picker';
```

Now add the component to your HTML.

```
<datetime-picker [(value)]="myDate"></datetime-picker>
```

Since i dont really like the style of the ngx-bootstrap datePicker, you can override the css like any other style, here is an example, which can be found in the demo folder.

This css also overrides the glyphicon icons that are no longer used in bootstrap 4.

```
datetime-picker > .dropdown .glyphicon {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

datetime-picker > .dropdown timepicker {
    display: flex;
    justify-content: center;
}

datetime-picker > .dropdown .bg-faded {
    border:0;
    background-color: #fff;
}

datetime-picker > .dropdown datepicker button {
    border:0;
    background-color: #fff;
}

datetime-picker > .dropdown datepicker button.active {
    background-color: #ddd;
}

datetime-picker > .dropdown .glyphicon.glyphicon-remove-circle:before {
    content: "\f05c";
}

datetime-picker > .dropdown .glyphicon.glyphicon-chevron-down:before {
    content: "\f078";
}

datetime-picker > .dropdown .glyphicon.glyphicon-chevron-up:before {
    content: "\f077";
}

datetime-picker > .dropdown .glyphicon.glyphicon-chevron-left:before {
    content: "\f053";
}

datetime-picker > .dropdown .glyphicon.glyphicon-chevron-right:before {
    content: "\f054";
}

datetime-picker > .dropdown .glyphicon.hidden {
    display: none !important;
}
```

If you want more features please create a PR as i am a little struck for time at the moment.  Happy coding!
