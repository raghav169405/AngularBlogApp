import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarloginComponent } from './navbarlogin/navbarlogin.component';
import { LoginComponent } from './login/login.component';
import { StarterComponent } from './starter/starter.component';
import { NavbarlogoutComponent } from './navbarlogout/navbarlogout.component';
import { AllblogsComponent } from './allblogs/allblogs.component';
import {BlogService} from './blog.service';
import {UserService} from './user.service';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { UserblogComponent } from './userblog/userblog.component';
import { CreateblogComponent } from './createblog/createblog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarloginComponent,
    LoginComponent,
    StarterComponent,
    NavbarlogoutComponent,
    AllblogsComponent,
    UserblogComponent,
    CreateblogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'all', component: AllblogsComponent},
      {path: '', redirectTo: 'all', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'userblog', component: UserblogComponent},
      {path: 'logout', component: NavbarlogoutComponent},
      {path: 'createblog', component: CreateblogComponent}
    ])
  ],
  providers: [BlogService , UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
