import { Injectable } from '@angular/core';
import {LoginService} from "../../login/login.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private loginService: LoginService, private http: HttpClient, private reroute: Router) { }

  getAppointments(){
    this.http.get(`http://127.0.0.1:8000/getAppointments/${this.loginService}`).subscribe((response: any) => {
      
    })
  }
}
