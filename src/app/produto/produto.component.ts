import { Component, OnInit } from '@angular/core';
import {Produto} from '../modelo/produto';
import {ClrDatagridSortOrder} from '@clr/angular';
import {ProdutosService} from '../services/produtos.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit{
  load = false;
  page = 5;
  ordenacao = ClrDatagridSortOrder.ASC;
  produtos: Produto[];
  constructor(private produtoService: ProdutosService) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe( (x: any) => {
      this.produtos = x.data;
      console.log(x);
    });
    console.log(this.produtos);
  }
}
