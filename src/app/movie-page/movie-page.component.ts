import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../types/movie';
import { MovieService } from '../services/movie.service';
import { Observable, tap } from 'rxjs';
import { Review } from '../types/review';
import { Individual } from '../types/individual';
import { IndividualService } from '../services/individual.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})

export class MoviePageComponent implements OnInit, OnDestroy {
  //@ts-ignore
  id: number;
  private sub: any;


  //@ts-ignore
  movie$: Observable<Movie>;

  // @ts-ignore
  reviews$: Observable<Review[]>;

  // @ts-ignore
  individuals$: Promise<Individual[] | undefined>;

  reviewExists = false;
  errorMessageReview = '';
  errorMessageVote = '';

  constructor(private movieService: MovieService,
              private reviewService: ReviewService,
              private individualService: IndividualService,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>
      {this.id =+params['id'];});

    this.movie$ = this.movieService.getMovieById(this.id);
    this.reviews$ = this.reviewService.getAllReviewsByMovieId(this.id);
    this.individuals$ = this.individualService.getIndividualsByMovieId(this.id);
  }

  async updateCreate($event: Review) {

    await this.reviewService.createReview($event)
    .catch((err) => {
      this.errorMessageReview = err.error.message;
      this.reviewExists = true;
    });
    await this.movieService.getMovieByIdAsPromise(this.id);

    this.reviews$ = this.reviewService.getReviewsFromApplicationState();
    this.movie$ = this.movieService.getMovieFromApplicationState();
  }

  async updateDelete($event: Review) {

    await this.reviewService.deleteReview($event);
    await this.movieService.getMovieByIdAsPromise(this.id);

    this.reviews$ = this.reviewService.getReviewsFromApplicationState();
    this.movie$ = this.movieService.getMovieFromApplicationState();
  }

  onReviewSubmit($event: Review) {

    this.updateCreate($event);
  }

  onReviewDelete($event: Review){
    this.updateDelete($event);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
