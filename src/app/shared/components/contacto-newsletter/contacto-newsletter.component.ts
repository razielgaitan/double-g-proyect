import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto-newsletter',
  templateUrl: './contacto-newsletter.component.html',
  styleUrls: ['./contacto-newsletter.component.scss']
})
export class ContactoNewsletterComponent {
  private contactCardFlipped = false;
  private newsletterCardFlipped = false;

  flipContactCard(): void {
    if (!this.contactCardFlipped) {
      this.contactCardFlipped = true;
    }
  }

  flipNewsletterCard(): void {
    if (!this.newsletterCardFlipped) {
      this.newsletterCardFlipped = true;
    }
  }

  isContactCardFlipped(): boolean {
    return this.contactCardFlipped;
  }

  isNewsletterCardFlipped(): boolean {
    return this.newsletterCardFlipped;
  }
}
