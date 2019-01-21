import { Injectable } from '@angular/core';
import {ConcretService} from './concret-service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService extends ConcretService{

  constructor(private http: HttpClient) {
    super(http);
  }

  protected get(): Observable<Object> {
    return super.get();
  }
}
