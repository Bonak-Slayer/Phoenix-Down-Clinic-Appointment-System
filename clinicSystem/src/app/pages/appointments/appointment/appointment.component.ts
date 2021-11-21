import { Component, OnInit } from '@angular/core';
import {AppointmentService} from "../appointment.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(public appointmentService: AppointmentService, private pathService: ActivatedRoute) { }

  ngOnInit(): void {
    this.appointmentService.getAppointment(this.pathService.snapshot.params['id']);
    console.log(this.appointmentService.appointment.status);
  }

}
