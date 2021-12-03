import { Injectable } from '@angular/core';
import {ClinicModel} from "../pages/clinics/clinic/clinic.model";
import {LoginService} from "../login/login.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  assignedClinics: ClinicModel[] = [];
  assignedClinic: any;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getClinics(){
    this.assignedClinics = [];

    let id = this.loginService.user_data.id;
    this.http.get(`http://127.0.0.1:8000/staff/allclinics/${id}`).subscribe((response: any) => {
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

      console.log(this.assignedClinics)
    })
  }

  getAssignedClinic(){

  }
}
