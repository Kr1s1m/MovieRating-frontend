import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../services/movie';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  @Input()
  movies: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
