import { Component, OnInit } from '@angular/core';
import {ClinicService} from "./clinic.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../../login/login.service";

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

  clinicId: string = this.route.snapshot.params['id'];

  constructor(public clinicService: ClinicService,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private reroute: Router) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn){
      this.clinicService.getClinic(this.clinicId);
    }
    else{
      this.reroute.navigate([`/login`]);
    }
  }

  makeAppointment(){
    this.reroute.navigate([`/clinic/${this.clinicId}/appointment`])
  }
}
