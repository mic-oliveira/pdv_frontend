import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstract-service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConcretService extends AbstractService {
  private _url: string;
  constructor(private http: HttpClient) {
    super();
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url =  this.getHost() + value;
  }

  add(object: any): Observable<any> {
    return this.http.post(this.url, object);
  }

  delete(object: any) {
    return this.http.delete(this.url + '/' + object.id);
  }

  edit(object: any): Observable<any> {
    return this.http.patch(this.url + '/' + object.id, object);
  }

  get() {
    return this.http.get(this.url);
  }

  save(object: any) {
    if (object.id.isEmpty) {
      return this.add(object);
    }
    return this.edit(object);
  }
}
