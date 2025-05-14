import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { switchMap, tap } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  const session = authService.getAuthSession();

  if (session !== null) {
    const token = session.token;
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
