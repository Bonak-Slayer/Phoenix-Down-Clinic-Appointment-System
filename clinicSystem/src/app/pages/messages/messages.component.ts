import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../login/login.service";
import {Router} from "@angular/router";
import { MessageService } from './message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private loginService: LoginService, private reroute: Router, public messageService: MessageService) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn && this.loginService.portal == 'Patient'){
      this.messageService.getMessages();
    }
    else {
      this.reroute.navigate(['/login']);
      this.loginService.signOut('patient');
    }
  }

  accessCompose(){
    this.reroute.navigate(['/messages/compose']);
  }
}
