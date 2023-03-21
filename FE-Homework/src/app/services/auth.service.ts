import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User, Token } from 'src/modules/auth';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(credentials: {
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
  }): Observable<User> {
    return this.httpClient.post<User>(`${environment.host}/users`, credentials);
  }

  login(objectUser: { email: string; password: string }): Observable<Token> {
    return this.httpClient.post<Token>(
      `${environment.host}/auth/login`,
      objectUser
    );
  }

  profile(): Observable<{ name: string; role: string; avatar: string }> {
    return this.httpClient.get<{ name: string; role: string; avatar: string }>(
      `${environment.host}/auth/profile`,
    );
  }
}
