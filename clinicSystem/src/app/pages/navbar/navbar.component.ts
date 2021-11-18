import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../login/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string = this.loginService.currentUser;

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

}
