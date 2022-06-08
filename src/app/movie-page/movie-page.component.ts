import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../types/movie';
import { MovieService } from '../services/movie.service';

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
  movie$: Promise<Movie | undefined>; //for the loadMovieById()

  // @ts-ignore
  reviews$: Promise<Review[] | undefined>; //for the loadReviewsByMovieId()

  constructor(private reviewService: ReviewService,
              private movieService: MovieService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>
      {this.id =+params['id'];});

    this.movie$ = this.movieService.getMovieById(this.id);
    this.reviews$ = this.reviewService.getAllReviewsByMovieId(this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
