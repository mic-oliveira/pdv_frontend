import { Component, OnInit } from '@angular/core';
import {AlertApp} from '../modelo/alert-app';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert-app.component.html',
  styleUrls: ['./alert-app.component.css']
})
export class AlertAppComponent implements OnInit {
  show = false;
  alert: AlertApp = new AlertApp();
  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.alertaApp.subscribe( (x: AlertApp) => {
      this.alert = x;
      this.show = x.visible;
    });
  }
}
