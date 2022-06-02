import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllMovies() {
    return this.httpClient.get<Movie[]>(environment.apiBackendPoint + '/api/v1/movies').toPromise();
  }

}
