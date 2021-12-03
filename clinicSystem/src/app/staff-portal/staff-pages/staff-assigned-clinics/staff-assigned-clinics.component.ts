import { Component, OnInit } from '@angular/core';
import {StaffService} from "../../staff.service";

@Component({
  selector: 'app-staff-assigned-clinics',
  templateUrl: './staff-assigned-clinics.component.html',
  styleUrls: ['./staff-assigned-clinics.component.css']
})
export class StaffAssignedClinicsComponent implements OnInit {

  constructor(public staffService: StaffService) { }

  ngOnInit(): void {
    this.staffService.getClinics();
  }

  accessClinic(id: string){

  }

}
