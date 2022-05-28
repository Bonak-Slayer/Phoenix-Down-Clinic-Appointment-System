import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {LoginService} from "../../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {

  clinics: any;
  constructor(private http: HttpClient, private login: LoginService) { }

  getClinics(){
    this.http.get(`${this.login.apiPath}/`).subscribe((response: any) => {
      this.clinics = response.clinics;
    })
  }

  searchClinic(clinic: NgForm){
      let formData = new FormData();
      formData.append('search', clinic.value.searchClinic);

      this.http.post(`${this.login.apiPath}/`, formData).subscribe((response: any) => {
        this.clinics = response.clinics;
      })
  }
}
