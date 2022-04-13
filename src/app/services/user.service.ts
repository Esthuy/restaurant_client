import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL = "http://localhost:8080/user";

  constructor(private client: HttpClient) { }


  // GET 
  getUsers(): Observable<User[]>{
    return this.client.get<User[]>(this.BASE_URL)
  }

  // GET ONE 
  getOneUser(id : number): Observable<User>{
    return this.client.get<User>(this.BASE_URL + "/" + id)
  }

  // POST
  createUser(user : User){
    return this.client.post<User>(this.BASE_URL + "/add" , user);
  }

  // DELETE
  deleteUser(id : number){
    return this.client.delete<User>(this.BASE_URL + "/" + id)
  }
}
