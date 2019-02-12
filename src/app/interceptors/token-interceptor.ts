import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request;
    try {
      const token = localStorage.getItem('token');
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      return e;
    }
    return next.handle(request);
  }

}
