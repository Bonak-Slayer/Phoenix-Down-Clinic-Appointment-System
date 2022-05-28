import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";

@Component({
  selector: 'app-staff-signup',
  templateUrl: './staff-signup.component.html',
  styleUrls: ['./staff-signup.component.css']
})
export class StaffSignupComponent implements OnInit {

  constructor(public signup: SignupService) { }

  ngOnInit(): void {
    this.signup.getDuties();
  }

  formControl(page: number){
    let page1: any;
    page1 = document.getElementById('page-1');

    let page2: any;
    page2 = document.getElementById('page-2');

    let page3: any;
    page3 = document.getElementById('page-3');

    if(page == 1){
      page1.style.display = 'block';
      page2.style.display = 'none';
      page3.style.display = 'none';
    }
    else if(page == 2){
      page1.style.display = 'none';
      page2.style.display = 'block';
      page3.style.display = 'none';
    }
    else if(page == 3){
      page1.style.display = 'none';
      page2.style.display = 'none';
      page3.style.display = 'block';
    }
  }
}
