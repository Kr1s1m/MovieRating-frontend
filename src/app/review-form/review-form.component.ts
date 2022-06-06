import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../types/review';
import { FormBuilder } from '@angular/forms';
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

  reviewForm = this.formBuilder.group({
    title:'',
    score:5,
    body:'',
    name:''
  });

  constructor(private formBuilder: FormBuilder,
              private reviewService: ReviewService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    console.log('submitted');
  }
}
