import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/environments/enviroment';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

url:string= enviroment.login.loginServiceUrl;
headers = enviroment.login.headers;

  constructor(private httpClient: HttpClient) { }

  autenticateUser(user: User): Observable<Token> {
    const headers = this.setHeaders(user);
    return this.httpClient.post<Token>(`${this.url}`, user, {headers})
  }

  private setHeaders(user: User) {
    const headers=new HttpHeaders();
    headers.append('Content-Type', this.headers.content);
    headers.append('Header', this.headers.header);
    headers.append('Content-Length', JSON.stringify(user).length.toString());

    return headers;
  }
}
