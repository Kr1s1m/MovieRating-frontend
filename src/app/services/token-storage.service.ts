import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const ACCOUNT_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveAccount(account : any): void {
    window.sessionStorage.removeItem(ACCOUNT_KEY);
    window.sessionStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
  }

  public getAccount(): any {
    //@ts-ignore
    return JSON.parse(sessionStorage.getItem(ACCOUNT_KEY));
  }
}
