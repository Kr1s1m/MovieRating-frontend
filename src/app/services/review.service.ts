import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Review } from '../reviews/review';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  constructor(private httpClient: HttpClient) { }

  getAllReviewsByMovieId(movie_id: number) {
    return this.httpClient.get<Review[]>(environment.apiBackendPoint + '/api/v1/reviews/' + movie_id).toPromise();
  }
}
