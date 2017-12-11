export interface IDatetimePopupButtonOptions {
    show: boolean;
    label: string;
    cssClass: string;
}

export class DatetimePopupButtonOptions implements IDatetimePopupButtonOptions {
    show = true;
    label = '';
    cssClass = 'btn btn-secondary btn-sm';

    constructor(label: string) {
        this.label = label;
    }
}
