import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produto} from '../modelo/produto';
import {AppConfig} from '../app-config';
import {ConcretService} from './concret-service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends ConcretService {
  produtos: Produto[] = [];

  constructor(http: HttpClient) {
    super(http);
    this.url = 'produtos';
  }

  public getProdutos() {
    return this.get();
  }

  public deletarProduto(object: Object) {
    return this.delete(object);
  }

  public salvar(object: Object) {
    return this.save(object);
  }
}
