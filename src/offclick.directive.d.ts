import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
export declare class OffClickDirective implements OnInit, OnDestroy {
    private elementRef;
    offClick: EventEmitter<{}>;
    eventHandler: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
