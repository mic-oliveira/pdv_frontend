import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produto} from '../modelo/produto';
import {ConcretService} from './concret-service';
import {Observable} from 'rxjs';
import {Categoria} from '../modelo/categoria';
import {isNull, isUndefined} from 'util';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends ConcretService {
  produtos: Produto[] = [];

  constructor(http: HttpClient) {
    super(http);
    this.url = 'produtos';
  }

  save(object: any): Observable<any> | Observable<any> {
    const jwt = new JwtHelperService();
    object.empresa_id = jwt.decodeToken(localStorage.getItem('token')).empresa_id;
    return super.save(object);
  }

  public addCategoria(produto: Produto, categoria: Categoria) {
    return this.http.post(this.url + '/' + produto.id + '/categorias', categoria);
  }

  public delCategoria(produto: Produto, categoria: Categoria) {
    return this.http.post(this.url + '/' + produto.id + '/removerCategoria/', categoria);
  }
}
