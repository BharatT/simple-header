import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserServiceService } from '../user-service.service';

@Injectable()
export class ResolveGuard implements Resolve<any> {
  constructor(private userService: UserServiceService) { }
  resolve() {
   return this.userService.getAllUser();
  }
}
