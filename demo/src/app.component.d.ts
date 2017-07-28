import { ViewContainerRef } from '@angular/core';
export declare class AppComponent {
    private viewContainerRef;
    showPicker: boolean;
    myDate: Date;
    showDate: boolean;
    showTime: boolean;
    constructor(viewContainerRef: ViewContainerRef);
    onTogglePicker(): void;
}
