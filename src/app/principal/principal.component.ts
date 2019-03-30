import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const helper = new JwtHelperService();
    console.log(helper.decodeToken(localStorage.getItem('token')));
  }
}
