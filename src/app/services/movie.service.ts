import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../types/movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  movie$ : BehaviorSubject<Movie> = new BehaviorSubject<Movie>(new Movie());

  constructor(private httpClient: HttpClient) { }

  getAllMovies() {
    return this.httpClient.get<Movie[]>(environment.apiBackendPoint + '/api/v1/movies').toPromise();
  }


  getMovieById(id: number){
    return this.httpClient.get<Movie>(environment.apiBackendPoint + '/api/v1/movies/' + id)
      .pipe(
        tap((movie: Movie) => { this.movie$.next(movie); })
      );
  }

  getMovieByIdAsPromise(id: number){
    return this.httpClient.get<Movie>(environment.apiBackendPoint + '/api/v1/movies/' + id)
      .pipe(
        tap((movie: Movie) => { this.movie$.next(movie); })
      ).toPromise();
  }

  getMovieFromApplicationState()
  {
    return this.movie$.asObservable();
  }

}
