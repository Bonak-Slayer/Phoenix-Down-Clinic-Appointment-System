import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  message: string = 'SIGN UP';
  roles: string[] = [];
  specializations: string[] = [];

  constructor(private http: HttpClient, private login: LoginService, private route: Router) { }

  patientSignUp(form: NgForm){
    if(form.valid){
      let formData = new FormData();
      formData.append('firstName', form.value.firstName);
      formData.append('middleName', form.value.middleName);
      formData.append('lastName', form.value.lastName);
      formData.append('password', form.value.password);
      formData.append('sex', form.value.sex);
      formData.append('email', form.value.email);
      formData.append('address', form.value.address);
      formData.append('contact', form.value.contact);
      formData.append('birthDate', form.value.birth);

      this.http.post(`${this.login.apiPath}/signup`, formData).subscribe((response: any) => {
        console.log(response.message);
        if(response.message == 'sign up success'){
          this.message = 'SIGN UP SUCCESS';

          setTimeout(() => {
            this.message = 'SIGN UP';
            this.route.navigate(['/login'])
          }, 2000)
        }
        else {
          this.message = 'SIGN UP FAILED';

          setTimeout(() => {
            this.message = 'SIGN UP';
          }, 2000)
        }
      })
    }
  }

  getDuties(){
    this.specializations = [];
    this.roles = [];

    this.http.get(`${this.login.apiPath}/clinicDuties`).subscribe((response: any) => {
      console.log(response.message);

      for(let specialization of response.specializations){
        this.specializations.push(specialization.field)
      }

      for(let role of response.roles){
        this.roles.push(role.active_role);
      }
    })
  }

  staffSignup(form: NgForm){
    if(form.valid){
      let formData = new FormData();
      formData.append('firstName', form.value.firstName);
      formData.append('middleName', form.value.middleName);
      formData.append('lastName', form.value.lastName);
      formData.append('password', form.value.password);
      formData.append('sex', form.value.sex);
      formData.append('email', form.value.email);
      formData.append('address', form.value.address);
      formData.append('contact', form.value.contact);
      formData.append('birthDate', form.value.birth);
      formData.append('specializations', form.value.specializations);
      formData.append('role', form.value.roles);

      this.http.post(`${this.login.apiPath}/staffSignup`, formData).subscribe((response: any) => {
        if(response.message == 'sign up success'){
          this.message = 'SIGN UP SUCCESS';

          setTimeout(() => {
            this.message = 'SIGN UP';
            this.route.navigate(['/staff/login']);
          }, 2000)
        }
        else {
          this.message = 'SIGN UP FAILED';

          setTimeout(() => {
            this.message = 'SIGN UP';
          }, 2000)
        }
      })
    }
  }
}
