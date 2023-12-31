import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaAutosComponent } from './galeria-autos.component';

describe('GaleriaAutosComponent', () => {
  let component: GaleriaAutosComponent;
  let fixture: ComponentFixture<GaleriaAutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaleriaAutosComponent]
    });
    fixture = TestBed.createComponent(GaleriaAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
