import { Component, OnInit } from '@angular/core';
import {StaffAppointmentsService} from "../staff-appointments.service";
import {StaffService} from "../../../staff.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-staff-appointment',
  templateUrl: './staff-appointment.component.html',
  styleUrls: ['./staff-appointment.component.css']
})
export class StaffAppointmentComponent implements OnInit {

  appointmentStatus: string = '';

  constructor(public appointmentService: StaffAppointmentsService, public staffService: StaffService) { }

  ngOnInit(): void {
  }

  appointmentVerdict(source: string){
    this.appointmentStatus = source;
  }
}
