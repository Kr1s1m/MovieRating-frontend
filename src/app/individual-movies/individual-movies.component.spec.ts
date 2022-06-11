import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualMoviesComponent } from './individual-movies.component';

describe('IndividualMoviesComponent', () => {
  let component: IndividualMoviesComponent;
  let fixture: ComponentFixture<IndividualMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
