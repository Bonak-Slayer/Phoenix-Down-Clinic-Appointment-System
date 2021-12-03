import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public loginService: LoginService, private route: Router) { }

  ngOnInit(): void {
    if(!this.loginService.isLoggedIn || this.loginService.portal != 'Patient'){
      this.route.navigate(['/login']);
      this.loginService.signOut('patient')
    }
  }
}
