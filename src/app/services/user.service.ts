import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL = "http://localhost:8080/utilisateur";

  constructor() { }

  createUser(){}
}
