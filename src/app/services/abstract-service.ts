import {Crud} from '../interfaces/crud';
import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {AppConfig} from '../app-config';

@Injectable()
export abstract class AbstractService implements Crud {
  // private host = AppConfig.url;

  constructor() {
  }

  public add(object: any): any {
    return throwError(new Error('Metódo não implementado'));
  }

  public delete(object: any): any {
    return throwError(new Error('Metódo não implementado'));
  }

  public edit(object: any): any {
    return throwError(new Error('Metódo não implementado'));
  }

  public get(): any {
    return throwError(new Error('Metódo não implementado'));
  }

  public save(object: any): any {
    return throwError(new Error('Metódo não implementado'));
  }

  getHost() {
    return AppConfig.url;
  }
}
