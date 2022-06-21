import { Component, Input, OnInit, Output } from '@angular/core';
import { Review } from '../types/review';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

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

  currentScore: number | null = null;

  loggedIn = false;

  @Output()
  submitEmitter: EventEmitter<Review> = new EventEmitter();


  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    if(this.tokenStorageService.getToken())
    {
      this.loggedIn = true;
    }
  }

  clearCurrentScore() {
    this.currentScore = null;
  }

  onSubmit(reviewForm: NgForm): void {

    this.review = new Review(
      this.movieId,
      this.tokenStorageService.getAccount().id,
      this.tokenStorageService.getAccount().username, 
      reviewForm.value.title,
      reviewForm.value.score,
      reviewForm.value.body);

    this.submitEmitter.emit(this.review);

    reviewForm.resetForm();
  }
}
