import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-contacto-newsletter',
  templateUrl: './contacto-newsletter.component.html',
  styleUrls: ['./contacto-newsletter.component.scss']
})
export class ContactoNewsletterComponent {
  private contactCardFlipped = false;
  private newsletterCardFlipped = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  flipContactCard(): void {
    this.contactCardFlipped = true;

    this.renderer.listen('document', 'mouseup', () => {
      this.contactCardFlipped = false;
    });
  }

  flipNewsletterCard(): void {
    this.newsletterCardFlipped = true;

    this.renderer.listen('document', 'mouseup', () => {
      this.newsletterCardFlipped = false;
    });
  }

  isContactCardFlipped(): boolean {
    return this.contactCardFlipped;
  }

  isNewsletterCardFlipped(): boolean {
    return this.newsletterCardFlipped;
  }
}
