import { Injectable } from '@angular/core';
import {ConcretService} from './concret-service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Printer} from '../modelo/printer';
import {AbstractService} from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:9090/print';
  }

  add(object: any): any {
  }

  delete(object: any): any {
  }

  edit(object: any): any {
  }

  get(): any {
    return this.http.get(this.url);
  }

  getHost(): string {
    return undefined;
  }

  save(object: any): any {
  }

  print(printer: Printer) {
    this.http.post(this.url + '/' + printer.modelo, 'TESTE DE IMPRESSAO');
  }

  test(printer: Printer): Observable<any> {
    return this.http.post(this.url + '/' + printer.modelo, 'TESTE DE IMPRESSAO');
  }
}
