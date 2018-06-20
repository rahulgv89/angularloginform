import { Component } from '@angular/core';
import {UserService, User} from '../user.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [UserService],

})
export class LoginFormComponent {

  public user = new User('','');
  public errorMsg = '';

  constructor( private _service:UserService) {}

  login() {
      if(!this._service.login(this.user)){
          this.errorMsg = 'Failed to login';
      }
  }
   }
  
