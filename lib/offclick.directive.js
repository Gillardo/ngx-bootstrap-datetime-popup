"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let OffClickDirective = class OffClickDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.offClick = new core_1.EventEmitter();
    }
    ngOnInit() {
        this.eventHandler = ($event) => {
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
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OffClickDirective.prototype, "offClick", void 0);
OffClickDirective = __decorate([
    core_1.Directive({
        selector: '[offClick]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], OffClickDirective);
exports.OffClickDirective = OffClickDirective;
//# sourceMappingURL=offclick.directive.js.map