import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Account } from '../types/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getAccountById(id: number) {
    return this.httpClient
    .get<Account>(environment.apiBackendPoint + '/api/v1/accounts/' + id)
    .toPromise();
  }
}
