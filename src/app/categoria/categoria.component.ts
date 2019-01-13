import { Component, OnInit } from '@angular/core';
import {Categoria} from '../modelo/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias: Categoria[] = [];
  constructor() { }

  ngOnInit() {
  }

}
