import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, flatMap, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Review } from '../types/review';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  reviews$: BehaviorSubject<Review[]> = new BehaviorSubject<Review[]>([]);

  constructor(private httpClient: HttpClient) { }

  getAllReviewsByMovieId(movie_id: number) {
    return this.httpClient.get<Review[]>(environment.apiBackendPoint + '/api/v1/reviews/' + movie_id)
    .pipe(
      tap((reviews: Review[]) => {this.reviews$.next(reviews);})
    );
  }

  createReview(review: Review) : Observable<any> {
    return this.httpClient.post<Review>(environment.apiBackendPoint + '/api/v1/reviews/', review, httpOptions)
    .pipe(
      flatMap(() => this.getAllReviewsByMovieId(review.movieId))
    );
  }

  getReviewsFromApplcationState() {
    return this.reviews$.asObservable();
  }
}
