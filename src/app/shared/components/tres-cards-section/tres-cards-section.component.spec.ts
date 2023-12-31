import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresCardsSectionComponent } from './tres-cards-section.component';

describe('TresCardsSectionComponent', () => {
  let component: TresCardsSectionComponent;
  let fixture: ComponentFixture<TresCardsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TresCardsSectionComponent]
    });
    fixture = TestBed.createComponent(TresCardsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
