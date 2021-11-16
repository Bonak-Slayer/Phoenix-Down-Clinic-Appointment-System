import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClinicModel} from "./clinic.model";

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  clinic: any;
  constructor(private http: HttpClient) { }

  getClinic(id: string){
    this.http.get(`http://127.0.0.1:8000/clinic/${id}`).subscribe((response: any) => {
      let newClinic = new ClinicModel(response.clinic.id, response.clinic.name, response.clinic.address,
        response.clinic.contact, response.clinic.email, response.clinic.operationStart,
        response.clinic.operationEnd, response.clinic.description);

      this.clinic = newClinic
      console.log(this.clinic)
    })
  }
}
