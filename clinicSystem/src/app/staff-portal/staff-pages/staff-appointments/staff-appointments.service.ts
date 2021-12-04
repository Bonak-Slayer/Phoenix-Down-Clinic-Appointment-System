import { Injectable } from '@angular/core';
import {StaffService} from "../../staff.service";
import {HttpClient} from "@angular/common/http";
import {StaffappointmentModel} from "./staffappointment.model";
import {AppointmentModel} from "../../../pages/appointments/appointment.model";

@Injectable({
  providedIn: 'root'
})
export class StaffAppointmentsService {

  allAppointments: StaffappointmentModel[] = [];
  appointment: any;

  constructor(private http: HttpClient, private staffService: StaffService) { }

  getAppointments(){
    this.allAppointments = [];

    this.http.get(`http://127.0.0.1:8000/staff/clinic/appointments/${this.staffService.assignedClinic.id}`)
      .subscribe((response: any) => {
        for(let appointment of response.appointments){
          let newAppointment = new StaffappointmentModel(
            appointment.id,
            appointment.appointment_date,
            appointment.appointment_status,
            appointment.category,
            appointment.patient,
            appointment.doctor,
            appointment.clinic);

          this.allAppointments.push(newAppointment);
        }
      })
  }
}
