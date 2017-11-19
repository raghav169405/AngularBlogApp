import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { IBlog } from './userblog/Blog';
import 'rxjs/add/operator/do';
const URL = 'http://localhost:3000/blogs';

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<IBlog[]> {
    console.log('in blog service');
    return this.http.get<IBlog[]>(URL)
      .do(data => console.log('All : ' + JSON.stringify(data)));
  }
  deleteBlogs(data) {
    console.log(data.id);
    return this.http.delete(URL + '/' + data.id);
  }
  updateblog(data) {
    return this.http.patch(URL + '/' +  data.id, data);
  }
  postBlogs(data) {
    return this.http.post(URL , data);
  }


}

