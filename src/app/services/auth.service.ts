import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(protected http: Http) { }

  login(email: string, password: string) {
    let headers = this.buildHeader(email, password);
    let options = new RequestOptions({ headers: headers });
    
    // return this.http.get(environment.SERVER_LOCAL + 'login', options)
    return this.http.get(environment.SERVER_URL + 'login', options)
      .map(res => res.json())
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  setCurrentUser(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken() {
    return JSON.parse(localStorage.getItem('token'));
  }

  removeCurrentUser() {
    localStorage.removeItem('currentUser');
  }

  buildHeader(email: string, password: string) {
    let base64 = btoa(email + ':' + password);
    this.setToken(base64);
    console.log(this.getToken());
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + base64);
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    
    headers.append('Access-Control-Allow-Origin', environment.SERVER_URL);
    // headers.append('Access-Control-Allow-Origin', environment.SERVER_LOCAL);

    return headers;
  }

}
