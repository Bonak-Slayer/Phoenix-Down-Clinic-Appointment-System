import { Component, OnInit } from '@angular/core';
import {AppointmentService} from "./appointment.service";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor(public appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getAppointments();
  }

}
