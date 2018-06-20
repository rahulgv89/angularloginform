import { Component } from '@angular/core';
import {UserService, Userr} from '../user.service'

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.css'],
  providers: [UserService],
})
export class SignFormComponent  {

  public user = new Userr('','','');
  public errorMsg = '';

  constructor(private _service:UserService) { }

  signup() {
    if(!this._service.signup(this.user)){
        this.errorMsg = 'Failed to signup';
    }
}
}
