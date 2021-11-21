import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private loginService: LoginService, private reroute: Router) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn){
      this.reroute.navigate(['/clinics']);
    }
  }

}
