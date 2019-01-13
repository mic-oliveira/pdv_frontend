import { Component, OnInit } from '@angular/core';
import {Produto} from '../modelo/produto';
import {ClrDatagridSortOrder} from '@clr/angular';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  load = false;
  page = 5;
  ordenacao = ClrDatagridSortOrder.ASC;
  produtos: Produto[] = [];
  constructor() { }

  ngOnInit() {
  }

  getProdutos() {}
  clickAdicionar() {}
  clickEditar() {}
  clickDeletar() {}

}
