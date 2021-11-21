import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {

  clinics: any;
  constructor(private http: HttpClient) { }

  getClinics(){
    this.http.get('http://127.0.0.1:8000/').subscribe((response: any) => {
      this.clinics = response.clinics;
      console.log(response.clinics);
    })
  }

  searchClinic(clinic: NgForm){
    if(clinic.valid){
      let formData = new FormData();
      formData.append('search', clinic.value.searchClinic);

      this.http.post('http://127.0.0.1:8000/', formData).subscribe((response: any) => {
        this.clinics = response.clinics;
        console.log(response.clinics);
      })
    }
  }
}
