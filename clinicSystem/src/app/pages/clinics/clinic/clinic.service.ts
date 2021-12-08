import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClinicModel} from "./clinic.model";
import {ClinicStaffmodel} from "../clinic.staffmodel";
import {LoginService} from "../../../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  clinic: any;
  staff: ClinicStaffmodel[] = [];
  constructor(private http: HttpClient, private loginService: LoginService) { }

  getClinic(id: string){
    this.http.get(`${this.loginService.apiPath}/clinic/${id}`).subscribe((response: any) => {
      //GET CLINIC DATA
      this.clinic = new ClinicModel(response.clinic.id,
        response.clinic.name,
        response.clinic.address,
        response.clinic.contact,
        response.clinic.email,
        response.clinic.operation_start.substring(0, 5),
        response.clinic.operation_end.substring(0, 5),
        response.clinic.starting_day,
        response.clinic.end_day,
        response.clinic.description);

      //GET STAFF DATA
      this.staff = [];
      for(let staffMember of response.staff){
        let addMember = new ClinicStaffmodel(staffMember.id, staffMember.user, staffMember.role, staffMember.specialization);
        this.staff.push(addMember);
      }
    })
  }
}
