import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css', './uicons-regular-rounded.css']
})
export class MobileNavbarComponent implements OnInit {

  options: any;
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  showDropdown(){
    this.options = document.getElementById('options');
    if(this.options.style.display == 'block'){
      this.options.style.display = 'none';
    }
    else{
      this.options.style.display = 'block';
    }
  }
}
