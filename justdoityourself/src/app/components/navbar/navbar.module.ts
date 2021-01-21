import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {RouterModule} from "@angular/router";
import {LoginModule} from "../login/login.module";



@NgModule({
    declarations: [NavbarComponent],
    exports: [
        NavbarComponent
    ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    RouterModule,
    LoginModule,
  ]
})
export class NavbarModule { }
