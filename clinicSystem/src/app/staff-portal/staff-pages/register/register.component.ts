import { Component, OnInit } from '@angular/core';
import {StaffService} from "../../staff.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(public staff: StaffService) { }

  ngOnInit(): void {
  }

}
