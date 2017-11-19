import { Component, OnInit } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { UserService} from '../user.service';
import { IUser} from '../login/user';


@Component({
  selector: 'app-navbarlogout',
  templateUrl: './navbarlogout.component.html',
  styleUrls: ['./navbarlogout.component.css']
})
export class NavbarlogoutComponent implements OnInit {
  Users: IUser[];
  activeUser: IUser;

  constructor(private router: Router, private userservice: UserService) {
  }

  ngOnInit() {
    this.userservice.getUsers().subscribe(data => {
      this.Users = data;
      this.activeUser = this.Users.find(u => u.status === true);
    });
  }

  Logout() {
    if (this.activeUser) {
      this.activeUser.status = false;
      this.userservice.changeActive(this.activeUser).subscribe();
      location.reload();
      this.router.navigate(['all']);
    } else {
      alert('Something wenr wrong!!');
    }
  }
  CreateClick() {
    this.router.navigate(['createblog']);
  }
}
