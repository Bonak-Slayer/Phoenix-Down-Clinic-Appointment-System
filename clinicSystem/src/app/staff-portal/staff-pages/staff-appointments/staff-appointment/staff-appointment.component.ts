import { Component, OnInit } from '@angular/core';
import {StaffAppointmentsService} from "../staff-appointments.service";
import {StaffService} from "../../../staff.service";

@Component({
  selector: 'app-staff-appointment',
  templateUrl: './staff-appointment.component.html',
  styleUrls: ['./staff-appointment.component.css']
})
export class StaffAppointmentComponent implements OnInit {

  appointmentStatus: string = '';

  constructor(public appointmentService: StaffAppointmentsService) { }

  ngOnInit(): void {
    if(this.appointmentService.appointment.status != 'Requested for Cancellation'){
      this.appointmentService.prompt = 'Please specify the time that the patient must arrive in the clinic.';
    }
    else {
      this.appointmentService.prompt = 'You may accept or reject the request for cancellation.';
    }
  }

  appointmentVerdict(source: string){
    this.appointmentStatus = source;
  }
}
