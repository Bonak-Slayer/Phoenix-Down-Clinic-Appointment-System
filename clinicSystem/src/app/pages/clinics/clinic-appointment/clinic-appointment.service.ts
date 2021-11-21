import { Injectable } from '@angular/core';
import {LoginService} from "../../../login/login.service";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ClinicService} from "../clinic/clinic.service";

@Injectable({
  providedIn: 'root'
})
export class ClinicAppointmentService {

  constructor(private loginService: LoginService,
              private http: HttpClient,
              private clinicService: ClinicService,
              private reroute: Router) { }

  submitAppointment(form: NgForm){
    if(form.valid === true){
      let selectedDoctor: string = '';

      for(let staff of this.clinicService.staff){
        if(staff.user == form.value.doctor){
          selectedDoctor = `${staff.id}`;
        }
      }

      let appointmentForm = new FormData();
      appointmentForm.append('patientCategory', form.value.patientCategory);
      appointmentForm.append('doctor', selectedDoctor);
      appointmentForm.append('healthCheck', form.value.healthCheck);
      appointmentForm.append('vaccinationCheck', form.value.vaccinationCheck);

      appointmentForm.append('patient', this.loginService.user_data.id);
      appointmentForm.append('clinic', this.clinicService.clinic.id);

      this.http.post('http://127.0.0.1:8000/appointment', appointmentForm).subscribe((response: any) => {
        if(response.message == 'appointment created'){
          this.reroute.navigate(['/appointments']);
        }
        else{
          alert('Form data was invalid.');
        }
      })
    }
  }
}
