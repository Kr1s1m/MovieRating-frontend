import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Individual } from '../types/individual';

@Injectable({
  providedIn: 'root'
})
export class IndividualService {

  constructor(private httpClient: HttpClient) { }

  getIndividualById(id: number){
    return this.httpClient
    .get<Individual>(environment.apiBackendPoint + '/api/v1/individuals/' + id)
    .toPromise();
  }

  getIndividualsByMovieId(movie_id: number) {
    return this.httpClient
    .get<Individual[]>(environment.apiBackendPoint + '/api/v1/individuals/movie-page/' + movie_id)
    .toPromise();
  }

}
