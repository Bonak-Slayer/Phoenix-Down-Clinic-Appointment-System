import { Injectable } from '@angular/core';
import {ClinicModel} from "../pages/clinics/clinic/clinic.model";
import {LoginService} from "../login/login.service";
import {HttpClient} from "@angular/common/http";
import {ClinicStaffmodel} from "../pages/clinics/clinic.staffmodel";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  assignedClinics: ClinicModel[] = [];
  assignedClinic: any;
  staff: ClinicStaffmodel[] = [];

  constructor(private http: HttpClient, private loginService: LoginService, private route: Router) { }

  getClinics(){
    this.assignedClinics = [];

    let id = this.loginService.user_data.id;
    this.http.get(`${this.loginService.apiPath}/staff/allclinics/${id}`).subscribe((response: any) => {
      for(let clinic of response.clinics){

        let newClinic = new ClinicModel(
          clinic.id,
          clinic.name,
          clinic.address,
          clinic.contact,
          clinic.email,
          clinic.operation_start.substring(0, 5),
          clinic.operation_end.substring(0, 5),
          clinic.starting_day,
          clinic.end_day,
          clinic.description);

        this.assignedClinics.push(newClinic);
      }
    })
  }

  getStaff(id: string){
    this.staff = [];

    this.http.get(`${this.loginService.apiPath}/staff/allclinics/getClinic/${id}`).subscribe((response: any) => {
      for(let member of response.staff){
        let staffMember = new ClinicStaffmodel(
          member.id,
          member.user,
          member.role,
          member.specialization
        );

        this.staff.push(staffMember);
      }
    })
  }

  registerClinic(form: NgForm){
    if(form.valid){
      let formData = new FormData();
      formData.append('user', this.loginService.user_data.id);
      formData.append('name', form.value.name);
      formData.append('address', form.value.address);
      formData.append('contact', form.value.contact);
      formData.append('email', form.value.email);
      formData.append('opStart', form.value.timeStart);
      formData.append('opEnd', form.value.timeEnd);
      formData.append('dayStart', form.value.dayStart);
      formData.append('dayEnd', form.value.dayEnd);
      formData.append('description', form.value.description);

      this.http.post(`${this.loginService.apiPath}/staff/registerClinic`, formData)
        .subscribe((response: any) => {
          if(response.message == 'successfully registered clinic'){
            this.route.navigate(['/staff/assignedClinics'])
          }
          else{
            console.log(response.message);
            let clinicName: any;
            clinicName = document.getElementById('clinicName');
            clinicName.innerHTML = 'THIS CLINIC HAS ALREADY BEEN REGISTERED.';
            clinicName.style.color = 'red';

            setTimeout(() => {
              clinicName.innerHTML = 'WHAT IS THE NAME OF YOUR CLINIC?';
              clinicName.style.color = '#707070';
            }, 10000)
          }
        })
    }
  }

  associate(id: string){
    let formData = new FormData();
    formData.append('user', this.loginService.user_data.id);
    formData.append('clinic', id);

    this.http.post(`${this.loginService.apiPath}/staff/associate`, formData)
      .subscribe((response: any) => {

      })
  }
}
