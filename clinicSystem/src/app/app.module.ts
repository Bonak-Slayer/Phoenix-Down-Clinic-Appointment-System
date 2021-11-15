import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from "./main/main.component";
import { BodyComponent } from "./main/body/body.component";
import { FooterComponent } from "./main/footer/footer.component";
import { HeaderComponent } from "./main/header/header.component";
import { AppointmentsComponent } from "./pages/appointments/appointments.component";
import { ClinicsComponent } from "./pages/clinics/clinics.component";
import { AllClinicsComponent } from "./pages/clinics/all-clinics/all-clinics.component";
import { ClinicComponent } from "./pages/clinics/clinic/clinic.component";
import { ClinicAppointmentComponent } from "./pages/clinics/clinic-appointment/clinic-appointment.component";
import { ClinicInquiryComponent } from "./pages/clinics/clinic-inquiry/clinic-inquiry.component";
import { NotifsComponent } from "./pages/notifs/notifs.component";
import { MessagesComponent } from "./pages/messages/messages.component";
import { NavbarComponent } from "./pages/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    AppointmentsComponent,
    ClinicsComponent,
    AllClinicsComponent,
    ClinicComponent,
    ClinicAppointmentComponent,
    ClinicInquiryComponent,
    NotifsComponent,
    MessagesComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
