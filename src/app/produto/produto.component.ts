import {Component, OnInit, ViewChild} from '@angular/core';
import {Produto} from '../modelo/produto';
import {ClrDatagridSortOrder} from '@clr/angular';
import {ProdutosService} from '../services/produtos.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ConcretService} from '../services/concret-service';
import {AdicionarProdutoComponent} from './adicionar-produto/adicionar-produto.component';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  @ViewChild(AdicionarProdutoComponent) child: AdicionarProdutoComponent;
  load = false;
  page = 5;
  ordenacao = ClrDatagridSortOrder.ASC;
  produtos: Produto[];
  constructor(private produtoService: ProdutosService) {
    this.produtoService.url = 'produtos';
  }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos() {
    this.produtoService.get().toPromise().then( (x: any) => {
      this.produtos = x.data as Produto[];
    }).catch( x => {
      return caches.match('/produtos');
    });
  }

  deletarProduto(produto: Produto) {
    this.produtoService.delete(produto).toPromise().then( () => {
      this.getProdutos();
    });
  }

  editarProduto(produto: Produto) {
    this.child.produto = produto;
    this.child.visivel = false;
    this.child.modal = true;
  }
  clickAdicionar() {
    this.child.produto = new Produto();
    this.child.visivel = false;
    this.child.modal = true;
  }
}
