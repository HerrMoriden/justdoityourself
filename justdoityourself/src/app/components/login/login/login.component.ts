import {Component, OnInit} from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

  constructor(
    public modalRef: MDBModalRef,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      loginFormModalEmail: new FormControl('', [Validators.required, Validators.email]),
      loginFormModalPassword: new FormControl('', [Validators.required])
    });
  }

  get loginFormModalEmail() {
    return this.loginForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.loginForm.get('loginFormModalPassword');
  }

}
