import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {IUser} from './login/user';

@Injectable()
export class UserService {
  private Base_Url = 'http://localhost:3000/users';
  constructor(private req: HttpClient) { }
  getUsers(): Observable<IUser[]> {
    return this.req.get<IUser[]>(this.Base_Url)
      .do(data => console.log('All : ' + JSON.stringify(data)));
  }
  changeActive(item) {
    return this.req.patch(this.Base_Url + '/' + item.id, item)
      .do(data => console.log('All patch : ' + JSON.stringify(data)));
  }

}
