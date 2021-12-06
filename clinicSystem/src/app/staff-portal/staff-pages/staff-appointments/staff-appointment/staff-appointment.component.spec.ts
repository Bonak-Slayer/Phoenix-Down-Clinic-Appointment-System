import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAppointmentComponent } from './staff-appointment.component';

describe('StaffAppointmentComponent', () => {
  let component: StaffAppointmentComponent;
  let fixture: ComponentFixture<StaffAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});