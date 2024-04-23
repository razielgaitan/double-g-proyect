import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParquesSliderComponent } from './parques-slider.component';

describe('ParquesSliderComponent', () => {
  let component: ParquesSliderComponent;
  let fixture: ComponentFixture<ParquesSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParquesSliderComponent]
    });
    fixture = TestBed.createComponent(ParquesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
