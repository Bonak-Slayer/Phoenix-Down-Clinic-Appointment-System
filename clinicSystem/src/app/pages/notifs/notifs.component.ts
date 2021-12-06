import { Component, OnInit } from '@angular/core';
import {NotifService} from "./notif.service";
import {LoginService} from "../../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-notifs',
  templateUrl: './notifs.component.html',
  styleUrls: ['./notifs.component.css']
})
export class NotifsComponent implements OnInit {

  constructor(private loginService: LoginService,
              public notifService: NotifService,
              private route: Router) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn && this.loginService.portal == 'Patient'){
      this.notifService.getNotifications();
    }
    else{
      this.route.navigate(['/login']);
      this.loginService.signOut('patient');
    }
  }

}
