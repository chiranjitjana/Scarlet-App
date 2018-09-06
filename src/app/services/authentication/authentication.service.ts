import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';


const USER_KEY = 'token';


@Injectable()
export class AuthenticationService {
  constructor(private httpclient:HttpClient) { }

  login(username:string,password:string){
    return this.httpclient.post<any>('/api/login',{ email: username, password: password })
    .pipe(map(data => {
        // login successful if there's a jwt token in the response
        if (data && data.success) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(USER_KEY, JSON.stringify(data.success.token));
        }

        return data;
    }));
  }

  public getToken(): string {
    return localStorage.getItem(USER_KEY);
  }

  public isAuthenticated():boolean{
    if(localStorage.getItem(USER_KEY)!=null){
      return true;
    }
    return false;
  }

  logout(){
      localStorage.removeItem(USER_KEY);
  }
}
