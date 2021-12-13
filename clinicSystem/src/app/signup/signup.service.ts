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
}
