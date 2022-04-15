import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL = "http://localhost:8080/user";

  constructor(private client: HttpClient) { }

  connected : boolean =false;
  username! : String; 

  obsUserIsConnected = new BehaviorSubject<boolean>(this.connected); 

  obsUser = new BehaviorSubject<String>(this.username); 




  // GET 
  getUsers(): Observable<User[]>{
    return this.client.get<User[]>(this.BASE_URL)
  }

  // GET ONE 
  getOneUser(id : number): Observable<User>{
    return this.client.get<User>(this.BASE_URL + "/" + id)
  }

  // GET ONE BY USERNAME
  getOneByUsername(username : String) : Observable<User>{
    return this.client.get<User>(this.BASE_URL + "/username/" + username.trim()); 
  }


  // POST
  createUser(user : User){
    return this.client.post<User>(this.BASE_URL + "/add" , user);
  }

  // DELETE
  deleteUser(id : number){
    return this.client.delete<User>(this.BASE_URL + "/" + id)
  }

  // PUT 
  updateUser(id : number, user : User){
    return this.client.put<User>(this.BASE_URL + "/" + id, user)
  }


  connection(username : String, password : String){
    this.username = username;

    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${btoa(username.trim() +":" + password.trim())}`)
    }
    
    this.client.get(this.BASE_URL, header).subscribe({
      next: () => {
        this.connected = true; 
        this.obsUserIsConnected.next(this.connected);
      },
      error: err => alert("Le pseudo ou le mot de passe est incorrect"),
    }); 

    this.obsUser.next(this.username); 
  }
}; 
