import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User, Token } from 'src/modules/auth';
import { Observable, tap } from 'rxjs';

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

  //login and setting of access token
  login(objectUser: { email: string; password: string }): Observable<Token> {
    return this.httpClient
      .post<Token>(`${environment.host}/auth/login`, objectUser)
      .pipe(
        tap<Token>((token: Token) => {
          localStorage.setItem('accessToken', token.access_token);
          localStorage.setItem('refreshToken', token.refresh_token);
        })
      );
  }

  //get data of profile user
  profile(): Observable<{ name: string; role: string; avatar: string }> {
    return this.httpClient.get<{ name: string; role: string; avatar: string }>(
      `${environment.host}/auth/profile`
    );
  }

  //logout
  logout(): void {
    try {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }

  //function that will be called in the guard to check the access token, boolean output
  isLogged(): Boolean {
    return Boolean(localStorage.getItem('accessToken'));
  }
}
