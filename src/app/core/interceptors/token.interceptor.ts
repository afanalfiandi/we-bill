import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const sessionData = localStorage.getItem('authData');

  if (sessionData !== null) {
    const authData = JSON.parse(sessionData);
    const token = authData.token;
    const newRequestData = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(newRequestData);
  } else {
    return next(req);
  }
};
