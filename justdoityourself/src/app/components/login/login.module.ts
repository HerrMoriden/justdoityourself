import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {ButtonsModule, IconsModule, ModalModule, WavesModule} from 'angular-bootstrap-md';



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
  ]
})
export class LoginModule { }
