import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

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
  
}
