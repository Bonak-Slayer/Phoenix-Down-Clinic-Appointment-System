import { TestBed } from '@angular/core/testing';

import { ClinicAppointmentService } from './clinic-appointment.service';

describe('ClinicAppointmentService', () => {
  let service: ClinicAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
