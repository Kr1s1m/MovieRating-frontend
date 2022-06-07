import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../types/review';
import { NgForm } from '@angular/forms';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  @Input()
  //@ts-ignore
  movieId: number;

  //@ts-ignore
  review: Review;

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
  }

  onSubmit(reviewForm: NgForm): void {

    this.review = new Review(
      this.movieId,
      reviewForm.value.title,
      reviewForm.value.reviewerName, 
      reviewForm.value.score,
      reviewForm.value.body);

    this.reviewService.createReview(this.review);

    window.location.reload();
  }
}
