import { Component, OnInit } from '@angular/core';
import { IUser} from '../login/user';
import { UserService} from '../user.service';
import {Router, RouterModule} from '@angular/router';
@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {
  Users: IUser[];
  activeUser: IUser;

  constructor(private req: UserService, private router: Router) {
  }

  ngOnInit() {
    this.req.getUsers().subscribe(data => {
      this.Users = data;
      this.activeUser = this.Users.find(u => u.status === true);
    });
    }

   checkactive() {
     console.log(this.activeUser);
      if (this.activeUser) { return false;
      } else {
        return true; }
    }
}
