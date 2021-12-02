import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../login/login.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  checkValues(form: NgForm){
    let email = form.value.email;
    let password = form.value.password;

    if(form.valid === true){
      this.loginService.login(email, password, 'staff');
    }
  }
}
