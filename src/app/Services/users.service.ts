// users service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = '/static.aoni.io/demo/user.json';
  constructor(private http: HttpClient) { }

  public getUsers() {
     return this.http.get<User[]>(this.url);
  }

  // methods like Http GET,PUT,POST,DELETE for users will be implemnted in this service
}
