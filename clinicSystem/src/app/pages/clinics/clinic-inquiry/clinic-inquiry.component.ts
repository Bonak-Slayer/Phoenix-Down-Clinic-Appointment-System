import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../login/login.service";
import {Router} from "@angular/router";
import {TemplateModel} from "./clinic-inquiry.template-model";
import {InquiryService} from "./inquiry.service";
import {ClinicService} from "../clinic/clinic.service";

@Component({
  selector: 'app-clinic-inquiry',
  templateUrl: './clinic-inquiry.component.html',
  styleUrls: ['./clinic-inquiry.component.css']
})
export class ClinicInquiryComponent implements OnInit {

  templateFill: string = '';
  templates: TemplateModel[] = [];

  firstTemplate = new TemplateModel(1, 'Who are the doctors?');
  secondTemplate = new TemplateModel(2, 'What machines do you have?');
  thirdTemplate = new TemplateModel(3, 'Do you offer laboratory tests?');

  constructor(private loginService: LoginService,
              private reroute: Router,
              public inquiryService: InquiryService,
              public clinicService: ClinicService) { }

  ngOnInit(): void {
    if(!this.loginService.isLoggedIn){
      this.reroute.navigate(['/login']);
    }
    else{
      this.templates = [];
      this.templates.push(this.firstTemplate);
      this.templates.push(this.secondTemplate);
      this.templates.push(this.thirdTemplate);
    }
  }

  useTemplate(templateId: string){
    for(let template of this.templates){
      if (template.id == +templateId) {
        this.templateFill = template.content;
      }
    }
  }
}
