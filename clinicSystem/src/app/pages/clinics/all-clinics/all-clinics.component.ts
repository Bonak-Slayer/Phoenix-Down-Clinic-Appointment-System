import { Component, OnInit } from '@angular/core';
import {ClinicsService} from "../clinics.service";
import { Router } from "@angular/router";
import {LoginService} from "../../../login/login.service";

@Component({
  selector: 'app-all-clinics',
  templateUrl: './all-clinics.component.html',
  styleUrls: ['./all-clinics.component.css']
})
export class AllClinicsComponent implements OnInit {

  constructor(public clinicsService: ClinicsService, private router: Router, public loginService: LoginService) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn){
      this.clinicsService.getClinics();
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  accessClinic(clinicId: string){
    this.router.navigate([`/clinic/${clinicId}`]);
  }

}
