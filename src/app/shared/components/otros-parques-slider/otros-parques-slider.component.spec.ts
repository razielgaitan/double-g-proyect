import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosParquesSliderComponent } from './otros-parques-slider.component';

describe('OtrosParquesSliderComponent', () => {
  let component: OtrosParquesSliderComponent;
  let fixture: ComponentFixture<OtrosParquesSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtrosParquesSliderComponent]
    });
    fixture = TestBed.createComponent(OtrosParquesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
