import { Component, OnInit } from '@angular/core';
import {IBlog} from '../userblog/blog';
import { BlogService} from '../blog.service';
import {UserService} from '../user.service';
import {IUser} from '../login/user';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {
//  blog: IBlog[];
  Users: IUser[];
  activeUser: IUser;

  constructor(private request: BlogService, private userservice: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userservice.getUsers().subscribe(data => {
      this.Users = data;

    });
  }

  Create(title, category, body) {
    this.activeUser = this.Users.find(u => u.status === true);
    const blog = {
      title: title,
      category: category,
      body: body,
      author: this.activeUser.name,
      id: null
    };
    this.request.postBlogs(blog)
      .subscribe(data => {
        console.log(data);
      });
    location.reload();
    this.router.navigate(['userblog']);
  }
}
