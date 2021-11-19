import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
