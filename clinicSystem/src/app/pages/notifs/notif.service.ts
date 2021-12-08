import { Injectable } from '@angular/core';
import {LoginService} from "../../login/login.service";
import {HttpClient} from "@angular/common/http";
import {NotificationModel} from "./notification.model";

@Injectable({
  providedIn: 'root'
})
export class NotifService {

  notifications: NotificationModel[] = [];
  constructor(private http: HttpClient, private loginService: LoginService) { }

  getNotifications(){
    this.notifications = [];

    this.http.get(`${this.loginService.apiPath}/getNotifications/${this.loginService.user_data.id}`)
      .subscribe((response: any) => {

        for(let notif of response.notifications){
          let newNotification = new NotificationModel(notif.recipient, notif.dateReceived, notif.content);
          this.notifications.push(newNotification);
        }

        this.notifications.reverse();
      })
  }
}
