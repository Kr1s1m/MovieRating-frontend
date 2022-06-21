import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Review } from '../types/review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  @Input()
  reviews: Review[] = [];

  //@ts-ignore
  isAdminLogged = false;
  roles: string[] = [];

  @Output()
  deleteEmitter: EventEmitter<Review> = new EventEmitter();

  constructor(private tokenStorageService: TokenStorageService,
              private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.roles = this.tokenStorageService.getAccount().roles;
    if(this.roles.includes('Admin'))
    {
      this.isAdminLogged = true;
    }
  }

  onDelete(review: Review) {
    this.deleteEmitter.emit(review);
  }

}
