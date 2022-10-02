import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface user {
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl= 'assets/data/user.json';

  constructor(private http: HttpClient) { }

  login() :Observable<user> {
    return this.http.get<user>(this.baseUrl)
  }
}
