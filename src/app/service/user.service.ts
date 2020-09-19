import { Injectable } from '@angular/core';
// import { User } from "src/app/model/user";
import { HttpClient } from "@angular/common/http";

const api ="http://localhost/angular/";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  addUser(data){
    return this.http.post(api + 'adduser.php', data)
    }
    saveImage(data){
      return this.http.get(api + 'upload.php', data)
    }
    getImageData(){
      return this.http.get(api + 'showimage.php')
    }







    
}
