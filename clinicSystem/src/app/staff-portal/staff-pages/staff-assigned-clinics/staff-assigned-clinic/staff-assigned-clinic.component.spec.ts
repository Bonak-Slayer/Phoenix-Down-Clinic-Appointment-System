import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAssignedClinicComponent } from './staff-assigned-clinic.component';

describe('StaffAssignedClinicComponent', () => {
  let component: StaffAssignedClinicComponent;
  let fixture: ComponentFixture<StaffAssignedClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffAssignedClinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAssignedClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
