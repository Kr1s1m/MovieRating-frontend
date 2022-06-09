import { Component, Input, OnInit } from '@angular/core';
import { Individual } from '../types/individual';

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  styleUrls: ['./individuals.component.scss']
})
export class IndividualsComponent implements OnInit {

  @Input()
  individuals: Individual[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
