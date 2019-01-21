import {Crud} from '../interfaces/crud';
import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';

@Injectable()
export class AbstractService implements Crud {
  protected add(object: any) {
    return throwError(new Error('Metódo não implementado'));
  }

  protected delete(object: any) {
    return throwError(new Error('Metódo não implementado'));
  }

  protected edit(object: any) {
    return throwError(new Error('Metódo não implementado'));
  }

  protected get() {
    return throwError(new Error('Metódo não implementado'));
  }

  protected save(object: any) {
    return throwError(new Error('Metódo não implementado'));
  }
}
