import { Component, OnInit } from '@angular/core';
import {AlertService} from '../services/alert.service';
import {AlertApp} from '../modelo/alert-app';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }
}
