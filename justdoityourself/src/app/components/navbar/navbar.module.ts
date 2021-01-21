import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';



@NgModule({
    declarations: [NavbarComponent],
    exports: [
        NavbarComponent
    ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class NavbarModule { }
