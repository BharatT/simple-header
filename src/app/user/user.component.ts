import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;
  testuser:any
  constructor(private userService:UserServiceService ,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.testuser = this.userService.getAllUser();
    this.users = this.activatedRoute.snapshot.data['data'];
    console.log(this.users);
  }

}
