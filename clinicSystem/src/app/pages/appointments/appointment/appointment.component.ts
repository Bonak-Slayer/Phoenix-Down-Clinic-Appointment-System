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

  constructor(public appointmentService: AppointmentService,
              private pathService: ActivatedRoute,
              private loginService: LoginService,
              private reroute: Router) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn && this.loginService.portal == 'Patient'){
      this.appointmentService.getAppointment(this.pathService.snapshot.params['id']);
    }
    else{
      this.reroute.navigate(['/login']);
      this.loginService.signOut('patient');
    }
  }

  updateAppointment(process: string){
    this.appointmentService.hideContent('hideMain');

    if(process == 'resched'){
      let reschedule: any = document.getElementById('reschedule');
      reschedule.style.display = 'block';
    }
    else if(process == 'cancel'){
      let cancel: any = document.getElementById('cancel');
      cancel.style.display = 'block';
    }
  }
}
