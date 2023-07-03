import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, of, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private toastr: ToastrService,
    private loaderService: LoaderService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token');
    this.loaderService.show();
    const modifiedReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });
    return next.handle(modifiedReq).pipe(finalize(() => {
      this.loaderService.hide();
    }),
      catchError((res: HttpErrorResponse) => {
        switch (res.status) {
          case 400:
            this.toastr.warning(res.error.message);
            break;
          case 401:
            this.toastr.error(res.error.message);
            break;
        }
        return throwError(null);
        // return of();
      }
      )
    );
    // return next.handle(request);
  }
}
