import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';
import { tap } from 'rxjs';
import { protectedRouter } from '../../shared/consts/protected-router.const';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const authService = inject(AuthService);
  const session = authService.getAuthSession();

  return protectedRouter.includes(state.url) && !session
    ? router.navigate(['/auth'])
    : false;
};
