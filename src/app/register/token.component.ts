import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export enum TokenStatus {
	  VALID,
	  INVALID,
	  EXPIRED,
	  SENDING,
	  SENT
	}


@Component({
selector: 'app-token',
templateUrl: './token.component.html',
styleUrls: ['./register.component.scss']
})
export class TokenComponent implements OnInit {

	token : any = '';
	tokenStatus = TokenStatus;
    //@ts-ignore
	status : TokenStatus;
	errorMessage = '';

	constructor(private authenticationService: AuthenticationService,
                 private route: ActivatedRoute) {

	}

	ngOnInit(): void {
		this.token = this.route.snapshot.queryParamMap.get('token');
		if(this.token){
			this.authenticationService.verifyToken(this.token).subscribe(
			data => {
				this.status = TokenStatus[data.message as keyof typeof TokenStatus];
			}
			,
			err => {
				this.errorMessage = err.error.message;
			}
			);
		}	
	}

	resendToken(): void {
		this.status = TokenStatus.SENDING;
		this.authenticationService.resendToken(this.token).subscribe(
		data => {
			this.status = TokenStatus.SENT;
		}
		,
		err => {
			this.errorMessage = err.error.message;
		}
		);
	}
}