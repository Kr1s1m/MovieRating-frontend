import { Component, OnInit } from '@angular/core';
import { Movie } from '../services/movie';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {
  // @ts-ignore
  movies$: Promise<Movie[] | undefined>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.movies$ = this.postService.getAllMovies();
  }

}
