import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { IUser} from '../login/user';
import {IBlog} from './Blog';
import {BlogService} from '../blog.service';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-userblog',
  templateUrl: './userblog.component.html',
  styleUrls: ['./userblog.component.css']
})
export class UserblogComponent implements OnInit {
  Users: IUser[];
  blogs: IBlog[];
  activeUser: IUser;
  isSelect= 0;
  constructor(private req: UserService, private request: BlogService, private router: Router) { }

  ngOnInit() {
    this.request.getBlogs()
      .subscribe(blogs => this.blogs = blogs);
    this.req.getUsers().subscribe(data => {
      this.Users = data;
      this.activeUser = this.Users.find(u => u.status === true);

    });
  }
  deleteBlog(blog) {
    this.request.deleteBlogs(blog).subscribe();
    location.reload();
    this.router.navigate(['userblog']);
  }
  updateBlog(item) {
    this.isSelect = item.id;
  }
  emitEdit(id, title, body, category, author) {
    const blog = {
      id: id,
      title: title,
      body: body,
      category: category,
      author: author
    };
    this.request.updateblog(blog).subscribe();
    location.reload();
    this.router.navigate(['userblog']);
  }
}

