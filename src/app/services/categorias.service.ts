import { Injectable } from '@angular/core';
import {ConcretService} from './concret-service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService extends ConcretService {

  constructor(http: HttpClient) {
    super(http);
    this.url = 'categorias';
  }
}
