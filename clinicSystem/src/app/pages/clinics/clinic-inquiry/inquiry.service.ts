import { Injectable } from '@angular/core';
import {LoginService} from "../../../login/login.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ClinicService} from "../clinic/clinic.service";

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  heading: string = this.clinicService.clinic.name;

  constructor(private http: HttpClient,
              private loginService: LoginService,
              private route: Router,
              private clinicService: ClinicService) { }

  makeInquiry(form: NgForm){
    let formData = new FormData();
    formData.append('user', this.loginService.user_data.id);
    formData.append('clinic', this.clinicService.clinic.id);
    formData.append('content', form.value.textInput);

    this.http.post(`${this.loginService.apiPath}/makeInquiry`, formData).subscribe((response: any) => {
      if(response.message == 'inquiry success'){
        this.heading = 'INQUIRY SUCCESSFULLY MADE';
        setTimeout(() => {
          this.route.navigate(['/clinics'])
        }, 1500)
      }
      else{
        this.heading = 'INQUIRY FAILED';
        setTimeout(() => {
          this.heading = this.clinicService.clinic.name;
        }, 1500)
      }
    })
  }
}
