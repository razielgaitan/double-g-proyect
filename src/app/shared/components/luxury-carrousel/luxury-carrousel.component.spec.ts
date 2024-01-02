import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryCarrouselComponent } from './luxury-carrousel.component';

describe('LuxuryCarrouselComponent', () => {
  let component: LuxuryCarrouselComponent;
  let fixture: ComponentFixture<LuxuryCarrouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuxuryCarrouselComponent]
    });
    fixture = TestBed.createComponent(LuxuryCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
