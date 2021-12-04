import { Component, OnInit } from '@angular/core';
import {StaffService} from "../../staff.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-staff-assigned-clinics',
  templateUrl: './staff-assigned-clinics.component.html',
  styleUrls: ['./staff-assigned-clinics.component.css']
})
export class StaffAssignedClinicsComponent implements OnInit {

  constructor(public staffService: StaffService, private route: Router) { }

  ngOnInit(): void {
    this.staffService.getClinics();
  }

  accessClinic(id: string){
    let clinic = this.staffService.assignedClinics.find(search => search.id == id);
    this.staffService.assignedClinic = clinic;
    this.staffService.getStaff(this.staffService.assignedClinic.id);

    this.route.navigate([`/staff/assignedClinics/${id}`])
  }

}
