import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService, private pathService: ActivatedRoute, private loginService: LoginService, private reroute: Router) { }

  ngOnInit(): void {
    if(!this.loginService.isLoggedIn){
      this.reroute.navigate(['/login']);
    }
  }

}
