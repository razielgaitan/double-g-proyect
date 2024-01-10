import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicoComponent } from './mosaico.component';

describe('MosaicoComponent', () => {
  let component: MosaicoComponent;
  let fixture: ComponentFixture<MosaicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MosaicoComponent]
    });
    fixture = TestBed.createComponent(MosaicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
