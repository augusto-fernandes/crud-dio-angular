import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/ef244496-a6fa-4d6f-b282-a6ee8851b7f5'

  constructor(private httpCLient: HttpClient) { }

  //C.R.U.D - CREATE, READ, UPDATE, DELETE
  //retorna a lista de usuarios READ

  getUsers(): Observable <User[]>{
    return this.httpCLient.get<User[]>(this.apiUrl);

  }
}
