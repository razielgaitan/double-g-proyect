import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoNewsletterComponent } from './contacto-newsletter.component';

describe('ContactoNewsletterComponent', () => {
  let component: ContactoNewsletterComponent;
  let fixture: ComponentFixture<ContactoNewsletterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoNewsletterComponent]
    });
    fixture = TestBed.createComponent(ContactoNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
