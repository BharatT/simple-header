import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

get isUserLogedIn() {
  console.log('Service called');
  return true;
}
get isAdminRole() {
  return true;
}

}
