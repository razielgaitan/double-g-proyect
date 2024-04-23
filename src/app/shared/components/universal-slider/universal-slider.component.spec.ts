import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalSliderComponent } from './universal-slider.component';

describe('UniversalSliderComponent', () => {
  let component: UniversalSliderComponent;
  let fixture: ComponentFixture<UniversalSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversalSliderComponent]
    });
    fixture = TestBed.createComponent(UniversalSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
