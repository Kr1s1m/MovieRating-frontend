import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../types/movie';

@Component({
  selector: 'app-contents',
  templateUrl: './home-contents.component.html',
  styleUrls: ['./home-contents.component.scss']
})
export class HomeContentsComponent implements OnInit {

  @Input()
  movies: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
