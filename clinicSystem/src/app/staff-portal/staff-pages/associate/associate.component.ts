import { Component, OnInit } from '@angular/core';
import {ClinicsService} from "../../../pages/clinics/clinics.service";
import {StaffService} from "../../staff.service";

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent implements OnInit {

  constructor(public clinics: ClinicsService, public staff: StaffService) { }

  ngOnInit(): void {
    this.clinics.getClinics();
  }

}
