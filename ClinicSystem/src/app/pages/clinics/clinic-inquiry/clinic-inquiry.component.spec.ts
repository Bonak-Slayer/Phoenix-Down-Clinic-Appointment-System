import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicInquiryComponent } from './clinic-inquiry.component';

describe('ClinicInquiryComponent', () => {
  let component: ClinicInquiryComponent;
  let fixture: ComponentFixture<ClinicInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicInquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
