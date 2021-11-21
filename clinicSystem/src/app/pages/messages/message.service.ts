import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../login/login.service";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import { MessageModel } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: MessageModel[] = []
  message: any;
  
  composeMessageStatus: string = 'COMPOSE MESSAGE';
  userEmail: string = this.loginService.user_data.email;
  constructor(private httpService: HttpClient, private reroute: Router, private loginService: LoginService) { }

  getMessages(){
    this.messages = [];
    this.httpService.get(`http://127.0.0.1:8000/messages/${this.loginService.user_data.id}`).subscribe((response:any) => {
      for(let message of response.inbox){
        let newMessage = new MessageModel(message.id, message.content, message.date, message.sender, message.recipient);
        this.messages.push(newMessage);
      }
      this.messages.reverse();
    })
  }

  getMessageId(id: string){
    this.message = this.messages.find(message => message.id == id);
    this.reroute.navigate(['/messages/message'])
  }

  sendMessage(form: NgForm){
    if(form.valid){
      let formData = new FormData();
      formData.append('sender', this.userEmail);
      formData.append('recipient', form.value.recipient);
      formData.append('content', form.value.messagecontent);

      this.httpService.post('http://127.0.0.1:8000/sendMessage', formData).subscribe((response: any) => {
        if(response.message == 'message received'){
          this.composeMessageStatus = 'MESSAGE SENT';

          setTimeout(() => {
            this.reroute.navigate(['/messages']);
          }, 1000);
        }
        else if(response.message == 'message failed'){
          this.composeMessageStatus = 'MESSAGE NOT SENT';

          setTimeout(() => {
            this.composeMessageStatus = 'COMPOSE MESSAGE';
          }, 2000);
        }
      })
    }
  }
}
