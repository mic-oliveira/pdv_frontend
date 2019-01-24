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

  public getProdutos(): Observable<any> {
    return this.get();
  }

  public deletarProduto(object: Produto): Observable<any> {
    return this.delete(object);
  }

  public salvar(object: Produto): Observable<Produto[]> {
    return this.save(object);
  }
}
