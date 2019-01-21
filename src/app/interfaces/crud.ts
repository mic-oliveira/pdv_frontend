import {Observable} from 'rxjs';

export interface Crud {
  get();
  save(object: any);
  add(object: any);
  edit(object: any);
  delete(object: any);
}
