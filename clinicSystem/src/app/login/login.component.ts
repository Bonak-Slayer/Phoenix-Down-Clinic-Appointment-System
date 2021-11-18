import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string = "LOGIN";

  constructor(private route: Router, public loginService: LoginService) { }

  ngOnInit(): void {
  }

  checkValues(form: NgForm){
    let email = form.value.email;
    let password = form.value.password;

    if(form.valid === true){
      this.loginService.login(email, password);
    }
  }
}
