import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  welcomeMessage = '';
  clickableMessage = 'Sign in';

  constructor(private tokenStorageService: TokenStorageService,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {

    if (this.tokenStorageService.getToken()) {
      this.welcomeMessage = 'Welcome, ';
      this.clickableMessage = this.tokenStorageService.getAccount().username;
    }

    this.authenticationService.getLoggedInType.subscribe(
      type => {
        if (type == 'login') {
          this.welcomeMessage = 'Welcome, ';
          this.clickableMessage = this.tokenStorageService.getAccount().username;
        }
        else {
          this.welcomeMessage = '';
          this.clickableMessage = 'Sign in'
        }
      }
    );
  }

}
