import {User} from '../modelo/user';
import {Component, OnInit, ViewChild} from '@angular/core';
import {invalid} from '../../../node_modules/@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalid = false;
  user: User = new User();
  @ViewChild('login') login;
  public padraoCustom = {'A': { pattern: new RegExp('\[^\\s,+=\]')}};
  constructor() { }

  ngOnInit() {
  }
  clickLogin() {
    if (this.login.invalid) {
      this.invalid = true;
    }
  }

}
