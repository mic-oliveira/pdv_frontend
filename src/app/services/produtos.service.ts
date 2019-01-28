import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produto} from '../modelo/produto';
import {ConcretService} from './concret-service';
import {Observable} from 'rxjs';
import {Categoria} from '../modelo/categoria';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends ConcretService {
  produtos: Produto[] = [];

  constructor(http: HttpClient) {
    super(http);
    this.url = 'produtos';
  }

  public addCategoria(produto: Produto, categoria: Categoria) {
    return this.http.post(this.url + '/' + produto.id + '/categorias', categoria);
  }

  public delCategoria(produto: Produto, categoria: Categoria) {
    return this.http.post(this.url + '/' + produto.id + '/removerCategoria/', categoria);
  }
}
