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

  constructor(public clinicService: ClinicService,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private reroute: Router) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn){
      let id = this.route.snapshot.params['id'];
      this.clinicService.getClinic(id);
    }
    else{
      this.reroute.navigate(['/login']);
    }
  }

}
