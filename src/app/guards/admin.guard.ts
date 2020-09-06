import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

@Injectable()
export class AdminGuard implements CanActivateChild {
  constructor (private authService: AuthService){

  }
  /* 
  next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
  */
  canActivateChild() {
    if (this.authService.isAdminRole) {
      return true;
    } else {
      return false;
    }
  }
}
