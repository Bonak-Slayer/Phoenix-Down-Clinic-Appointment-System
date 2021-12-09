import { Injectable } from '@angular/core';
import {LoginService} from "../../login/login.service";
import {HttpClient} from "@angular/common/http";
import {AppointmentModel} from "./appointment.model";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointment: any;
  appointments: AppointmentModel[] = [];
  constructor(private loginService: LoginService, private http: HttpClient, private route: Router) { }

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
          appointment.clinic,
          appointment.date_created);

        this.appointments.push(newAppointment);
      }
      this.appointments.reverse();
    })
  }

  getAppointment(id: string){
    this.appointment = this.appointments.find(appointment => appointment.id == `${id}`);
  }

  rescheduleAppointment(form: NgForm){
    if(form.valid){
      let formData = new FormData();
      formData.append('rescheduleDate', `${form.value.rescheduledDate} 00:00`);

      this.http.post(`${this.loginService.apiPath}/rescheduleAppointment/${this.appointment.id}`, formData)
        .subscribe((response: any) => {
          console.log(response.message);
          this.route.navigate(['/appointments']);
        });
    }
  }

  cancelAppointment(){
    let formData = new FormData();
    formData.append('appointment', this.appointment.id);

    this.http.post(`${this.loginService.apiPath}/cancelAppointment`, formData).subscribe((response: any) => {
      console.log(response.message);
      this.route.navigate(['/appointments']);
    });
  }

  hideContent(change: string){
    let buttons: any = document.getElementById('approval');
    let appointmentDetails : any = document.getElementById('appointmentInfo');
    let userDetails: any = document.getElementById('userInfo');
    let reschedule: any = document.getElementById('reschedule');
    let cancel: any = document.getElementById('cancel');

    if(change == 'hideMain'){
      buttons.style.display = 'none';
      appointmentDetails.style.display = 'none';
      userDetails.style.display = 'none';
    }
    else if(change == 'showMain'){
      buttons.style.display = 'block';
      appointmentDetails.style.display = 'block';
      userDetails.style.display = 'block';
      reschedule.style.display = 'none';
      cancel.style.display = 'none';
    }
  }
}
