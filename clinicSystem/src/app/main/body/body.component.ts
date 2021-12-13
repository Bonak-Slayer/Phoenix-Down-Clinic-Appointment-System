import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signUp(){
    let signUpButton: any;
    signUpButton = document.getElementById('sign-up');
    signUpButton.style.display = 'none';

    let portals: any;
    portals = document.getElementById('portals');
    portals.style.display = 'inline-block';
  }
}
