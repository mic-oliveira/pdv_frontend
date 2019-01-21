import {AbstractService} from './abstract-service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../app-config';

@Injectable()
export class ConcretService implements AbstractService {
  private _url: string;

  constructor(private http: HttpClient) {}

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = AppConfig.url + value;
  }

  protected add(object: any): Observable<any> {
    return this.http.post(this.url, object);
  }

  protected delete(object: any): Observable<any> {
    return this.http.delete(this.url + object.id);
  }

  protected edit(object: any): Observable<any> {
    return this.http.patch(this.url + '/' + object.id, object);
  }

  protected get() {
    return this.http.get(this.url);
  }

  protected save(object: any): Observable<any> {
    if (object.id.isEmpty) {
      return this.add(object);
    }
    return this.edit(object);
  }
}
