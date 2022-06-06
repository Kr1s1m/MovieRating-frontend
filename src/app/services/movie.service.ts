import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../types/movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getAllMovies() {
    return this.httpClient.get<Movie[]>(environment.apiBackendPoint + '/api/v1/movies').toPromise();
  }

  getMovieById(id: number){
    return this.httpClient.get<Movie>(environment.apiBackendPoint + '/api/v1/movies/' + id).toPromise();
  }
}
