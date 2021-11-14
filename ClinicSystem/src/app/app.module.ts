import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { MainComponent } from './main/main.component';
import { BodyComponent } from './main/body/body.component';
import { FooterComponent } from './main/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ClinicsComponent } from './pages/clinics/clinics.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { NotifsComponent } from './pages/notifs/notifs.component';
import { MessagesComponent } from './pages/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    ClinicsComponent,
    AppointmentsComponent,
    NotifsComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
