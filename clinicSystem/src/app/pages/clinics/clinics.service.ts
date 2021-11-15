import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
}
