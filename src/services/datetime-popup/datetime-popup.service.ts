import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DatetimePopupService {
  public autoCloseSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
}
