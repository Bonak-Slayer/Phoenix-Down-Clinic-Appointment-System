import { Component, OnInit } from '@angular/core';
import {StaffAppointmentsService} from "./staff-appointments.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-staff-appointments',
  templateUrl: './staff-appointments.component.html',
  styleUrls: ['./staff-appointments.component.css']
})
export class StaffAppointmentsComponent implements OnInit {

  constructor(public appointments: StaffAppointmentsService, private route: Router, private path: ActivatedRoute) { }

  ngOnInit(): void {
    this.appointments.getAppointments();
  }

  accessAppointment(id: string){
    let clinic = this.path.snapshot.params['id'];
    this.appointments.appointment = this.appointments.allAppointments.find(appointment => appointment.id == id);
    this.route.navigate([`staff/assignedClinics/${clinic}/appointments/${id}`]);
  }
}
