import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private loginService: LoginService, private reroute: Router) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn){

    }
    else {
      this.reroute.navigate(['/login']);
    }
  }

  accessCompose(){
    this.reroute.navigate(['/messages/compose']);
  }

}
