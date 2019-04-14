import {Component, ElementRef, OnInit, Renderer, Renderer2, ViewChild} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Renderer3} from '@angular/core/src/render3/interfaces/renderer';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {
  usuario: any;
  @ViewChild('subNav') subNav: ElementRef;
  constructor(private renderer: Renderer2) {
    const jwt = new JwtHelperService();
    console.log(jwt.decodeToken(localStorage.getItem('token')));
    this.usuario = jwt.decodeToken(localStorage.getItem('token'));
  }

  ngOnInit() {
  }

  showSubNav() {
    this.renderer.setStyle(
      this.subNav.nativeElement,
      'visibility',
      'visible'
    );
  }

  logout() {
    return false;
  }

}
