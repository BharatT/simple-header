import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserServiceService {

  constructor(private http: HttpClient) { }
  url = "https://jsonplaceholder.typicode.com/users";
  getAllUser() {
    return this.http.get(this.url);
  }
}
