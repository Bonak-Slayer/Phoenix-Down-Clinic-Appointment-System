import { Component, OnInit } from '@angular/core';
import {AppointmentService} from "../appointment.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  verifyTime: string = 'AM';

  constructor(public appointmentService: AppointmentService, private pathService: ActivatedRoute) { }

  ngOnInit(): void {
    this.appointmentService.getAppointment(this.pathService.snapshot.params['id']);
    this.timeValidation(this.appointmentService.appointment.date.substring(11, 12));
  }

  timeValidation(time: string){
    if(+time >= 13 && +time < 24){
      this.verifyTime = 'PM';
    }
  }
}
