import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMarcasComponent } from './carousel-marcas.component';

describe('CarouselMarcasComponent', () => {
  let component: CarouselMarcasComponent;
  let fixture: ComponentFixture<CarouselMarcasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselMarcasComponent]
    });
    fixture = TestBed.createComponent(CarouselMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
