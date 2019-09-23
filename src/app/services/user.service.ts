import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { UserLogin } from '../models/userLogin';
import { User } from '../models/user'
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment'
import { TypeRoles } from '../models/type-roles.enum';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//https://angular-2-training-book.rangle.io/handout/observables/using_observables_from_other_sources.html
//https://angular-2-training-book.rangle.io/handout/http/search_with_flatmap.html
//https://blog.thoughtram.io/rx/2016/08/01/exploring-rx-operators-flatmap.html

@Injectable()
export class UserService {

  //private userUrl = 'api/users';  // URL to web api //TODO: This could be moved to DEV property

  constructor(private http: Http) { }

  getUsers(): User[] {
    let users = [
      { role: TypeRoles.Administrator, name: 'soy Admin 1', email: "admin@icetex.gov.co" },
      { role: TypeRoles.Offerer, name: 'soy Oferente 1', email: "oferent@carolina.gov.co" },
      { role: TypeRoles.Applicant, name: 'soy silicitante 1', email: "soliciatnte@yo.gov.co" }
    ];
    return users;
  }

  //Get all convocatories
  //TODO: Pagination?
  get(userLogin: UserLogin): Observable<User> {
    let body = JSON.stringify(userLogin);
    let headers = this.buildHeader();
    let options = new RequestOptions({ headers: headers });

    // var apiUrl = environment.apiUrl;   
    var apiUrl = "http://52.90.59.156:8080/scb-0.0.1-SNAPSHOT";
    var url = apiUrl + "/login/login";

    return this.http.post(url, body, options)
      .map((res: Response) => {
        return res.json() as User;
      }) // ...and calling .json() on the response to return data
      .catch(this.handleError); //...errors if any
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  setCurrentUser(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  removeCurrentUser() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }
  /*
    return this.http.get(this.userUrl)
               .toPromise()
               .then(response => response.json().data as User[])
               .catch(this.handleError);
  
                this.http.get('/api/items').subscribe(data => {
        // Read the result field from the JSON response.
        this.results = data['results'];
      });
  
  }*/

  /* GET
  http
    .get<ItemsResponse>('/api/items')
    .subscribe(
      data => {...},
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    });
  
  */

  /*
   getConvocatory(id: number): Promise<User> {
    const url = `${this.convocatoryUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Convocatory)
      .catch(this.handleError);
  }
  */

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only  
    return Promise.reject(error.message || error);
  }

  buildHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return headers;
  }
}
