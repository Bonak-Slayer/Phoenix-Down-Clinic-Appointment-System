import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {

  constructor(public signup: SignupService) { }

  ngOnInit(): void {
  }

  formControl(page: string){
    let primary: any;
    primary = document.getElementById('primary-values');

    let secondary: any;
    secondary = document.getElementById('secondary-values');

    if(page == 'next'){
      primary.style.display = 'none';
      secondary.style.display = 'block';
    }
    else if(page == 'previous'){
      primary.style.display = 'block';
      secondary.style.display = 'none';
    }
  }

}
