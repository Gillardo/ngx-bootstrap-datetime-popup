import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { NgxBootstrapDatetimePopupComponent } from './ngx-bootstrap-datetime-popup.component';

describe('NgxBootstrapDatetimePopupComponent', () => {
  let component: NgxBootstrapDatetimePopupComponent;
  let fixture: ComponentFixture<NgxBootstrapDatetimePopupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBootstrapDatetimePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapDatetimePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
