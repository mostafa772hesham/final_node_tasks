import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercetorService implements HttpInterceptor {

  constructor(private authservice:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token =this.authservice.gettoken()
    let tokenreq=req.clone({
      setHeaders:{
        Authorization: 'Bearer '+token
      }
    })
    return next.handle(tokenreq)
  }
}
