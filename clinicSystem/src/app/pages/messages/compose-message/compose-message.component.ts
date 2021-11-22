import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message.service";
import {LoginService} from "../../../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {

  constructor(public messageService: MessageService, private loginService: LoginService, private reroute: Router) { }

  ngOnInit(): void {
    if(!this.loginService.isLoggedIn){
      this.reroute.navigate(['/login']);
    }
  }
}
