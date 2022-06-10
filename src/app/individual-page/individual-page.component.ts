import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndividualService } from '../services/individual.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-individual-page',
  templateUrl: './individual-page.component.html',
  styleUrls: ['./individual-page.component.scss']
})
export class IndividualPageComponent implements OnInit {

  //@ts-ignore
  id: number;

  private sub: any;

  //@ts-ignore
  individual$: Promise<Individual | undefined>;

  //@ts-ignore
  movies$: Promise<Movie[] | undefined>;

  constructor(private individualService: IndividualService,
              private movieService: MovieService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params =>
      {this.id =+params['id'];});

    this.individual$ = this.individualService.getIndividualById(this.id);
    this.movies$ = this.movieService.getMoviesByIndividualId(this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
