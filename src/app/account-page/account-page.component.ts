import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account.service';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit, OnDestroy {
  //@ts-ignore
  id: number;
  private sub: any;

  //@ts-ignore
  account$: Promise<Account | undefined>;

  //@ts-ignore
  reviews$: Promise<Review[] | undefined>;

  //@ts-ignore
  karma$: Promise<number | undefined>;

  constructor(private accountService: AccountService,
    private reviewService: ReviewService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => { this.id = +params['id']; });

    this.account$ = this.accountService.getAccountById(this.id);
    this.reviews$ = this.reviewService.getAllReviewsByAccountId(this.id);
    this.karma$ = this.accountService.getKarmaByAccountId(this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
