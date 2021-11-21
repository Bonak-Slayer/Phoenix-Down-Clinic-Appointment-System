import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginModel} from "./login.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;
  loginStatus: string = 'LOGIN';
  currentUser: string = '';
  user_data: any;

  constructor(private httpService: HttpClient, private reroute: Router) { }

  login(email: string, password: string){
    let form = new FormData();
    form.append('email', email);
    form.append('password', password);

    this.httpService.post('http://127.0.0.1:8000/login', form).subscribe((response: any) => {
      this.loginStatus = response.message;

      if(this.loginStatus === 'LOGIN SUCCESS'){
        //SETTING NECESSARY VARIABLES
        this.user_data = new LoginModel(response.user_data.id,
                                        response.user_data.first_name,
                                        response.user_data.middle_name,
                                        response.user_data.last_name,
                                        response.user_data.email,
                                        response.user_data.address,
                                        response.user_data.contact,
                                        response.user_data.sex,);

        this.currentUser = `${this.user_data.first_name}`;
        this.isLoggedIn = true;

        setTimeout( () => {
          this.reroute.navigate(['/clinics'])
        }, 1000)
      }
      else{
        console.log(response.message);
        setTimeout(() => {this.loginStatus = 'LOGIN'}, 1000)
      }
    })
  }

  signOut(){
    this.isLoggedIn = false;
    this.user_data = null;
    this.currentUser = '';
    this.loginStatus = 'LOGIN';
    this.reroute.navigate(['/login']);
  }
}
