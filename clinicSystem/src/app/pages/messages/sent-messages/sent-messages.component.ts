import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sent-messages',
  templateUrl: './sent-messages.component.html',
  styleUrls: ['./sent-messages.component.css']
})
export class SentMessagesComponent implements OnInit {

  constructor(
    private loginService: LoginService, 
    private reroute: Router,
    public messageService: MessageService
    ) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn){
      this.messageService.getSentMessages();
    }
    else {
      this.reroute.navigate(['/login']);
    }
  }

}
