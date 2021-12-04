import { TestBed } from '@angular/core/testing';

import { StaffAppointmentsService } from './staff-appointments.service';

describe('StaffAppointmentsService', () => {
  let service: StaffAppointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffAppointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
