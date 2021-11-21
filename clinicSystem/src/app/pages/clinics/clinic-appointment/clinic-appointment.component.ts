import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../login/login.service";
import {ClinicService} from "../clinic/clinic.service";
import {Router} from "@angular/router";
import {ClinicAppointmentService} from "./clinic-appointment.service";

@Component({
  selector: 'app-clinic-appointment',
  templateUrl: './clinic-appointment.component.html',
  styleUrls: ['./clinic-appointment.component.css']
})
export class ClinicAppointmentComponent implements OnInit {

  constructor(public loginService: LoginService,
              public clinicService: ClinicService,
              private reroute: Router,
              public appointmentService: ClinicAppointmentService) { }

  ngOnInit(): void {
    if (!this.loginService.isLoggedIn){
      this.reroute.navigate(['/login']);
    }
  }

}
