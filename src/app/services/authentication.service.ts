import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public getLoggedInType = new Subject<string>();

  constructor(private httpClient: HttpClient) { }

  login(credentials : any) : Observable<any> {
    return this.httpClient
    .post(
      environment.apiBackendPoint + '/api/v1/authentication/login/', 
      {
        email:      credentials.email,
        password:   credentials.password
      },
      httpOptions
    );
  }

  register(account : any) : Observable<any> {
    return this.httpClient
    .post(
      environment.apiBackendPoint + '/api/v1/authentication/register/',
      {
        email:              account.email,
        username:           account.username,
        password:           account.password,
        matchingPassword:   account.matchingPassword
      },
      httpOptions 
    );
  }

  verifyToken(token : string): Observable<any> {
    return this.httpClient.post(environment.apiBackendPoint + '/api/v1/authentication/token/verify', token, {
    	  headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
    });
  }

  resendToken(token : string): Observable<any> {
    return this.httpClient.post(environment.apiBackendPoint + '/api/v1/authentication/token/resend', token, {
    	  headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
    });
  }
  
}
