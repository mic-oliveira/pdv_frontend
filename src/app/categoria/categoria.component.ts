import { Component, OnInit } from '@angular/core';
import {Categoria} from '../modelo/categoria';
import {ClrDatagridSortOrder} from '@clr/angular';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  load = false;
  page = 5;
  ordenacao = ClrDatagridSortOrder.ASC;
  categorias: Categoria[] = [];
  constructor() { }

  ngOnInit() {
  }
  getProdutos() {}
  clickAdicionar() {}
  clickEditar() {}
  clickDeletar() {}
}
