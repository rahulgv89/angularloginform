import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Http, Response} from '@angular/http'
import { map } from 'rxjs/operators'


export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 
var users = [
  new User('admin@admin.com','admin')
  ];

export class Userr {
  constructor(
    public email: string,
    public password: string,
    public confirmpassword: string) { }
}
 
var userss = [
  new Userr('admin@admin.com','admin','admin'),
  
];
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
 
 getEmployees(){
  return[
        {"name": "Lionel Messi", "position": "Forward", "country": "Argentina", "club": "Barcelona"},
        {"name" :"Cristiano Ronaldo", "position" :"Forward", "country":"Portugal", "club":"Real Madrid"},
        {"name" :"Xavi", "position" :"Midfielder", "country":"Spain", "club":"Al Sadd"},
        {"name": "Frank Lampard", "position": "Midfielder", "country": "England ", "club": " 	Derby Count"},
        {"name" :" 	Zinedine Zidane", "position" :"Midfielder", "country":"France", "club":"Real Madrid"}
  ]
}

  // private _url:string = "employeedata.json"
   constructor(private _router: Router, private _http: Http) { }
  // getEmployees(){
  //   return this._http.get(this._url)
  //  .pipe(map((response:Response)=>response.json()))
  // }
 
  login(user){
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
       this._router.navigate(['dashboard']);      
      return true;
    }
    return false;
 
  }

  signup(user){
    var authenticatedUser = userss.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password && authenticatedUser.confirmpassword === user.confirmpassword
    ){
       this._router.navigate(['home']);      
      return true;
    }
    return false;
 
  }
    }
