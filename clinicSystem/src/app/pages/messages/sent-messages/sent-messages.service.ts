import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { LoginService } from 'src/app/login/login.service';
import { SentMessagesModel } from './sent-messages.model';

@Injectable({
  providedIn: 'root'
})
export class SentMessagesService {

  messages: SentMessagesModel[] = []

  constructor(private httpService: HttpClient, private reroute: Router, private loginService: LoginService) { }

  getSentMessages(){
    this.messages = [];
    this.httpService.get(`http://127.0.0.1:8000/sentmessages/${this.loginService.user_data.id}`).subscribe((response:any) => {
      console.log(response.sent);
      for(let message of response.sent){
        let newMessage = new SentMessagesModel(message.content, message.date, message.sender, message.recipient);
        this.messages.push(newMessage);
      }
      this.messages.reverse();
    })
  }
}
