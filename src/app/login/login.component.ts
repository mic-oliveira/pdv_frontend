import {User} from '../modelo/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalid = false;
  user: User = new User();

  constructor() { }

  ngOnInit() {
  }
  
  clickLogin(){
    
  }

}
