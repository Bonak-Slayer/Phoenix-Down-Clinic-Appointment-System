import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAssignedClinicsComponent } from './staff-assigned-clinics.component';

describe('StaffAssignedClinicsComponent', () => {
  let component: StaffAssignedClinicsComponent;
  let fixture: ComponentFixture<StaffAssignedClinicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffAssignedClinicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAssignedClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
