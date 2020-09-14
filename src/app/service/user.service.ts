import { Injectable } from '@angular/core';
import { User } from "src/app/model/user";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  createUser(user:User){
    return this.http.post("http://localhost:5555/userdata/",user)
    }

}
