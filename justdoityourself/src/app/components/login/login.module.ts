import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {
  ButtonsModule,
  IconsModule,
  InputsModule,
  InputUtilitiesModule,
  ModalModule,
  WavesModule
} from 'angular-bootstrap-md';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [LoginComponent],
    exports: [
        LoginComponent
    ],
  imports: [
    CommonModule,
    IconsModule,
    WavesModule,
    ButtonsModule,
    ModalModule,
    ReactiveFormsModule,
    InputUtilitiesModule,
    InputsModule,
  ]
})
export class LoginModule { }
