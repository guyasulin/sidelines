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

  login(email:string) :Observable<user> {
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<user>(this.baseUrl,email, {headers})
    .pipe(
      // map(res => {
      //   return JSON.stringify(res)
      // })
    )
  }
}
