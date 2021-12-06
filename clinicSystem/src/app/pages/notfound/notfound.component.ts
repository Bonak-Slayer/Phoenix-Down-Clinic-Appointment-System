import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../login/login.service";
import {Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  countdown: number = 5;

  constructor(private loginService: LoginService, private route: Router, private redirect: Location) { }

  ngOnInit(): void {
    this.countDown();
  }

  countDown(){
    if(this.countdown > 0){
      setTimeout(() => {
        this.countdown--;
        this.countDown();
      }, 1000)
    }
    else{
      if(this.loginService.isLoggedIn){
        this.redirect.back();
      }
      else{
        this.route.navigate(['/'])
      }
    }
  }
}