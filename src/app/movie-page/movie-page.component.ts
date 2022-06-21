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


  async update($event: Review) {
    
    await this.reviewService.createReview($event);
    await this.movieService.getMovieByIdAsPromise(this.id);

    this.reviews$ = this.reviewService.getReviewsFromApplcationState();
    this.movie$ = this.movieService.getMovieFromApplicationState(); 
  }

  onReviewSubmit($event: Review) {

    this.update($event);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
