import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualPageComponent } from './individual-page.component';

describe('IndividualPageComponent', () => {
  let component: IndividualPageComponent;
  let fixture: ComponentFixture<IndividualPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
