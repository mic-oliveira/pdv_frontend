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

  constructor(private http: HttpClient) {
    super(http);
    super.url = 'produtos';
  }

  public get() {
    return super.get();
  }

  public delete(object: Object) {
    return super.delete(object);
  }

  public save(object: Object): Observable<any> {
    return super.save(object);
  }
}
