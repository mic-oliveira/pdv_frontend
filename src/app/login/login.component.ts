import {User} from '../modelo/user';
import {Component, OnInit, ViewChild} from '@angular/core';
import {invalid} from '../../../node_modules/@angular/compiler/src/render3/view/util';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalid = false;
  user: User = new User();
  mensagem: string;
  @ViewChild('login') login;
  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit() {
  }
  clickLogin() {
    if (this.login.invalid) {
      this.mensagem = 'Login ou senha incorreto.';
      this.invalid = true;
      return true;
    }
    this.loginService.logar(this.user).toPromise().then((x: any) => {
      localStorage.setItem('token', x.token);
      this.route.navigateByUrl('/dashboard');
    }).catch(() => {
      this.mensagem = 'Servidor inacessível.';
      this.invalid = true;
      return true;
    });
  }

}
