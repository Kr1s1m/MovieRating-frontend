import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  username = '';
  roles: string[] = [];

  constructor(private authenticationService: AuthenticationService,
              private tokenStorageService: TokenStorageService)
              { }

  ngOnInit(): void {
    if(this.tokenStorageService.getToken()){
      this.isLoggedIn = true;
      this.username = this.tokenStorageService.getAccount().username;
      this.roles = this.tokenStorageService.getAccount().roles;
    }
  }

  onSubmit()
  {
    this.authenticationService.login(this.form).subscribe(
      data => {
        this.tokenStorageService.saveToken(data.token);
        this.tokenStorageService.saveAccount(data.accountInfo);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        
        this.authenticationService.getLoggedInType.next('login');
        this.ngOnInit();
      },
      err => {

        this.authenticationService.getLoggedInType.next('logout');
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  logout()
  {
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
    this.username = '';
    this.roles = [];
    this.errorMessage = '';
    this.authenticationService.getLoggedInType.next('logout');
  }

}
