import { Component, OnInit } from '@angular/core';
import {ClinicsService} from "../clinics.service";

@Component({
  selector: 'app-all-clinics',
  templateUrl: './all-clinics.component.html',
  styleUrls: ['./all-clinics.component.css']
})
export class AllClinicsComponent implements OnInit {

  constructor(public clinicsService: ClinicsService) { }

  ngOnInit(): void {
    this.clinicsService.getClinics()
  }

}
