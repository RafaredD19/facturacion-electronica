import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthorizesService } from '../services/authorizes.service';

export const AuthGuard: CanActivateFn = async (route, state) => {
  const authorizesService = inject(AuthorizesService)
  const router = inject(Router)
  const token = await authorizesService.getToken()
  if (token) {
    console.log("Encontro el token")
    return true
  } else {
    console.log("No Encontro el token")
    const urlTreeReturn = router.createUrlTree(['/login'])
    return urlTreeReturn
  }
};
