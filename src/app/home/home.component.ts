import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import { Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees = [];

  constructor(private _service:UserService) { }

  ngOnInit() {
    this.employees = this._service.getEmployees();

    // this._service.getEmployees()
    // .subscribe(resEmployeeData => this.employees = resEmployeeData);
  }

}
