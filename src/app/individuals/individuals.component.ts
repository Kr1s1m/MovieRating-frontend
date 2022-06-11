import { Component, Input, OnInit } from '@angular/core';
import { Individual } from '../types/individual';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  styleUrls: ['./individuals.component.scss']
})
export class IndividualsComponent implements OnInit {

  @Input()
  individuals: Individual[] = []

  groupedIndividuals: any;

  constructor() { }

  ngOnInit(): void {
    this.groupedIndividuals = this.groupByStarType();
    console.log(this.groupedIndividuals);
  }

  groupByStarType() {
    return this.individuals.reduce(
      (result, individual) => {
        result[individual.starType] = result[individual.starType] || [];
        result[individual.starType].push(individual);
        return result;
      }, Object.create(null));
  }

}
