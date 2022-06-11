import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../types/movie';

@Component({
  selector: 'app-individual-movies',
  templateUrl: './individual-movies.component.html',
  styleUrls: ['./individual-movies.component.scss']
})
export class IndividualMoviesComponent implements OnInit {

  @Input()
  movies: Movie[] = [];

  groupedMovies: any;

  constructor() { }

  ngOnInit(): void {
    this.groupedMovies = this.groupByMovie();
    //console.log(this.groupedMovies);
  }

  groupByMovie() {
    return this.movies.reduce(
      (result, movie) => {

        if(movie.id in result)
        {
          result[movie.id].starType += ", " + movie.starType;
        }
        else
        {
          result[movie.id] = new Movie(
            movie.id, movie.title, movie.year, movie.starType, movie.votes, movie.rating);
        }
        
        return result; 
      }, Object.create(null)
    );
  }

}
