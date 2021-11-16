import { Component, OnInit } from '@angular/core';
import {ClinicService} from "./clinic.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

  constructor(public clinicService: ClinicService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.clinicService.getClinic(id);
  }

}
