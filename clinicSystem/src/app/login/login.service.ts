import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;
  loginStatus = 'LOGIN';
  currentUser = '';
  user_data: any;

  constructor(private httpService: HttpClient, private reroute: Router) { }

  login(email: string, password: string){
    let form = new FormData();
    form.append('email', email);
    form.append('password', password);

    this.httpService.post('http://127.0.0.1:8000/login', form).subscribe((response: any) => {
      this.currentUser = `${response.first_name} ${response.last_name}`;
      this.user_data = response.user_data;
      this.loginStatus = response.message;

      if(this.loginStatus === 'LOGIN SUCCESS'){
        this.isLoggedIn = true;

        setTimeout( () => {
          this.reroute.navigate(['/clinics'])
        }, 1000)
      }
    })
  }
}
