import { Component, OnInit } from '@angular/core';
import { Movie } from '../services/movie';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {

  //movie: Movie;

  // @ts-ignore
  reviews$: Promise<Review[] | undefined>

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    //this.reviews$ = this.reviewService.getAllReviewsByMovieId(this.movie.id);
  }

}
