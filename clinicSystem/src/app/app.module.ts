import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";

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
import { LoginComponent } from "./login/login.component";
import {FormsModule} from "@angular/forms";
import { ComposeMessageComponent } from './pages/messages/compose-message/compose-message.component';
import { AccountComponent } from './pages/account/account.component';
import { AppointmentComponent } from './pages/appointments/appointment/appointment.component';
import { SentMessagesComponent } from './pages/messages/sent-messages/sent-messages.component';
import { MessageComponent } from './pages/messages/message/message.component';
import { MobileNavbarComponent } from './pages/mobile-navbar/mobile-navbar.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'appointments', component: AppointmentsComponent},
  {path: 'appointments/:id', component: AppointmentComponent},
  {path: 'clinics', component: AllClinicsComponent},
  {path: 'clinic/:id', component: ClinicComponent},
  {path: 'clinic/:id/appointment', component: ClinicAppointmentComponent},
  {path: 'clinic/:id/inquiry', component: ClinicInquiryComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'messages/sent', component: SentMessagesComponent},
  {path: 'messages/compose', component: ComposeMessageComponent},
  {path: 'messages/message', component: MessageComponent},
  {path: 'account', component: AccountComponent},
  {path: 'invalid', component: NotfoundComponent},
  {path: '**', redirectTo: 'invalid'}
]

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
    LoginComponent,
    ComposeMessageComponent,
    AccountComponent,
    AppointmentComponent,
    SentMessagesComponent,
    MessageComponent,
    MobileNavbarComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)],
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
