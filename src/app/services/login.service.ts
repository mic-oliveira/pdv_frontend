import { Injectable } from '@angular/core';
import {ConcretService} from './concret-service';
import {HttpClient} from '@angular/common/http';
import {User} from '../modelo/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ConcretService {

  constructor(http: HttpClient) {
    super(http);
    this.url = 'login';
  }

  logar(user: User) {
    return this.http.post(this.url, user);
  }

}
