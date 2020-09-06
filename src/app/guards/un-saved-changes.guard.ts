import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AddUserComponent } from '../add-user/add-user.component';

export interface CanComponentLeave {
  canLeave: () => boolean;
}

@Injectable()
export class UnSavedChangesGuard implements CanDeactivate<CanComponentLeave> {
  canDeactivate(component: CanComponentLeave){
    if(component.canLeave) {
      return component.canLeave()
    }
    return true;
  }
}
