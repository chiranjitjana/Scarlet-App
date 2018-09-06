import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../../services/index';

@Injectable()
export class IsLoggedIn {
  constructor(
    private router: Router,
    private authService: AuthenticationService) {
  }

  resolve(): void {
    if (this.authService.isAuthenticated()) this.router.navigate(['/home'])
  }
}
