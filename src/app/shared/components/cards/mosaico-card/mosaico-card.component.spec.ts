import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicoCardComponent } from './mosaico-card.component';

describe('MosaicoCardComponent', () => {
  let component: MosaicoCardComponent;
  let fixture: ComponentFixture<MosaicoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MosaicoCardComponent]
    });
    fixture = TestBed.createComponent(MosaicoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
