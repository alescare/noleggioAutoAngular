import {Injectable} from '@angular/core';

import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpContext, HttpErrorResponse, HttpHeaders,} from '@angular/common/http';
import {Router} from '@angular/router';
import {Utente} from "../../entity/utente";
import {BYPASS_LOG} from "./auth.interceptor";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'http://localhost:8080/api/jwt';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router) {
  }

  // Sign-in
  signIn(user: Utente) {
    return this.http
      .post<any>(`${this.endpoint}/authenticate`, user, { context: new HttpContext().set(BYPASS_LOG, true) })
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        this.getUserProfile().subscribe(value => {
          localStorage.setItem('utenteLoggato', JSON.stringify(value));
          this.router.navigate(['home']);
        })

      });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      localStorage.removeItem('utenteLoggato');
      this.router.navigateByUrl("/");
    }
  }

  // User profile
  getUserProfile(): Observable<Utente> {
    let api = `${this.endpoint}/user-profile`;
    return this.http.get<Utente>(api,{headers: this.headers}).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
