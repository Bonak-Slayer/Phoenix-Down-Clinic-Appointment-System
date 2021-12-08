import { Injectable } from '@angular/core';
import {LoginService} from "../../login/login.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AppointmentModel} from "./appointment.model";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointment: any;
  appointments: AppointmentModel[] = [];
  constructor(private loginService: LoginService, private http: HttpClient, private reroute: Router) { }

  getAppointments(){
    this.http.get(`${this.loginService.apiPath}/getAppointments/${this.loginService.user_data.id}`).subscribe((response: any) => {
      this.appointments = [];

      for(let appointment of response.appointments){
        let newAppointment = new AppointmentModel(
          appointment.id,
          appointment.appointment_date,
          appointment.appointment_status,
          appointment.category,
          appointment.doctor,
          appointment.clinic);

        this.appointments.push(newAppointment);
      }
      this.appointments.reverse();
    })
  }

  getAppointment(id: string){
    this.appointment = this.appointments.find(appointment => appointment.id == `${id}`);
  }
}
