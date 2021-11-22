import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clinic-inquiry',
  templateUrl: './clinic-inquiry.component.html',
  styleUrls: ['./clinic-inquiry.component.css']
})
export class ClinicInquiryComponent implements OnInit {

  constructor(private loginService: LoginService, private reroute: Router) { }

  ngOnInit(): void {
    if(!this.loginService.isLoggedIn){
      this.reroute.navigate(['/login']);
    }
  }
}
