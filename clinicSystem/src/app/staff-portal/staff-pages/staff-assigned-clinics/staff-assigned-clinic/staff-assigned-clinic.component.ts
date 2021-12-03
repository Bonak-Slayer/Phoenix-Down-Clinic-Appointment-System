import { Component, OnInit } from '@angular/core';
import {StaffService} from "../../../staff.service";

@Component({
  selector: 'app-staff-assigned-clinic',
  templateUrl: './staff-assigned-clinic.component.html',
  styleUrls: ['./staff-assigned-clinic.component.css']
})
export class StaffAssignedClinicComponent implements OnInit {

  constructor(public staffService: StaffService) { }

  ngOnInit(): void {
  }

}
