import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { NavbarModule } from './components/navbar/navbar.module';
import { LandingPageModule } from './components/landing-page/landing-page.module';
import { FooterModule } from './components/footer/footer.module';
import { LoginModule } from './components/login/login.module';
import { LoginComponent } from './components/login/login/login.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    LandingPageModule,
    FooterModule,
    LoginModule
  ],
  providers: [],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
