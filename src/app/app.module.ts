import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { UserService } from './user.service';
import {Http, HttpModule} from '@angular/http'


const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'sign',
    component: SignFormComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginFormComponent,
    SignFormComponent,
    HomeComponent
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
