import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../login/login.service";
import {ClinicService} from "../clinic/clinic.service";

@Component({
  selector: 'app-clinic-appointment',
  templateUrl: './clinic-appointment.component.html',
  styleUrls: ['./clinic-appointment.component.css']
})
export class ClinicAppointmentComponent implements OnInit {

  constructor(public loginService: LoginService, public clinicService: ClinicService) { }

  ngOnInit(): void {
  }

}
