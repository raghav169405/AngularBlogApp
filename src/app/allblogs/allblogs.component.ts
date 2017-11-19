import { Component, OnInit } from '@angular/core';
import {IBlog} from '../userblog/Blog';
import {BlogService} from '../blog.service';
import {UserService} from '../user.service';
import {IUser} from '../login/user';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-allblogs',
  templateUrl: './allblogs.component.html',
  styleUrls: ['./allblogs.component.css']
})
export class AllblogsComponent implements OnInit {
  blogs: IBlog[];
  activeUser: IUser;
  Users: IUser[];
  constructor(private blogservice: BlogService, private req: UserService, private router: Router) { }

  ngOnInit() {
    this.blogservice.getBlogs().subscribe(blogs => this.blogs = blogs);
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
  MarkFavaourite(blog) {
    blog.favourite = 'YES' ;
    this.router.navigate(['all']);
  }

}
