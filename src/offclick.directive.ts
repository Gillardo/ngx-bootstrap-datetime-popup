import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
    selector: '[offClick]'
})

export class OffClickDirective implements OnInit, OnDestroy {
    @Output()
    offClick = new EventEmitter();

    eventHandler: any;

    constructor(
        private elementRef: ElementRef) {

    }

    ngOnInit() {
        this.eventHandler = ($event: any) => {
            $event.stopPropagation();
            if (!this.elementRef.nativeElement.contains($event.target)) {
                this.offClick.emit(null);
            }
        };

        document.addEventListener('mouseup', this.eventHandler);
    }

    ngOnDestroy() {
        document.removeEventListener('mouseup', this.eventHandler);
    }
}
