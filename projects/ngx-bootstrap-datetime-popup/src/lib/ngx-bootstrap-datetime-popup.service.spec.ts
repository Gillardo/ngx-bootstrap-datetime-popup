import { TestBed } from '@angular/core/testing';

import { DatetimePopupService } from './ngx-bootstrap-datetime-popup.service';

describe('NgxBootstrapDatetimePopupService', () => {
  let service: DatetimePopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatetimePopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
