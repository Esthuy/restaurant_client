import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL = "http://localhost:8080/user";

  constructor(private client: HttpClient) { }

  connected! : boolean; 

  obsUser = new Subject<boolean>(); 
  //Ajouter dans méthode de connection obsUser.next(connected)

  



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



  connection(username : String, password : String){
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${btoa(username.trim() +":" + password.trim())}`)
    }
    

    this.client.get(this.BASE_URL, header).subscribe({
      complete: () => {
        this.connected = true; 
        this.obsUser.next(this.connected); 
      },
      error: err => alert("Le pseudo ou le mot de passe est incorrect"),
    }); 
  }
}; 
