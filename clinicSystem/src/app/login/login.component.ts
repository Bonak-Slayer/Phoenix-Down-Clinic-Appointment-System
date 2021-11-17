import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string = "LOGIN";
  username: string = "";
  password: string = "";

  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  checkValues(){
    if(this.username == "Student"){
      if(this.password == "Test"){
        this.message = "LOGIN SUCCESS!";
        this.loginService.isLoggedIn = true;
        this.route.navigate(['/clinics']);
      }
      else{
        this.message = "INCORRECT PASSWORD!"
        setTimeout(()=> this.message = "LOGIN", 2000);
      }
    }
    else{
      this.message = "INVALID USER!"
      setTimeout(()=> this.message = "LOGIN", 2000);
    }
  }
}
