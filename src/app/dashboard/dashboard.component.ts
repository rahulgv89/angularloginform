import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import { Response } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserService],
})
export class DashboardComponent{

  employees = [];

  constructor(private _service:UserService) { }

  ngOnInit(){
    this.employees = this._service.getEmployees();
    
    // this._service.getEmployees()
    // .subscribe(resEmployeeData => this.employees = resEmployeeData);
}



}
