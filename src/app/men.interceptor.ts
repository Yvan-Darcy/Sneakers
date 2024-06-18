import { HttpInterceptorFn } from '@angular/common/http';
//import { Injectable } from '@angular/core';


export const ApiInterceptor: HttpInterceptorFn = (req, next) => {

  const apiKey = '03uRm35v+HVe/0Z7ZiPZiw==nXZywLhYndX6ZiTT';

  const reqHeader = req.clone({
    headers: req.headers.set(
      'X-Api-key',
      apiKey
    )
  })

  return next(reqHeader)
  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   const headers = new HttpHeaders().set('X-Api-Key', this.apiKey);
  //   const authReq = req.clone({ headers });
  //   return next.handle(authReq);
  // }
}
