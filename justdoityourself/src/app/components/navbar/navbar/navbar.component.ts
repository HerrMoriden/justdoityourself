import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {LoginComponent} from '../../login/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private modalRef: MDBModalRef;

  constructor(
    private modalService: MDBModalService
  ) { }

  ngOnInit(): void {
  }

  openLoginModal(): void {
    this.modalRef = this.modalService.show(LoginComponent);
  }
}
