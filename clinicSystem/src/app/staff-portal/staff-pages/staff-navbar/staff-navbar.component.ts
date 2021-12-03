import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../login/login.service";

@Component({
  selector: 'app-staff-navbar',
  templateUrl: './staff-navbar.component.html',
  styleUrls: ['./staff-navbar.component.css']
})
export class StaffNavbarComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

}
