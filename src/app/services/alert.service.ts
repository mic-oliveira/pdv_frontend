import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AlertApp} from '../modelo/alert-app';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertObj = new AlertApp();
  private alerta = new BehaviorSubject(this.alertObj);
  alertaApp = this.alerta.asObservable();
  constructor() { }

  emitirAlerta(alert: AlertApp) {
    this.alerta.next(alert);
  }
}

