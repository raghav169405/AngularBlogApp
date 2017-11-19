import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import {Router} from '@angular/router';
import { IUser} from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Users: IUser[];
  activeUser: IUser;

  constructor(private router: Router, private userservice: UserService) {
  }

  ngOnInit() {
    this.userservice.getUsers().subscribe(data => {
      this.Users = data;
    });
  }

  Authenticate(username, password) {
    this.activeUser = this.Users.find(u => u.email === username && u.password === password);
    console.log(this.activeUser);
    if (this.activeUser) {
      console.log('here');
      this.activeUser.status = true;
      this.userservice.changeActive(this.activeUser).subscribe();
      location.reload();
      this.router.navigate(['userblog']);
    } else {
      alert('Invalid Email Or Password');
    }
  }
}
