import { Component, OnInit } from '@angular/core';
import {ClinicsService} from "../clinics.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-all-clinics',
  templateUrl: './all-clinics.component.html',
  styleUrls: ['./all-clinics.component.css']
})
export class AllClinicsComponent implements OnInit {

  constructor(public clinicsService: ClinicsService, private router: Router) { }

  ngOnInit(): void {
    this.clinicsService.getClinics()
  }

  accessClinic(clinicId: string){
    this.router.navigate([`/clinic/${clinicId}`]);
  }
}
