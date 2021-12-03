import { Component, OnInit } from '@angular/core';
import {AppointmentService} from "./appointment.service";
import {LoginService} from "../../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor(private loginService: LoginService, public appointmentService: AppointmentService, private reroute: Router) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn && this.loginService.portal == 'Patient'){
      this.appointmentService.getAppointments();
    }
    else{
      this.reroute.navigate(['/login']);
      this.loginService.signOut('patient');
    }
  }

}
