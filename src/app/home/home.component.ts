import { Component, OnInit } from '@angular/core';
import { Movie } from '../services/movie';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @ts-ignore
  movies$: Promise<Movie[] | undefined>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.movies$ = this.postService.getAllMovies();
  }

}