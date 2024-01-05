import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCardsComponent } from './experience-cards.component';

describe('ExperienceCardsComponent', () => {
  let component: ExperienceCardsComponent;
  let fixture: ComponentFixture<ExperienceCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceCardsComponent]
    });
    fixture = TestBed.createComponent(ExperienceCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
