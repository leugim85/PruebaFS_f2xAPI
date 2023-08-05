import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const isLoggedUser = sessionStorage.getItem('token');
  if (isLoggedUser) {
    return true;
  }

  return false;
};
