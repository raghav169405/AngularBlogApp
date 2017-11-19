import { Component, OnInit } from '@angular/core';
import {RouterModule, Route, Router} from '@angular/router';

@Component({
  selector: 'app-navbarlogin',
  templateUrl: './navbarlogin.component.html',
  styleUrls: ['./navbarlogin.component.css']
})
export class NavbarloginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  Login() {
    this.route.navigate(['login']);
  }
}
