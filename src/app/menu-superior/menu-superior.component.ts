import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {
  usuario: string;
  constructor() {
    const jwt = new JwtHelperService();
    console.log(jwt.decodeToken(localStorage.getItem('token')));
    this.usuario = jwt.decodeToken(localStorage.getItem('token'));
  }

  ngOnInit() {
  }

}
