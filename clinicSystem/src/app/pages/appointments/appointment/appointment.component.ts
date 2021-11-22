import { Component, OnInit } from '@angular/core';
import {AppointmentService} from "../appointment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../../login/login.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  verifyTime: string = 'AM';

  constructor(public appointmentService: AppointmentService, private pathService: ActivatedRoute,
  private loginService: LoginService, private reroute: Router) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn){
      this.appointmentService.getAppointment(this.pathService.snapshot.params['id']);
      this.timeValidation(this.appointmentService.appointment.date);
    }
    else{
      this.reroute.navigate(['/login']);
    }
  }

  timeValidation(time: string){
    if(time != null){
      if(+time.substring(11, 12) >= 13 && +time.substring(11, 12) < 24){
        this.verifyTime = 'PM';
      }
    }
  }
}
