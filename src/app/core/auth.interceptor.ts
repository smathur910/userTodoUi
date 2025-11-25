import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Is HttpRequest?", req.constructor.name);
  const token = localStorage.getItem('token');

  if (token) {
    req = req.clone({
      setHeaders: { 'x-auth-token': token }
    });
  }

  return next(req);
};
