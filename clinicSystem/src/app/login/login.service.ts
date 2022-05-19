import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginModel} from "./login.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiPath: string =  'http://127.0.0.1:8000';
  portal: string = 'Patient';
  isLoggedIn: boolean = false;
  loginStatus: string = 'LOGIN';
  currentUser: string = '';
  user_data: any;

  constructor(private httpService: HttpClient, private reroute: Router) { }

  login(email: string, password: string, portal: string){
    let form = new FormData();
    form.append('email', email);
    form.append('password', password);

    this.httpService.post(`${this.apiPath}/login`, form).subscribe((response: any) => {

      if(response.message === 'LOGIN SUCCESS'){
        //SETTING NECESSARY VARIABLES
        this.user_data = new LoginModel(response.user_data.id,
                                        response.user_data.first_name,
                                        response.user_data.middle_name,
                                        response.user_data.last_name,
                                        response.user_data.email,
                                        response.user_data.address,
                                        response.user_data.contact,
                                        response.user_data.sex,
                                        response.user_data.user_category,
                                        response.user_data.offense_count,);

        if(this.user_data.offenses >= 10){
          this.loginStatus = "THIS ACCOUNT IS BLACKLISTED";
          setTimeout(() => {this.loginStatus = 'LOGIN'}, 3000)
        }
        else{

          switch (portal) {
            //HANDLING PATIENT LOGIN
            case 'patient':
              this.loginStatus = "LOGIN SUCCESS";
              this.currentUser = `${this.user_data.first_name}`;
              this.isLoggedIn = true;
              this.portal = 'Patient';

              setTimeout( () => {
                this.reroute.navigate(['/clinics'])
              }, 1000);
              break;

            //HANDLING STAFF LOGIN
            case 'staff':
              if(this.user_data.category == 'Staff'){
                this.portal = 'Staff';
                this.loginStatus = "LOGIN SUCCESS";
                this.currentUser = `${this.user_data.first_name}`;
                this.isLoggedIn = true;

                setTimeout( () => {
                  this.reroute.navigate(['/staff/assignedClinics'])
                }, 1000)
              }
              else{
                this.loginStatus = "ACCESS IS FOR STAFF ONLY";
                setTimeout(() => { this.loginStatus = 'LOGIN' }, 2000)
              }
              break;
          }
        }
      }

      //IF AN ERROR OCCURS DURING LOGIN
      else{
        console.log(response.message);
        setTimeout(() => {this.loginStatus = 'LOGIN'}, 3000)
      }
    })
  }

  signOut(page: string){
    this.isLoggedIn = false;
    this.user_data = null;
    this.currentUser = '';
    this.loginStatus = 'LOGIN';
    if(page == 'patient'){
      this.reroute.navigate(['/login']);
    }
    else{
      this.reroute.navigate(['/staff/login']);
    }
  }
}
