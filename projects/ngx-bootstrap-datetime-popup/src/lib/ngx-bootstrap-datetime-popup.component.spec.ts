import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DatetimePopupComponent } from './ngx-bootstrap-datetime-popup.component';

describe('NgxBootstrapDatetimePopupComponent', () => {
  let component: DatetimePopupComponent;
  let fixture: ComponentFixture<DatetimePopupComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DatetimePopupComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
